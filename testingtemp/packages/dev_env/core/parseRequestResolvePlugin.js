/* eslint-disable func-names */
function parseRequestResolvePlugin(parseRequest = () => {}) {
  return {
    apply(resolver) {
      // I don't know why 'module' or 'resolve' are those values.
      // Something to do with the the way they are used in this file:
      // https://github.com/webpack/enhanced-resolve/blob/master/lib/ResolverFactory.js
      // So they can be other values as seen in that file.
      resolver.plugin(/* 'modules'*/ 'resolve', function (request, callback) {
        const newRequestStr = parseRequest(request.request);
        if (newRequestStr && newRequestStr !== request.request) {
          const obj = Object.assign({}, request, {
            request: newRequestStr,
          });
          this.doResolve('resolve', obj, 'blah blah', callback);
        } else {
          callback();
        }
      });
    },
  };
}

module.exports = parseRequestResolvePlugin;
