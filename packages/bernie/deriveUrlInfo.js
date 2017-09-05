const standardModes = [
  {
    mode: 'f',
    featured: false,
    old: true,
  },
  {
    mode: 'ut',
    featured: false,
  },
  {
    mode: 'b',
    featured: false,
    old: true,
  },
  {
    mode: 'h',
    featured: false,
    old: true,
  },
  {
    mode: 'selfie',
    featured: false,
    old: true,
  },
  {
    mode: 'h3',
    featured: true,
  },
  {
    mode: 'h4',
    featured: true,
  },
  {
    mode: 'wg',
    featured: true,
  },
];
module.exports.standardModes = standardModes;
// module.exports.getStandardModesRegex = function(nameSpace) {
//   let pipedString = '';
//   for (let i = 0, l = module.exports.standardModes.length; i < l; i++) {
//     let mode = module.exports.standardModes[i].mode;
//     mode = nameSpace ? `${nameSpace}/${mode}` : mode;
//     console.log('mode', mode);
//     pipedString += i > 0 ? `|${mode}` : mode;
//   }
//   return new RegExp(`^[/](${pipedString})[/](.+)`);
// };
const standardModesRegexArrayString = module.exports.standardModes
  .map(item => {
    return item.mode;
  })
  .join('|');
module.exports.standardModesRegexArrayString = standardModesRegexArrayString;
const standardModesDict = module.exports.standardModes.reduce((accum, item) => {
  accum[item.mode] = true;
  return accum;
}, {});

// module.exports.oldModes = (function() {
//   const a = [];
//   for (let i = 0, l = module.exports.standardModes.length; i < l; i++) {
//     if (module.exports.standardModes[i].old) {
//       a.push(module.exports.standardModes[i]);
//     }
//   }
//   return a;
// })();

// module.exports.isOldMode = function(toCompare) {
//   let is = false;
//   for (let i = 0, l = module.exports.oldModes.length; i < l; i++) {
//     is = is || toCompare === module.exports.oldModes[i].mode;
//   }
//   return is;
// };

// const containsStardardModeCache = {};
// module.exports.containsStardardMode = function(url) {
//   let contains = false;
//   if (typeof containsStardardModeCache[url] === 'undefined') {
//     for (let i = 0, l = module.exports.standardModes.length; i < l; i++) {
//       const mode = module.exports.standardModes[i].mode;
//       contains = contains || url.indexOf(mode) !== -1;
//     }
//     containsStardardModeCache[url] = contains;
//   }
//   return containsStardardModeCache[url];
// };

module.exports.formUrl = compositeImageData => {
  const fg = compositeImageData.foreground;
  const bg = compositeImageData.background;
  const mode = standardModesDict[fg.srcKey] ? fg.srcKey : 'ut';
  const maybeFgSrcKeyRoute = mode === 'ut' ? `/${fg.srcKey}` : '';
  const url = `${mode}/${bg.srcKey}/${fg.x}_${fg.y}_${fg.width}_${fg.height}_${bg.width}_${bg.height}${maybeFgSrcKeyRoute}`;
  return url;
};
