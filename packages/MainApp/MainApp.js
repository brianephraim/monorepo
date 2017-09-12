import React from 'react';
import universal from 'react-universal-component'
import renderReactRoot from '@defualt/render-react-root';
import Routing, {addRoutesToApp} from 'redux-routing-app-root-component';
import integrateBernie from 'profile-framer-frontend/setup'
import integrateToDoApp from 'todo_app/mainAppIntegration'
import integrateBattleship from 'battleship/mainAppIntegration'
import RouteLinksList from './RouteLinksList';
import './reset.css';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
function makeProfileFrameConstants(namingBasis) {
  const NamingBasis = capitalizeFirstLetter(namingBasis);
  const appNameSpace = namingBasis;
  const APPNAMESPACE = namingBasis.toUpperCase();
  const urlAppNameSpace = `/${appNameSpace}`;
  const tweetUrl = `https://twitter.com/intent/tweet?url=xXxXxXxXxXxXxXxXxXxXxXxX&via=${namingBasis}selfie&hashtags=BernieSanders%2Cfeelthebern%2Cbernieselfie&related=BernieSanders`;
  const assetUrlPrefix = 'http://s3-us-west-1.amazonaws.com/bernieapp/'
  const fgImagePrefix = `${assetUrlPrefix}decorations/`;
  const bgImagePrefix = `${assetUrlPrefix}selfies/`;
  const imageSuffix = '.png';
  const appPublishDomain = `${namingBasis}selfie.com`;
  const adminEmail = `admin@${appPublishDomain}`;
  const disclaimerText = `${appPublishDomain} is not affiliated with any political party, candidate,or interest group.`
  const topBanner = {
    href: `http://www.${appPublishDomain}/`,
    text: 'Contribute to Bernie at BernieSanders.com'
  };
  const backendApiPrefix = '/bernieserver';
  const heroImageAltText = `My ${NamingBasis}Selfie`;
  const appSubTitle = `Support ${NamingBasis} with your picture`;
  const appTitle = `${NamingBasis}Selfie.com`;
  return {
    appNameSpace,
    APPNAMESPACE,
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

}

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

function ToRender(props){
  return (<Routing {...props} />);
}

const p = 'redux-routing-app-root-component';
const UniversalComponent = universal((props) => import(`../redux-routing-app-root-component/${p}`), {
  minDelay: 1200,
})

renderReactRoot(UniversalComponent);
// renderReactRoot(ToRender);


export default class App extends React.Component {
  render() {
    const { index, done, loading } = this.state
    const page = pages[index]
    const loadingClass = loading ? styles.loading : ''
    const buttonClass = `${styles[page]} ${loadingClass}`

    return (
      <div>
        <h1>Hello Reactlandia</h1>
        {done && <div>all loaded ✔</div>}


        <UniversalComponent
          page={page}
          onBefore={this.beforeChange}
          onAfter={this.afterChange}
          onError={this.handleError}
        />

        <button onClick={this.changePage}>
          {this.buttonText()}
        </button>

        <p>
          <span>*why are you looking at this? refresh the page</span>
          <span>and view the source in Chrome for the real goods</span>
        </p>
      </div>
    )
  }

  constructor(props) {
    super(props)

    const { history } = props
    const index = indexFromPath(history.location.pathname)

    this.state = {
      index,
      loading: false,
      done: false,
      error: false
    }

    history.listen(({ pathname }) => {
      const index = indexFromPath(pathname)
      this.setState({ index })
    })
  }

  changePage = () => {
    if (this.state.loading) return

    const index = nextIndex(this.state.index)
    const page = pages[index]

    this.props.history.push(`/${page}`)
  }

  beforeChange = ({ isSync }) => {
    if (!isSync) {
      this.setState({ loading: true, error: false })
    }
  }

  afterChange = ({ isSync, isServer, isMount }) => {
    if (!isSync) {
      this.setState({ loading: false, error: false })
    }
    else if (!isServer && !isMount) {
      this.setState({ done: true, error: false })
    }
  }

  handleError = error => {
    this.setState({ error: true, loading: false })
  }

  buttonText() {
    const { loading, error } = this.state
    if (error) return 'ERROR'
    return loading ? 'LOADING...' : 'CHANGE PAGE'
  }
}
