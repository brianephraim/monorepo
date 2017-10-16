function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function makeProfileFrameConstants(namingBasis,isUrlRoot) {  
  const appNameSpace = namingBasis;
  const urlAppNameSpace = isUrlRoot ? '' : `/${namingBasis}`;

  const tweetUrl = `https://twitter.com/intent/tweet?url=xXxXxXxXxXxXxXxXxXxXxXxX&via=${namingBasis}selfie&hashtags=BernieSanders%2Cfeelthebern%2Cbernieselfie&related=BernieSanders`; // !!!!!
  const assetUrlPrefix = 'http://s3-us-west-1.amazonaws.com/bernieapp/'
  const fgImagePrefix = `${assetUrlPrefix}decorations/`;
  const bgImagePrefix = `${assetUrlPrefix}selfies/`;
  const imageSuffix = '.png';
  const appPublishDomain = `${namingBasis}selfie.com`;
  const adminEmail = `admin@${appPublishDomain}`;
  const disclaimerText = `${appPublishDomain} is not affiliated with any political party, candidate,or interest group.`
  
  const NamingBasis = capitalizeFirstLetter(namingBasis);
  const topBanner = {
    href: `http://www.berniesanders.com/`,
    text: `Contribute to ${NamingBasis}`
  };
  const backendApiPrefix = '/bernieserver';
  const heroImageAltText = `My ${NamingBasis}Selfie`;
  const appSubTitle = `Support ${NamingBasis} with your picture`;
  const appTitle = `${NamingBasis}Selfie.com`;

  const headTitle = `${NamingBasis} Selfie`;
  const headDescription = `Support ${NamingBasis} with your selfie photo`;
  const headMetaOgTitle = `My selfie for ${NamingBasis}`;
  const headMetaOgSiteName = `${NamingBasis}Selfie`;
  const headMetaOgDescription = `${appPublishDomain} uses your selfie to support ${NamingBasis}.  Save the generated image and share to Facebook, Twitter, and Instagram.`
  const headMetaFbAppId = `1633460223596071`;
  const headMetaOgType = `profile`;
  const headMetaOgLocale = `en_US`;
  const headMetaOgImageWidth = `1200`;
  const headMetaOgImageHeight = `1200`;
  const headMetaTwitterCard = `summary_large_image`;
  const headMetaTwitterSite = `@${namingBasis}selfie`;
  const headMetaTwitterCreator = headMetaTwitterSite;
  const headMetaTwitterTitle = `My selfie for ${NamingBasis}`;
  const headMetaTwitterDescription = headMetaOgDescription;
  const googleFonts = 'Fjalla+One|Cantarell';

  return {
    isUrlRoot,
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
    headTitle,
    headDescription,
    headMetaOgTitle,
    headMetaOgSiteName,
    headMetaOgDescription,
    headMetaFbAppId,
    headMetaOgType,
    headMetaOgLocale,
    headMetaOgImageWidth,
    headMetaOgImageHeight,
    headMetaTwitterCard,
    headMetaTwitterSite,
    headMetaTwitterCreator,
    headMetaTwitterTitle,
    headMetaTwitterDescription,
    googleFonts,
  };
}
