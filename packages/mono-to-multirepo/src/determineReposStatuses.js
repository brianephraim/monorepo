/* eslint-disable no-lonely-if */
import fs from 'fs-extra';

function determineReposStatuses(packagesWithChanges) {
  const reposStatuses = packagesWithChanges.reduce((statuses, packageFolderName) => {
    try {
      const packageDotJsonContents = fs.readJsonSync(`./packages/${packageFolderName}/package.json`);
      if (!packageDotJsonContents || packageDotJsonContents.privateFromGithub) {
        statuses.private.push({
          packageFolderName,
        });
      } else {
        if (packageDotJsonContents.repository && packageDotJsonContents.repository.url) {
          statuses.reposNeedingCommits.push({
            packageFolderName,
            repoUrl: packageDotJsonContents.repository.url,
          });
        } else {
          statuses.reposNeedingCommits.push({
            packageFolderName,
          });
        }
      }
    } catch (error) {
      statuses.noPackageDotJson.push({
        packageFolderName,
      });
    }
    return statuses;
  }, {
    reposNeedingCommits: [],
    private: [],
    noPackageDotJson: [],
  });
  return reposStatuses.reposNeedingCommits;
}

export default determineReposStatuses;
