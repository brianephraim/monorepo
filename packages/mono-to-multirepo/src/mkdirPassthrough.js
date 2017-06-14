import { exec } from 'child-process-promise';

function mkdirPassthrough(reposNeedingCommits) {
  if (reposNeedingCommits && reposNeedingCommits.length) {
    return exec('rm -rf tempRepos && mkdir tempRepos').then(() => {
      return reposNeedingCommits;
    });
  }
  return Promise.reject(new Error('No repos'));
}
export default mkdirPassthrough;
