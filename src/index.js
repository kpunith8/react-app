import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import NewApp from './NewApp';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(<NewApp />, document.getElementById('root'));

registerServiceWorker();
