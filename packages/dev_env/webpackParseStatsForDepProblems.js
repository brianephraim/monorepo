/* eslint-disable no-console */
import fs from 'fs-extra';
import validateNpmPackageName from 'validate-npm-package-name';

function ensureTrailingSlash(str) {
  return str.replace(/\/?$/, '/');
}

function ensureReadJsonSync(packageDotJsonPath) {
  let packageDotJsonContent;
  try {
    packageDotJsonContent = fs.readJsonSync(packageDotJsonPath);
  } catch (e) {
    packageDotJsonContent = {};
  }
  return packageDotJsonContent;
}

function showProblemsInConsole(problems) {
  if (Object.keys(problems).length) {
    console.info('\x1b[1m', '\nProblems with dependencies', '\x1b[0m');
  }
  Object.keys(problems).forEach((moduleResource) => {
    console.info('\x1b[36m', '\nProblem in module with `import` statement:', '\x1b[0m');
    console.info('\x1b[37m', ` ${moduleResource}`, '\x1b[0m');
    Object.keys(problems[moduleResource]).forEach((depName) => {
      const problemMsg = problems[moduleResource][depName].msg;
      console.info('\x1b[33m', 'Dependency requested as:', '\x1b[0m');
      console.info('\x1b[37m', ` ${depName}`, '\x1b[0m');
      console.info('\x1b[33m', `Message: ${problemMsg}`, '\x1b[0m');
      const problemInfo = problems[moduleResource][depName].info;
      if (problemInfo) {
        console.info('\x1b[37m', `- ${problemInfo.join('\n - ')}`, '\x1b[0m');
      }
    });
  });
}

function findDependenciesProblems(dependencies, packageDotJsonContent) {
  const problems = {};

  dependencies.forEach((dep) => {
    if (dep.module) {
      const rawRequest = dep.module.rawRequest;
      // if (rawRequest.indexOf('/Users/brianephraim/Sites/monorepo/packages') === 0) {
      //   console.info('\x1b[33m', 'depWTF', rawRequest, '\x1b[0m');
      //   console.log('depWTF', dep);
      // } else {
      //   console.info('\x1b[33m', 'depGGG', rawRequest, '\x1b[0m');
      //   console.log('depGGG', dep);
      // }

      // not a relative dependency
      // not an absolut dependency
      // we are only concerned with depenencies referenced like
      // `import asdf from 'asdf';`
      // or
      // `import qwer from 'asdf/qwer';``
      // or
      // `import asdf from '@defualt/asdf';``
      // These dependencies will be either in /node_modules/ or /packages/,
      // the latter for only monorepo use.
      if (rawRequest && rawRequest.indexOf('.') !== 0 && rawRequest.indexOf('/') !== 0) {
        const validationResult = validateNpmPackageName(rawRequest);
        if (validationResult.validForNewPackages) {
          if (
            !packageDotJsonContent ||
            (
              (
                !packageDotJsonContent.dependencies ||
                !packageDotJsonContent.dependencies[rawRequest]
              ) &&
              (
                !packageDotJsonContent.devDependencies ||
                !packageDotJsonContent.devDependencies[rawRequest]
              )
            )
          ) {
            problems[rawRequest] = { msg: 'MISSING FROM PACKAGE.JSON' };
          }
        } else {
          const info = [
            ...validationResult.warnings || [], ...validationResult.errors || [],
          ].filter((msg) => {
            return msg !== 'name can only contain URL-friendly characters';
          });
          // console.log(validationResult);
          if (info.length) {
            problems[rawRequest] = {
              msg: 'BAD FORMATTING',
              info: [...validationResult.warnings || [], ...validationResult.errors || []],
            };
          }
        }
      }
    }
  });

  return Object.keys(problems).length ? problems : null;
}

function webpackParseStatsForDepProblems(stats, shouldShowProblemsInConsole = true) {
  const isMonorepo = fs.existsSync(`${process.cwd()}/packages`);

  const packageDotJsonCache = {};
  const problems = {};
  const compilation = stats.compilation ? stats.compilation : stats.stats[0].compilation
  compilation.modules.forEach((module) => {
    // only concerned with module entries from /packages/ folder (not node_modules)
    if (
      module.resource &&
      module.resource.indexOf('node_modules') === -1
    ) {
      let packageDotJsonPath;
      if (isMonorepo) {
        let packagesDir = `${process.cwd()}/packages`;
        packagesDir = ensureTrailingSlash(packagesDir);
        // get substring from first trailing slash after whatever packagesDir is
        console.log(module.resource);
        const packageFolderName = module.resource.split(packagesDir)[1].split('/')[0];
        packageDotJsonPath = `${packagesDir}${packageFolderName}/package.json`;
      } else {
        packageDotJsonPath = `${process.cwd()}/package.json`;
      }

      const packageDotJsonContent = (
        packageDotJsonCache[packageDotJsonPath] || ensureReadJsonSync(packageDotJsonPath)
      );
      packageDotJsonCache[packageDotJsonPath] = packageDotJsonContent;

      const packageSomehowPublic = (
        !packageDotJsonContent.private ||
        !packageDotJsonContent.privateFromGithub
      );

      // only concerned if module's package.json is not empty,
      // and if it is public on either NPM or Girhub
      if (Object.keys(packageDotJsonContent).length && packageSomehowPublic) {
        const depProblems = findDependenciesProblems(module.dependencies, packageDotJsonContent);
        if (depProblems) {
          problems[module.resource] = depProblems;
        }
      }
    }
  });
  if (Object.keys(problems).length > 0 && shouldShowProblemsInConsole) {
    showProblemsInConsole(problems);
  }

  return problems;
}

export default webpackParseStatsForDepProblems;
