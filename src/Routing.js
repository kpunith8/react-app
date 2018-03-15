import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/navigation/Nav';
import Home from './components/navigation/Home';
import Battle from './components/navigation/Battle';
import Popular from './components/navigation/Popular';

class Routing extends React.Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Nav />
          <Switch>
            <Route exact path='*' component={Home} />
            <Route path='/battle' component={Battle} />
            <Route path='/popular' component={Popular} />
            <Route render={function () {
              return (<p>Page Not Found</p>);
            }} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Routing;