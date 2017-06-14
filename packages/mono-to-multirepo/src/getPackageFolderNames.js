import { exec } from 'child-process-promise';

function getPackageFolderNames() {
  return exec('ls ./packages/')
  .then(({ stdout }) => {
    const packageFolderNames = stdout.split('\n');
    return packageFolderNames;
  });
}
export default getPackageFolderNames;
