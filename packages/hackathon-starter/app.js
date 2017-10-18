/**
 * Module dependencies.
 */
const serve = require('./serve');


export default function({app, nameSpace='auth'})  {
  serve({app, nameSpace});
}
