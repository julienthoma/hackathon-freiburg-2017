import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Router, Route, browserHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { IntlProvider, addLocaleData } from 'react-intl';
import de from 'react-intl/locale-data/de';
import reducer from './reducers';
import { enhanceStore, getInitialState } from './store';
import App from './containers/App';
import Start from './pages/Start';

injectTapEventPlugin();
addLocaleData(de);

render(
  <Provider store={enhanceStore(reducer, getInitialState())}>
    <IntlProvider locale={'de'}>
      <MuiThemeProvider>
        <Router history={browserHistory}>
          <Route component={App}>
            <Route path="/" component={Start} />
          </Route>
        </Router>
      </MuiThemeProvider>
    </IntlProvider>
  </Provider>,
  document.getElementById('react-container')
);
