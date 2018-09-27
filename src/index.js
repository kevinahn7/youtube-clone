import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import middlewareLogger from './middleware/middleware-logger';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom'

const store = createStore(rootReducer, applyMiddleware(middlewareLogger, thunkMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route exact path="/" component={Home} />
    </Router>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
