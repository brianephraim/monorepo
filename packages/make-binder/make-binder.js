function makeBinder(context, methodName) {
  const functionCache = context[methodName];
  context[methodName] = (...args) => {
    return functionCache.bind(context, ...args);
  };
}

export default makeBinder;

