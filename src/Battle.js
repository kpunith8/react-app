import React from 'react';
import { Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';

const Battle = () => {
  return (

    <div>
      <NavLink to='/popular'>
        <Button color="primary">Check who is better!</Button>
      </NavLink>
    </div>
  );
};

export default Battle;
