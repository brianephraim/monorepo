export default (webpackMakeCompiler) => {
  webpackMakeCompiler().run((err, stats) => {
    if (err) {
      console.error(err.stack || err);
      if (err.details) {
        console.error(err.details);
      }
      return;
    }

    const info = stats.toJson();

    if (stats.hasErrors()) {
      info.errors.forEach((e) => {
        console.error('\x1b[31m', e, '\x1b[0m');
      });
    }

    if (stats.hasWarnings()) {
      info.warnings.forEach((w) => {
        console.warn('\x1b[33m', w, '\x1b[0m');
      });
    }
  });
};
