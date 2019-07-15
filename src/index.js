// import React from 'react';
// import ReactDOM from 'react-dom';
// import 'bulma';
// import Start from '.pages/start';

// ReactDOM.render(
//   <Start />,
//   <h1>Hello React</h1>,
//   document.getElementById('app')
// );

// import React from 'react';
// import ReactDOM from 'react-dom';
// import 'bulma';
// // import Start from './pages/start';
// import About from './pages/about';
// import App from './app'
// import {AuthProvider} from './react-auth0-wrapper'

// ReactDOM.render(<About />, document.getElementById('app'));

import React from 'react';
import ReactDOM from 'react-dom';
import 'bulma';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Auth0Provider } from './react-auth0-wrapper';
import config from './auth_config.json';

// A function that routes the user to the right place
// after login
const onRedirectCallback = appState => {
  window.history.replaceState(
    {},
    document.title,
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

ReactDOM.render(
  <Auth0Provider
    domain={config.domain}
    client_id={config.clientId}
    redirect_uri={window.location.origin}
    onRedirectCallback={onRedirectCallback}
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
