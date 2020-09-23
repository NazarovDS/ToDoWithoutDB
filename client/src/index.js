import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import {Provider} from "react-redux";
import store from "./redux/store";
import {BrowserRouter as Router, Route} from "react-router-dom";

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Provider store={store}>
                <Route exact path={'/'} component={App} />
            </Provider>
        </Router>
    </React.StrictMode>
    ,
    document.getElementById('root')
);

