import renderReactRoot from '@defualt/render-react-root';
import Routing, {addRoutesToApp} from 'redux-routing-app-root-component';
import integrateBernie from 'bernie/setup'
import integrateToDoApp from 'todo_app/mainAppIntegration'
import integrateBattleship from 'battleship/mainAppIntegration'
import RouteLinksList from './RouteLinksList';
import './reset.css';

const appNameSpace = 'boomer';
const urlAppNameSpace = `/${appNameSpace}`;
const tweetUrl = `https://twitter.com/intent/tweet?url=xXxXxXxXxXxXxXxXxXxXxXxX&via=bernieselfie&hashtags=BernieSanders%2Cfeelthebern%2Cbernieselfie&related=BernieSanders`;
const assetUrlPrefix = 'http://s3-us-west-1.amazonaws.com/bernieapp/'
const fgImagePrefix = `${assetUrlPrefix}decorations/`;
const bgImagePrefix = `${assetUrlPrefix}selfies/`;
const imageSuffix = '.png';
const appPublishDomain = 'bernieselfie.com';
const adminEmail = `admin@${appPublishDomain}`;
const disclaimerText = `${appPublishDomain} is not affiliated with any political party, candidate,or interest group.`
const topBanner = {
  href: 'http://www.berniesanders.com/',
  text: 'Contribute to Bernie at BernieSanders.com'
};
const backendApiPrefix = '/bernieserver';
const heroImageAltText = 'My BernieSelfie';
const appSubTitle = 'Support Bernie with your picture';
const appTitle = 'BernieSelfie.com';
const bernieConstants = {
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

integrateBernie(bernieConstants);
integrateToDoApp();
integrateBattleship();
addRoutesToApp({
  routesMap:{
    FALLBACK_ROUTE: '/doesnt-matter-bacause-key-is-FALLBACK_ROUTED-which-is-special'
  },
  routeRootComponent: RouteLinksList,
});

renderReactRoot(Routing);