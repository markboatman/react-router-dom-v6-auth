//import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = ({ token, onLogout }) => {
  return (
    <nav style={{ borderBottom: 'solid 2px', paddingBottom: '1rem' }}>
      {/* to= refers to a Route */}
      <NavLink to="/home">Home</NavLink>
      {'  '}|{'  '}
      <NavLink to="/dashboard">Dashboard</NavLink>
      {token && (
        <button style={{ marginLeft: '2em' }} onClick={onLogout}>
          Sign Out
        </button>
      )}
    </nav>
  );
};

export default Navigation;
