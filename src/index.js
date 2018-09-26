import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import middlewareLogger from './middleware/middleware-logger';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(rootReducer, applyMiddleware(middlewareLogger, thunkMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
