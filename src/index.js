import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {createStore} from 'redux';
import rootReducer from './Components/Reducers';
import { Provider } from 'react-redux';

const store=createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
//store.subscribe(()=>console.log(store.getState()))

ReactDOM.render(
  <Provider store={store}>
 <BrowserRouter>
   <App />
  </BrowserRouter>
  </Provider>,
 
  

  document.getElementById('root')
);


