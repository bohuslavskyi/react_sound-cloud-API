import SC from 'soundcloud';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import ReduxPromise from 'redux-promise';
import ReduxThunk from 'redux-thunk';


import './index.css';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { CLIENT_ID, REDIRECT_URI } from './constants/client_id';

registerServiceWorker();

SC.initialize({ client_id: CLIENT_ID, redirect_uri: REDIRECT_URI });

const createStoreWithMiddleware = applyMiddleware(ReduxPromise, ReduxThunk)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <App />
    </Provider>
    , document.querySelector('.root'));

