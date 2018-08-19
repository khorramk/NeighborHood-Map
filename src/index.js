import React from 'react';
import ReactDOM from 'react-dom';
//import App from './Map';
import Map from './Map';
import './index.css';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<Map />, document.getElementById('root'));
registerServiceWorker();
