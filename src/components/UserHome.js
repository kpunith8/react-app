import React from 'react';

const UserHome = ({ appName, user, onAuth, onLogout }) => {
  if (user) {
    return (
      <div>
        <ul className="nav justify-content-end">
          <li className="nav-item"><img src={user.photoURL} width='50' alt={'user-avatar'} /></li>
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
};

export default UserHome;