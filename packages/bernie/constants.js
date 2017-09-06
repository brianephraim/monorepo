export const appNameSpace = 'bernie';
export const urlAppNameSpace = `/${appNameSpace}`;
export const tweetUrl = `https://twitter.com/intent/tweet?url=xXxXxXxXxXxXxXxXxXxXxXxX&via=bernieselfie&hashtags=BernieSanders%2Cfeelthebern%2Cbernieselfie&related=BernieSanders`;
const assetUrlPrefix = 'http://s3-us-west-1.amazonaws.com/bernieapp/'
export const fgImagePrefix = `${assetUrlPrefix}decorations/`;
export const bgImagePrefix = `${assetUrlPrefix}selfies/`;
export const imageSuffix = '.png';
const appPublishDomain = 'bernieselfie.com';
export const adminEmail = `admin@${appPublishDomain}`;
export const disclaimerText = `${appPublishDomain} is not affiliated with any political party, candidate,or interest group.`
export const topBanner = {
  href: 'http://www.berniesanders.com/',
  text: 'Contribute to Bernie at BernieSanders.com'
};
export const backendApiPrefix = '/bernieserver';
export const heroImageAltText = 'My BernieSelfie';
export const appSubTitle = 'Support Bernie with your picture';
export const appTitle = 'BernieSelfie.com';

const constants = {
  appNameSpace,
  urlAppNameSpace,
  tweetUrl,
  fgImagePrefix,
  bgImagePrefix,
  imageSuffix,
  adminEmail,
  disclaimerText,
  topBanner,
  backendApiPrefix,
  heroImageAltText,
  appSubTitle,
  appTitle,
};
export default constants;