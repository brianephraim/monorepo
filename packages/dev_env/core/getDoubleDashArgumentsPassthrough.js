module.exports = function getDoubleDashArgumentsPassthrough(){
  const argumentsPassThrough = process.argv.reduce((accum, argString) => {
    const toAppend = argString.indexOf('--') === 0 ? ` ${argString}` : '';
    return `${accum}${toAppend}`;
  }, '');
  return argumentsPassThrough;
}