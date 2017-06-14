/* eslint-disable comma-dangle */

import { exec } from 'child-process-promise';

function getChangedPackages() {
  return exec('git ls-files -m')
  .then(({ stdout }) => {
    const packagesWithChanges = Object.keys(
      stdout.split('\n').reduce((accum, filePath) => {
        if (filePath.indexOf('packages/') === 0) {
          const packageFolderName = filePath.split('/')[1];
          accum[packageFolderName] = true;
        }
        return accum;
      }, {})
    );
    return packagesWithChanges;
  });
}

export default getChangedPackages;
