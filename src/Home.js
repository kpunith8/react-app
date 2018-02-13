import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Home = () => {
  return (
    <div>
      <h1> Home Page </h1>
      <NavLink to='/battle'>
        <Button bsStyle="primary">Battle</Button>
      </NavLink>
    </div>
  );
};

export default Home;