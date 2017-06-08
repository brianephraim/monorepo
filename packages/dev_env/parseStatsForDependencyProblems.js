import fs from 'fs-extra';
import validateNpmPackageName from 'validate-npm-package-name';

function parseStatsForDependencyProblems(stats) {
  const packageDotJsonCache = {};
  const packageDepsCache = {};
  // fs.writeFileSync(process.cwd()+'/stats.json', JSON.stringify(stats.compilation.modules, null, 2));
  const toWrite = [];
  const problems = {};
  const registerProblem = (module, dep, problem) => {
    if (!problems[module]) {
      problems[module] = {};
    }
    problems[module][dep] = problem;
  };
  stats.compilation.modules.forEach((module) => {

    // only concerned with module entries from /packages/ folder (not node_modules)
    if (
      module.resource &&
      module.resource.indexOf(process.cwd() + '/packages') !== -1
    ) {
      const resourceSplit = module.resource.split('/packages/');
      const packageFolder = resourceSplit[1].split('/')[0];
      
      const packageDotJsonPath = `${resourceSplit[0]}/packages/${packageFolder}/package.json`;

      let packageDotJsonContent;
      let packageDotJsonDeps;
      if (packageDotJsonCache[packageDotJsonPath]) {
        packageDotJsonContent = packageDotJsonCache[packageDotJsonPath];
        packageDotJsonDeps = packageDepsCache[packageDotJsonPath];
      } else {
        try {
          packageDotJsonContent = fs.readJsonSync(packageDotJsonPath);
        } catch(e) {
          packageDotJsonContent = {};
        }
        packageDotJsonCache[packageDotJsonPath] = packageDotJsonContent;
        packageDotJsonDeps = Object.assign(
          {},
          packageDotJsonContent.dependencies,
          packageDotJsonContent.devDependencies
        );
        packageDepsCache[packageDotJsonPath] = packageDotJsonDeps;
      }

      // only concerned if module's package.json has a name, and if it is public on either NPM or Girhub
      if (packageDotJsonContent.name && (!packageDotJsonContent.private || !packageDotJsonContent.privateFromGithub)) {
        const slimModule = {
          resource: module.resource,
          context: module.context,
          rawRequest: module.rawRequest,
          dependencies: [],
          depsSummary: {}
        };
        
        module.dependencies.forEach((dep) => {
          if (dep.module) {
            const rawRequest = dep.module.rawRequest;
            // not a relative dependency
            if (rawRequest.indexOf('.') !== 0){
              const validationResult = validateNpmPackageName(rawRequest);
              const depToPush = {
                resource: dep.module.resource,
                context: dep.module.context,
                rawRequest: rawRequest,
                validationResult: validationResult,
              }
              if (validationResult.validForNewPackages) {
                // console.log(module.resource.split('/packages/')[0])
                // depToPush.summary = "GOOD !!!!!!";
                slimModule.depsSummary[rawRequest] = packageDotJsonDeps[rawRequest] || 'MISSING FROM PACKAGE.JSON';
                if (!packageDotJsonDeps[rawRequest]) {
                  registerProblem(module.resource, rawRequest, 'MISSING FROM PACKAGE.JSON');
                }
                

              } else {
                // depToPush.summary = "BAD #$**#$*";
                slimModule.depsSummary[rawRequest] = 'BAD FORMATTING';
                registerProblem(module.resource, rawRequest, 'BAD FORMATTING');
              }
              slimModule.dependencies.push(depToPush);
            }
          }
          // slimModule.dependencies.push(Object.keys(dep.module));
          // slimModule.dependencies.push(dep.resource);
          
        });
        toWrite.push(slimModule);
      }
    }
  });
  // 
  if(Object.keys(problems).length) {
    console.info('\x1b[1m', '\nProblems with dependencies' ,'\x1b[0m');
  }
  Object.keys(problems).forEach((moduleResource) => {
    console.info('\x1b[36m', '\n' + moduleResource ,'\x1b[0m');
    Object.keys(problems[moduleResource]).forEach((depName) => {
      const problemMsg = problems[moduleResource][depName];
      console.info('\x1b[33m', `${depName}: ${problemMsg}` ,'\x1b[0m');
    });
  });

  fs.writeFileSync(process.cwd()+'/stats.json', JSON.stringify(toWrite, null, 2));

  // fs.writeFileSync(process.cwd()+'/stats.json', inspect(stats.compilation.modules));
  // fs.writeFileSync(process.cwd()+'/stats.json', inspect(stats.compilation.modules[1].dependencies));
}

export default parseStatsForDependencyProblems;