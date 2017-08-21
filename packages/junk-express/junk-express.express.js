import express from 'express';
import path from 'path';
import url from 'url';
import fs from 'fs';
import ensureLeadingSlash from '@defualt/ensure-leading-slash';
// var mymodule = require('./public/js/mymodule');
// var express = require('express');
// var ejs = require('ejs');
// var path = require('path');
// var url = require('url');
// var mongooseStuff = require('./js/mongooseStuff').x;
// var endpointCompositeImage = require('./js/endpointCompositeImage');

// var endpointGetNormalizedImageInfo = require('./js/endpointGetNormalizedImageInfo');

// var endpointGetS3SignedUploadUrl = require('./js/endpointGetS3SignedUploadUrl');

// var endpointIframeUpload = require('./js/endpointIframeUpload');
// var fs = require('fs');

/*
 * Set-up the Express app.
 */

export default ({app, port = 3000, nameSpace = ''}) => {
  console.log("junk-express");
  // This module either extends an existing express app
  // or creates a new express app
  let appIsBrandNew = false;
  if (!app) {
    appIsBrandNew = true;
    app = express();
  }
  nameSpace = 'bernieserver';
  app.get(ensureLeadingSlash(`${nameSpace}/junk-express`), function(req, res){
      res.send({
          status:"success",
      })
  });

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

