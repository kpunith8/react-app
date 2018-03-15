import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-4">Welcome to Battle</h1>
        <p className="lead">This is a simple hero battle unit.</p>
        <hr className="my-4" />
        <p>Click here to know more.</p>
        <NavLink to='/battle'>
          <p className="lead">
            <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
          </p>
        </NavLink>
      </div>
    </div>
  );
}

export default Home;