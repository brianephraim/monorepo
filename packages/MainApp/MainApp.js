import renderReactRoot from '@defualt/render-react-root';
import Routing, {addRoutesToApp} from 'redux-routing-app-root-component';
import integrateBernie from 'bernie/mainAppIntegration'
import integrateToDoApp from 'todo_app/mainAppIntegration'
import integrateBattleship from 'battleship/mainAppIntegration'
import RouteLinksList from './RouteLinksList';
import './reset.css';

integrateBernie();
integrateToDoApp();
integrateBattleship();
addRoutesToApp({
  routesMap:{
    FALLBACK_ROUTE: '/doesnt-matter-bacause-key-is-FALLBACK_ROUTED-which-is-special'
  },
  routeRootComponent: RouteLinksList,
});

renderReactRoot(Routing);