import { exec } from 'child-process-es6-promise';

function getPackageFolderNames() {
  return exec('ls ./packages/')
  .then(({ stdout }) => {
    const packageFolderNames = stdout.split('\n');
    return packageFolderNames;
  });
}
export default getPackageFolderNames;
