import express from 'express';
import makeServeChainableExpress from '@defualt/make-serve-chainable-express';
import ensureLeadingSlash from '@defualt/ensure-leading-slash';


export default makeServeChainableExpress((app, nameSpace) => {
  app.get(ensureLeadingSlash(`${nameSpace}/junk-express`),(req, res) => {
      res.send({
          status:"success",
      })
  });
});

