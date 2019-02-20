import React from 'react';
import ReactDOM from 'react-dom';
//import App from './Map';
import Map from './Map';
import './index.css';
import firebase from 'firebase';
import registerServiceWorker from './registerServiceWorker';

var config = {
    apiKey: "",
    authDomain: "art-and-gallery-project.firebaseapp.com",
    databaseURL: "https://art-and-gallery-project.firebaseio.com",
    projectId: "art-and-gallery-project",
    storageBucket: "art-and-gallery-project.appspot.com",
    messagingSenderId: ""
};

firebase.initializeApp(config);
ReactDOM.render(<Map />, document.getElementById('root'));
registerServiceWorker();

