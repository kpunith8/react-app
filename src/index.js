import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './App'; // Firebase authentication
import ModalSample from './ModalSample';
import Routing from './Routing';
import FormValidation from './FormValidation';

const BaseApp = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path='/modal' component={ModalSample} />
        <Route path='/form-validation' component={FormValidation} />
        <Route path='/routing' component={Routing} />
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(<BaseApp />, document.getElementById('root'));

registerServiceWorker();
