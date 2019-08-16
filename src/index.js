import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Sobre from './view/Sobre';
import Register from './view/user/Register';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

ReactDOM.render(<BrowserRouter>
                    <Switch>
                        <Route path="/" exact={true} component={App} />
                        <Route path="/sobre" component={Sobre} />
                        <Route path="/register" component={Register}/>
                    </Switch>
                </ BrowserRouter>
                , document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
