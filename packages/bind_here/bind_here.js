function bind_here(context, methodNames) {
  //
  //
  //
  //
  //
  return methodNames.reduce((dict, method) => {
    dict[method] = context[method].bind(context);
    return dict;
  }, {});
}
export default bind_here;
