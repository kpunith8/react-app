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
import ProjectList from './ProjectList';
import NewApp from './NewApp';
import App1 from './App1';

const BaseApp = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={NewApp} />
        <Route path='/modal' component={ModalSample} />
        <Route path='/form-validation' component={FormValidation} />
        <Route path='/projects' component={ProjectList} />
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(<App1 />, document.getElementById('root'));

registerServiceWorker();
