import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, BrowserRouter } from 'react-router-dom';
import configureStore from './store/index';
import App from "./components/index";

const store = configureStore();

ReactDOM.render (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route path="/" component={App}/>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.root-container'));