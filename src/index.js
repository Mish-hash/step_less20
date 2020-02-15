import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

window.users = [
    {id: 1, fullName: "Vasya"},
    {id: 2, fullName: "Petya"},
    {id: 3, fullName: "Kolya"},
    {id: 4, fullName: "Her s Gorы"},
]

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
