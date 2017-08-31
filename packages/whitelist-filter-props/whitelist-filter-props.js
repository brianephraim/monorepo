/* eslint-disable no-console */
/* eslint-disable prefer-template */
console.log('logging from whitelist-filter-props');
export default function whitelistFilterProps(obj, whitelist) {
  return Object.keys(obj).reduce((accum, key) => {
    const keyIsAllowed =
      whitelist.filter(whitelistItem => {
        return key === whitelistItem;
      }).length > 0;
    if (keyIsAllowed) {
      accum[key] = obj[key];
    }
    return accum;
  }, {});
}
