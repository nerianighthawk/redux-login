import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Store, { history } from './store'
import { register } from './serviceWorker'
import './index.css'
import { ConnectedRouter } from 'connected-react-router'
import { Switch, Route } from 'react-router'
import { CLIENT_URI, LOGIN_URI } from './constants'
import { AuthComponent } from './components/authComponent'
import { HomeComponent } from './components/HomeComponent'
import { LoginComponent } from './components/loginComponent'

ReactDOM.render(
  <Provider store={Store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path={CLIENT_URI + LOGIN_URI} component={LoginComponent} />
        <AuthComponent>
          <Route exact path={CLIENT_URI} component={HomeComponent} />
        </AuthComponent>
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement
);

register();
