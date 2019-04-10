
function makeServeChainableExpress(serverLogic) {
  return ({app, nameSpace = ''}) => {

    serverLogic(app, nameSpace);

    return app;
  };
}

export default makeServeChainableExpress;