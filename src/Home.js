import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = ({ appName, user, onAuth, onLogout }) => {

  if(user) {
    return(
    <div>
        <ul className="nav justify-content-end">
        <li className="nav-item"><img src={user.photoURL} width='50'/></li>
          <li className="nav-item">{user.displayName}</li>
          <li className="nav-item">
            <button type='button' className="btn btn-success" onClick={onLogout}>Logout</button>
          </li>
        </ul>
      </div>
    )
  } else {
    return (
      <button type="button" className="btn btn-primary" onClick={onAuth}>Login</button>
    );
  }
  // return (
  //   <div className="container">
  //     <div className="jumbotron">
  //       <h1 className="display-4">Welcome to Battle</h1>
  //       <p className="lead">This is a simple hero battle unit.</p>
  //       <hr className="my-4" />
  //       <p>Click here to know more.</p>
  //       <NavLink to='/battle'>
  //         <p className="lead">
  //           <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
  //         </p>
  //       </NavLink>
  //     </div>


  //   </div>
  // );
};

export default Home;