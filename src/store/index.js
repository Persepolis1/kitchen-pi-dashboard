import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers';
import promiseMiddleware from 'redux-promise-middleware';

export default function configureStore() {
  const store = createStore(reducers, applyMiddleware(promiseMiddleware));
  return store;
}
