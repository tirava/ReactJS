import {applyMiddleware, createStore} from 'redux';
import {createBrowserHistory} from 'history';
import {routerMiddleware} from 'connected-react-router';
import initReducers from '../reducers';
import middlewares from '../middlewares';

export const history = createBrowserHistory();

function initStore() {
  const initialStore = {};

  return createStore(
    initReducers(history),
    initialStore,
    applyMiddleware(routerMiddleware(history), ...middlewares),
  );
}

export default initStore();
