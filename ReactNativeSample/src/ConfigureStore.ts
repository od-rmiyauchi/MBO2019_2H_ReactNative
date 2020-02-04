import {createStore, applyMiddleware} from 'redux';
import {rootReducer} from './modules/Index';
import createSagaMiddleware from 'redux-saga';
import rootSagas from './services/Index';

export default () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(rootSagas);
  return {store};
};
