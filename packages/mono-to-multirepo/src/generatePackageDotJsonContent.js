import fs from 'fs-extra';
import path from 'path';
import packageJson from '../package.json';

function generatePackageDotJsonContent(settings) {
  const toExtend = settings.toExtend || {};
  const scopedPackageName = '@defualt/dev_env';
  const devEnvVersion = packageJson.dependencies[scopedPackageName];

  const devDependencies = {
    devDependencies: Object.assign(
      (settings.repoName !== 'dev_env' ? { [scopedPackageName]: devEnvVersion } : {}),
      toExtend.devDependencies,
    ),
  };

  const repository = settings.url ? {
    repository: {
      type: 'git',
      url: settings.url,
    },
  } : {};

  const name = settings.name ? {
    name: settings.name,
  } : {};

  const bundleForNode = settings.bundleForNode ? {
    bundleForNode: settings.bundleForNode,
  } : {};

  /*
    useScope,
    isPrivate,
    nameWithScope,
    repoName,
    folderPath,
  */
  const publishConfigOrPrivate = !settings.isPrivate ? {
    publishConfig: {
      access: 'public',
    },
  } : {
    private: true,
  };

  const publishConfigOrPrivateGithub = !settings.isPrivateFromGithub ? {} : {
    privateFromGithub: true,
  };

  const scripts = {
    scripts: Object.assign(
      {
        start: 'devenv',
      },
      toExtend.scripts,
    ),
  };

  const version = {
    version: toExtend.version || '0.0.1',
  };
  return Object.assign(
    toExtend, name, version, repository, publishConfigOrPrivate,
    publishConfigOrPrivateGithub, bundleForNode, scripts, devDependencies,
  );
}

export default generatePackageDotJsonContent;
