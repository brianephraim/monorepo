const argv = require('yargs').argv;
const fs = require('fs-extra');
const path = require('path');

const destPath = path.resolve(process.cwd(),argv._[1]);
const sourceOfDependencies = fs.readJsonSync(path.resolve(process.cwd(),argv._[0])).dependencies;
const destination = fs.readJsonSync(destPath);

destination.dependencies = sourceOfDependencies;

// console.log('sourceOfDependencies',sourceOfDependencies);
// console.log('destination',destination);
fs.writeJsonSync(destPath, destination, { spaces: 2 });
