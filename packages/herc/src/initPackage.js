const inquirer = require('inquirer');
const exec = require('child-process-promise').exec;

module.exports = () => {
  let packageName;
  inquirer.prompt([
    {
      type: 'input',
      name: 'repoName',
      message: 'NAME your package/repo',
      default: () => {
        return 'Doe';
      },
      validate: (value) => {
        if (value) {
          packageName = value;
          return true;
        }

        return 'NAME your package/repo';
      },
    },
    {
      type: 'input',
      name: 'npmScope',
      message: (answersSoFar) => {
        return `NPM local scope? (prefix into @defualt/${answersSoFar.repoName} on npm) (default "yes")`;
      },
      default: () => {
        return 'y';
      },
    },
  ]).then((answers) => {
    const repoName = answers.repoName;
    const makeMsg = (exclamation, destination, name) => {
      return `${exclamation}!, ${destination}, ${name} is ${(exclamation === 'Bad' ? 'NOT ' : '')}available!`;
    };
    const useScope = answers.npmScope[0].toLowerCase() === 'y';
    const nameWithScope = useScope ? `@defualt/${repoName}` : repoName;
    const semiEncodedNameWithScope = useScope ? `@defualt${encodeURIComponent('/')}${repoName}` : repoName;
    exec(`curl https://registry.npmjs.org/${semiEncodedNameWithScope}/`).then(({ error, stdout }) => {
      const npmAvailable = !JSON.parse(stdout).name;
      console.info(npmAvailable ? makeMsg('Good', 'NPM', nameWithScope) : makeMsg('Bad', 'NPM', nameWithScope));
    });
    exec(`curl -s -o /dev/null -w "%{http_code}" https://github.com/defualt/${repoName}/`).then(({error, stdout}) => {
      const repoAvailable = stdout !== '200';
      console.info(repoAvailable ? makeMsg('Good', 'Github', repoName) : makeMsg('Bad', 'Github', repoName));        
    });
  }).catch((r) => {
    console.log('caught',r);
  });
};


  function initPackageDotJson(repoName) {
    let packageDotJsonContents;
    
    // Promise.all
    try {
      
    } catch (e) {
      console.log('eee',e);
    }

    // throw 'asdf';

  }
  initPackageDotJson('hercx');