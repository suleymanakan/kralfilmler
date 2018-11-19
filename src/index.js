import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './sa_reducers/rootReducer';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom'; 
import logger from 'redux-logger';
import reduxPromise from 'redux-promise-middleware';


const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(reduxPromise(), thunk,logger)
    )
);


ReactDOM.render(
<BrowserRouter>
<Provider store={store}>
<App />
</Provider>
</BrowserRouter>, document.getElementById('root'));

serviceWorker.unregister();
