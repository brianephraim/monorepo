import express from 'express';

function makeServeChainableExpress(serverLogic) {
  return ({app, port = 3000, nameSpace = ''}) => {
    let appIsBrandNew = false;
    if (!app) {
      appIsBrandNew = true;
      app = express();
    }
    // nameSpace = 'bernieserver';

    serverLogic(app, nameSpace);
    

    if (appIsBrandNew) {
      app.listen(port, (error) => {
        if (error) {
          console.error(error);
        } else {
          console.info(
            '🌎 Listening on port %s. Open up http://localhost:%s/ in your browser.',
            port,
            port,
          );
        }
      });
    }

    return app;
  };
}

export default makeServeChainableExpress;