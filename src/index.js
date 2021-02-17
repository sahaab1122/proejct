import React from 'react';
import i18n from './i18n';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactRouter from './router/router';


ReactDOM.render(<Router>
    <ReactRouter />
</Router>
    ,
    document.getElementById('root'));