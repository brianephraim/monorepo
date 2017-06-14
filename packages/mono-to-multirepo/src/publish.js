/* eslint-disable no-console */
import { argv } from 'yargs';
import getPackageFolderNames from './getPackageFolderNames';
import filterOutNonRepos from './filterOutNonRepos';
import mkdirPassthrough from './mkdirPassthrough';
import updateRemoteRepos from './updateRemoteRepos';

const toExport = () => {
  if (argv.m) {
    getPackageFolderNames()
    .then(filterOutNonRepos)
    .then(mkdirPassthrough)
    .then(updateRemoteRepos)
    .catch((e) => {
      console.log('CAUGHT!!', e);
    });
  } else {
    console.error('You must provide a commit message like ` --m "some message"`');
  }
};

export default toExport;
