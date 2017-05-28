function docListeners(addOrRemove, ...args) {
  let arrayOfArgSets = args;
  if (typeof args[0] === 'string') {
    arrayOfArgSets = [eventName, cb];
  }
  arrayOfArgSets.forEach((argSet) => {
    const [eventName, cb] = argSet;
    document[`${addOrRemove}EventListener`](eventName, cb, false);
  });
}
export default docListeners;
