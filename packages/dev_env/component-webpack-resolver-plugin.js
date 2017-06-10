import path from 'path';

export class ComponentResolverPlugin2 {
  constructor(source, target, {include}) {
    this.source = source;
    this.target = target;
    this.include = include;
  }
  apply(resolver) {
    resolver.plugin(this.source, (request, callback) => {
      if (request.request.indexOf('@defualt/') === 0) {
        const nextRequest = Object.assign({}, request, {request: request.request.replace('@defualt/','')});
        // const filePath = nextRequest.request
        // rfs.stat(filePath, (err, stats) => {
          console.log(nextRequest);
          resolver.doResolve(target, nextRequest, `some description`, callback);
        // });
        
      } else {
        callback();
      }
    });
    return;
    const target = this.target;
    console.log('target',target);
    resolver.plugin(this.source, (request, callback) => {
      if (request.request.indexOf('@defualt') === 0) {
        console.log(request);
      }
      // console.log(request.request.indexOf('aaa'));
      
      if (this.include && !request.path.startsWith(this.include)) {
        callback();
        return;
      }
      const rfs = resolver.fileSystem;
      const filename = `${path.basename(request.path)}.js`;
      const filePath = resolver.join(request.path, filename);
      if (request.request.indexOf('@defualt') === 0){
        console.log(request.path, '-cccccccc-', filePath);
      }
      return callback();
      rfs.stat(filePath, (err, stats) => {
        if (err || !stats.isFile()) {
          callback();
          return;
        }
        const indexPath = resolver.join(request.path, 'index.js');
        rfs.stat(indexPath, (indexErr, indexStats) => {
          if (!indexErr && indexStats.isFile()) {
            callback();
            return;
          }
          const relativePath = request.relativePath && resolver.join(request.relativePath, filename);
          const nextRequest = Object.assign({}, request, {path: filePath, relativePath});
          resolver.doResolve(target, nextRequest, `using path: ${filePath}`, callback);
        });
      });
    });
  }
}

export default class ComponentResolverPlugin {
  constructor(source, target, {include}) {
    this.source = source;
    this.target = target;
    this.include = include;
  }
  apply(resolver) {
    const target = this.target;
    resolver.plugin(this.source, (request, callback) => {
      if (this.include && !request.path.startsWith(this.include)) {
        callback();
        return;
      }
      const rfs = resolver.fileSystem;
      const filename = `${path.basename(request.path)}.js`;
      const filePath = resolver.join(request.path, filename);

      rfs.stat(filePath, (err, stats) => {
        if (err || !stats.isFile()) {
          callback();
          return;
        }
        const indexPath = resolver.join(request.path, 'index.js');
        rfs.stat(indexPath, (indexErr, indexStats) => {
          if (!indexErr && indexStats.isFile()) {
            callback();
            return;
          }
          const relativePath = request.relativePath && resolver.join(request.relativePath, filename);
          const nextRequest = Object.assign({}, request, {path: filePath, relativePath});
          resolver.doResolve(target, nextRequest, `using path: ${filePath}`, callback);
        });
      });
    });
  }
}

export function factory(opts = {}) {
  return new ComponentResolverPlugin('existing-directory', 'undescribed-raw-file', opts);
}

export function factory2(opts = {}) {
  return new ComponentResolverPlugin2('raw-module', 'undescribed-raw-file', opts);
}