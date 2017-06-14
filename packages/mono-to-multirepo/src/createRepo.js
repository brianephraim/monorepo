import { exec } from 'child-process-promise';
import fs from 'fs-extra';
import generatePackageDotJsonContent from './generatePackageDotJsonContent';

function createRepo(repoName, token) {
  return exec(`curl -H "Authorization: token ${token}" https://api.github.com/user/repos -d '{"name":"${repoName}"}'`)
  .then(({ error, stdout }) => {
    if (error) {
      return Promise.reject(new Error(error));
    }
    const response = JSON.parse(stdout);
    if (response.errors && response.errors.length) {
      return Promise.reject(new Error(stdout));
    }
    const packageDotJsonPath = `./packages/${repoName}/package.json`;

    const packageDotJsonContents = generatePackageDotJsonContent({
      toExtend: fs.readJsonSync(packageDotJsonPath),
      repoName,
      url: response.clone_url,
    });

    fs.writeJsonSync(packageDotJsonPath, packageDotJsonContents, { spaces: 2 });
    return {
      packageFolderName: repoName,
      repoUrl: response.clone_url,
    };
  });
}

export default createRepo;
