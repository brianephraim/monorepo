/* eslint-disable no-console */
/* eslint-disable comma-dangle */

const caseUtlity = require('case');
const inquirer = require('inquirer');
const exec = require('child-process-promise').exec;
const fs = require('fs-extra');
const generatePackageDotJsonContent = require('./generatePackageDotJsonContent');

function makeJsFile({ repoName, folderPath, flavor, nameWithScope, instructions = [] }) {
  const dotFlavor = `.${flavor}`;
  const filename = `${repoName}${flavor ? dotFlavor : ''}.js`;
  const fileContent = instructions.reduce((lines, instruction) => {
    const doers = {
      noConsole: () => {
        return '/* eslint-disable no-console */';
      },
      preferTemplate: () => {
        return '/* eslint-disable prefer-template */';
      },
      noUndef: () => {
        return '/* eslint-disable no-undef */';
      },
      import: () => {
        return `import ${repoName} from './${repoName}';\n`;
      },
      export: () => {
        return `export default '(exported value from ${filename})';`;
      },
      importLog: () => {
        return `console.log('logging from ${filename}', ${repoName});`;
      },
      complexLog: () => {
        return `console.log('logging data retrieved from "./${repoName}" as ${repoName} within  "${filename}" .  The value is "' + ${repoName} + '" .');`;
      },
      simpleLog: () => {
        return `console.log('logging from ${filename}');`;
      },
      test: () => {
        return `${''}test('adds 1 + 2 to equal 3', () => { expect(1 + 2).toBe(3); });`;
      },
      readme: () => {
        return `experimental - use with caution  \nrepoName: ${repoName}  \nnpm name: ${nameWithScope}  \n`;
      },
    };
    lines.push(doers[instruction]());
    return lines;
  }, []).join('\n');
  fs.writeFileSync(`${folderPath}${filename}`, `${fileContent}\n`);
}

function survey() {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'repoName',
      message: 'NAME your package/repo',
      default: () => {
        return 'Doe';
      },
      validate: (value) => {
        if (value) {
          return true;
        }

        return 'NAME your package/repo';
      },
    },
    {
      type: 'input',
      name: 'npmScope',
      message: (answersSoFar) => {
        return `NPM local scope? (prefix into @${process.env.NPM_SCOPE}/${answersSoFar.repoName} on npm) (default "yes")`;
      },
      default: () => {
        return 'yes';
      },
    },
    {
      type: 'input',
      name: 'privateNpm',
      message: 'Make it private from NPM? (Will not publish to NPM).  (default "no")',
      default: () => {
        return 'no';
      },
    },
    {
      type: 'input',
      name: 'privateGithub',
      message: 'Make it private from Github? (Will not publish to Github).  (default "no")',
      default: () => {
        return 'no';
      },
    },
  ]);
}

function validate(answers) {
  const repoName = answers.repoName;
  const makeMsg = (exclamation, destination, name) => {
    return `${exclamation}!, ${destination}, ${name} is ${(exclamation === 'Bad' ? 'NOT ' : '')}available!`;
  };
  const useScope = answers.npmScope[0].toLowerCase() === 'y';
  const isPrivateNpm = answers.privateNpm[0].toLowerCase() === 'y';
  const isPrivateGithub = answers.privateGithub[0].toLowerCase() === 'y';
  const nameWithScope = useScope ? `@${process.env.NPM_SCOPE}/${repoName}` : repoName;
  const semiEncodedNameWithScope = useScope ? `@${process.env.NPM_SCOPE}${encodeURIComponent('/')}${repoName}` : repoName;
  const folderPath = `${process.cwd()}/packages/${repoName}/`;
  const validations = [];
  validations.push(Promise.resolve(fs.existsSync(folderPath)).then((folderExists) => {
    const folderAvailable = !folderExists;
    console.info(folderAvailable ? makeMsg('Good', 'folder', repoName) : makeMsg('Bad', 'folder', repoName));
    if (!folderAvailable) {
      return Promise.reject(`Folder already exists: packages/${repoName}`);
    }
    return folderAvailable;
  }));
  if (!isPrivateNpm) {
    validations.push(
      exec(`curl https://registry.npmjs.org/${semiEncodedNameWithScope}/`).then(({ stdout }) => {
        const npmAvailable = !JSON.parse(stdout).name;
        console.info(npmAvailable ? makeMsg('Good', 'NPM', nameWithScope) : makeMsg('Bad', 'NPM', nameWithScope));
        if (!npmAvailable) {
          return Promise.reject(new Error(`NPM already exists: ${nameWithScope}`));
        }
        return npmAvailable;
      })
    );
  }
  if (!isPrivateGithub) {
    validations.push(
      exec(`curl -s -o /dev/null -w "%{http_code}" https://github.com/${process.env.NPM_SCOPE}/${repoName}/`).then(({ stdout }) => {
        const repoAvailable = stdout !== '200';
        console.info(repoAvailable ? makeMsg('Good', 'Github', repoName) : makeMsg('Bad', 'Github', repoName));
        if (!repoAvailable) {
          return Promise.reject(new Error(`Github project already exists: ${repoName}`));
        }
        return repoAvailable;
      })
    );
  }
  return Promise.all(validations).then(() => {
    console.log('ALLL GOOOOD');
    return {
      useScope,
      isPrivateNpm,
      isPrivateGithub,
      nameWithScope,
      repoName,
      folderPath,
    };
  });
}

function boilerplateFolder(details) {
  console.log(details.folderPath);
  fs.mkdirSync(details.folderPath);

  const packageDotJsonContent = generatePackageDotJsonContent({
    name: details.nameWithScope,
    isPrivate: details.isPrivateNpm,
    isPrivateFromGithub: details.isPrivateGithub,
  });
  fs.writeJsonSync(`${details.folderPath}package.json`, packageDotJsonContent, { spaces: 2 });

  makeJsFile({
    repoName: details.repoName,
    folderPath: details.folderPath,
    flavor: null,
    nameWithScope: details.nameWithScope,
    instructions: ['noConsole', 'preferTemplate', 'simpleLog', 'export'],
  });

  makeJsFile({
    repoName: details.repoName,
    folderPath: details.folderPath,
    flavor: 'demo',
    nameWithScope: details.nameWithScope,
    instructions: ['noConsole', 'preferTemplate', 'import', 'importLog', 'complexLog'],
  });

  makeJsFile({
    repoName: details.repoName,
    folderPath: details.folderPath,
    flavor: 'test',
    nameWithScope: details.nameWithScope,
    instructions: ['noUndef', 'noConsole', 'preferTemplate', 'import', 'importLog', 'test'],
  });

  const readmeFileContent = `experimental - use with caution  \nrepoName: ${details.repoName}  \nnpm name: ${details.nameWithScope}  \n`;
  fs.writeFileSync(`${details.folderPath}README.md`, readmeFileContent);
}


module.exports = () => {
  survey()
  .then(validate)
  .then(boilerplateFolder)
  .catch((r) => {
    console.log('\x1b[31m', 'INIT PACKAGE FAILED', r, '\x1b[0m');
  });
};
