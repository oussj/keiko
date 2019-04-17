import React from 'react';

import { MuiThemeProvider } from '@material-ui/core/styles';
import { ConnectedRouter } from 'connected-react-router';
import { History } from 'history';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { Store } from 'redux';
import { Persistor } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import Root from './components/Root';
import { GlobalStyle } from './global-style';
import Routes from './routes';
import theme from './theme';

interface Props {
  history: History;
  persistor: Persistor;
  store: Store;
}

const RootComponentWithRoutes: React.FunctionComponent = () => (
  <Root>
    <Routes />
  </Root>
);

const App: React.FunctionComponent<Props> = ({ history, persistor, store }) => (
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <GlobalStyle />
      <PersistGate loading={null} persistor={persistor}>
        <ConnectedRouter history={history}>
          <Route path="/" component={RootComponentWithRoutes} />
        </ConnectedRouter>
      </PersistGate>
    </MuiThemeProvider>
  </Provider>
);

export default App;
