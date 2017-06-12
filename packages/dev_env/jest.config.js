/* eslint-disable no-useless-escape */
module.exports = {
  verbose: true,
  testMatch: ['**/?(*.)(test).js?(x)'],
  rootDir: process.cwd(),
  moduleDirectories: ['node_modules', 'packages'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `${__dirname}/__mocks__/fileMock.js`,
    '\\.(css|less)$': 'identity-obj-proxy',
  },
  resolver: `${__dirname}/jest-webpack-resolver.js`,
  moduleFileExtensions: ['js', 'jsx'],
  modulePathIgnorePatterns: [
    '<rootDir>.*\/node_modules\/.*',
  ],
};
