import {createStore} from 'redux';
import initReducers from '../reducers';

function initStore() {
  const initialStore = {};

  return createStore(
    initReducers,
    initialStore,
  );
}

export default initStore();
