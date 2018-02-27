import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ModalSample from './ModalSample';
import NewApp from './NewApp';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import FormValidation from './FormValidation';

ReactDOM.render(<FormValidation />, document.getElementById('root'));

registerServiceWorker();
