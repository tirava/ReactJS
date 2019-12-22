import {applyMiddleware, createStore} from 'redux';
import initReducers from '../reducers';
import middlewares from '../middlewares';

function initStore() {
  const initialStore = {};

  return createStore(
    initReducers,
    initialStore,
    applyMiddleware(...middlewares),
  );
}

export default initStore();
