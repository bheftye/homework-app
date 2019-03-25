import {createStore, applyMiddleware, compose} from 'redux';
import reducers from '../reducers';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
  const middlewares = [
    thunk,
  ];

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools

  return createStore(reducers, initialState, composeEnhancers(
    applyMiddleware(...middlewares)
    )
  );
};