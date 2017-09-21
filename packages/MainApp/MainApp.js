import Routing, {addRoutesToApp, routeData} from 'redux-routing-app-root-component';
import integrateBernie from 'profile-framer-frontend/setup'
import integrateToDoApp from 'todo_app/mainAppIntegration'
import integrateBattleship from 'battleship/mainAppIntegration'
import RouteLinksList from './RouteLinksList';
import './reset.css';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
function makeProfileFrameConstants(namingBasis,isUrlRoot) {
  // namingBasis = isUrlRoot ? 'qqq' : namingBasis;
  const NamingBasis = capitalizeFirstLetter(namingBasis);
  const appNameSpace = namingBasis;
  const APPNAMESPACE = namingBasis.toUpperCase();
  const urlAppNameSpace = `/${isUrlRoot ? 'qqq' : namingBasis}`;
  const urlAppNameSpaceNoSlash = isUrlRoot ? 'qqq' : namingBasis;
  const tweetUrl = `https://twitter.com/intent/tweet?url=xXxXxXxXxXxXxXxXxXxXxXxX&via=${namingBasis}selfie&hashtags=BernieSanders%2Cfeelthebern%2Cbernieselfie&related=BernieSanders`; // !!!!!
  const assetUrlPrefix = 'http://s3-us-west-1.amazonaws.com/bernieapp/'
  const fgImagePrefix = `${assetUrlPrefix}decorations/`;
  const bgImagePrefix = `${assetUrlPrefix}selfies/`;
  const imageSuffix = '.png';
  const appPublishDomain = `${namingBasis}selfie.com`;
  const adminEmail = `admin@${appPublishDomain}`;
  const disclaimerText = `${appPublishDomain} is not affiliated with any political party, candidate,or interest group.`
  const topBanner = {
    href: `http://www.${appPublishDomain}/`,
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
/*
  <meta charSet="utf-8" />
  <meta httpEquiv="x-ua-compatible" content="ie=edge" />
  <meta name="viewport" content="initial-scale=1, maximum-scale=1" />
  <title>Bernie Selfie</title>
  <meta name="description" content="Support Bernie Sanders 2016 with your selfie photo" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  
  <link href='https://fonts.googleapis.com/css?family=Fjalla+One|Cantarell' rel='stylesheet' type='text/css' />
  
  <link rel="stylesheet" href="/css/cropper.css" />
  <link rel="stylesheet" href="/css/reset.css" />
  <link rel="stylesheet" href="/css/sass-generated.css" />

  <meta property="og:title" content="My selfie for Bernie" />
  <meta property="og:site_name" content="BernieSelfie" />
  <meta property="og:url" content="http://www.bernieselfie.com/h3/zephyr1500589750771/237_19_218_218_553_369/" />
  <meta property="og:description" content="BernieSelfie.com uses your selfie to support Bernie Sanders for President.  Save the generated image and share to Facebook, Twitter, and Instagram." />
  <meta property="fb:app_id" content="1633460223596071" />
  <meta property="og:type" content="profile" />
  <meta property="og:locale" content="en_US" />
  <meta property="og:image" content={props.compositeImageUrl} />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="1200" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@bernieselfie" />
  <meta name="twitter:creator" content="@bernieselfie" />
  <meta name="twitter:title" content="My selfie for Bernie" />
  <meta name="twitter:description" content="Use bernieselfie.com to use your selfie to support Bernie Sanders for President.  Save the generated image and share to Facebook, Twitter, and Instagram." />
  <meta name="twitter:image" content={props.compositeImageUrl} />

*/



  return {
    isUrlRoot,
    appNameSpace,
    APPNAMESPACE,
    urlAppNameSpace,
    urlAppNameSpaceNoSlash,
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

integrateBernie(makeProfileFrameConstants('bernie',true));
integrateBernie(makeProfileFrameConstants('boomer'));
integrateBernie(makeProfileFrameConstants('behemoth'));
integrateToDoApp();
integrateBattleship();
addRoutesToApp({
  routesMap:{
    FALLBACK_ROUTE: '/doesnt-matter-bacause-key-is-FALLBACK_ROUTED-which-is-special'
  },
  routeRootComponent: RouteLinksList,
});

export default Routing;


export {routeData};


