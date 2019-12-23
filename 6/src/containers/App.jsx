import React, {Component} from 'react';
import {Router} from './Router/Router';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'connected-react-router';
import initStore, {history} from '../utils/store';

export class App extends Component {
  render() {
    return (
      <Provider store={initStore}>
        <ConnectedRouter history={history}>
          <Router/>
        </ConnectedRouter>
      </Provider>
    );
  }
}
