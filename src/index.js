import React from 'react';
import i18n from './i18n';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactRouter from './router/router';
import { Provider } from 'react-redux';
import store from './Store/Store'

ReactDOM.render(
    <Provider store={store}  >
        <Router>
            <ReactRouter />
        </Router>
    </Provider>
    ,
    document.getElementById('root'));