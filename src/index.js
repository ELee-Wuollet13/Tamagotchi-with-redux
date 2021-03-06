import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { HashRouter } from 'react-router-dom';
import { createStore } from 'redux';
import reducer from './reducers/tamagotchi-list-reducer';
import { Provider } from 'react-redux';
import tamagotchiListReducer from './reducers/tamagotchi-list-reducer';

const store = createStore(reducer);

// let unsubscribe = store.subscribe(() =>
//   console.log(store.getState())
// );

ReactDOM.render(
  <Provider store={store}>
  <HashRouter>
  <App />
  </HashRouter>
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
