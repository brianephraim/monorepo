function ensureLeadingSlash(str) {
  return str.replace(/^\/?/, '/');
}
export default ensureLeadingSlash;
