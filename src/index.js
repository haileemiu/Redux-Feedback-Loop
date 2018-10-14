import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { compose, createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// Reducer to take in redux state
const feedback = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_PAGE_1':
      return { ...state, feeling: action.payload };
    case 'ADD_PAGE_2':
      return { ...state, understanding: action.payload };
    case 'ADD_PAGE_3':
      return { ...state, support: action.payload };
    case 'ADD_PAGE_4':
      return { ...state, comments: action.payload };
    default:
      return state;
  }
}

const allReducers = combineReducers({
  feedback
})

const store = createStore(
  allReducers,
  // using logger and using redux dev tools
  compose(applyMiddleware(logger), window.devToolsExtension ? window.devToolsExtension() : f => f)
)


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
