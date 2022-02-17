//import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from './AuthProvider';

const Navigation = () => {
  const { token, onLogout } = useAuth();
  return (
    // Could have used <Link>s instead of <NavLink>s
    <nav style={{ borderBottom: 'solid 2px', paddingBottom: '1rem' }}>
      {/* to= refers to a Route */}
      <NavLink to="/home">Home</NavLink>
      {'  '}|{'  '}
      <NavLink to="/dashboard">Dashboard</NavLink>
      {'  '}|{'  '}
      <NavLink to="/admin">Admin</NavLink>
      {token && (
        <button style={{ marginLeft: '2em' }} onClick={onLogout}>
          Sign Out
        </button>
      )}
    </nav>
  );
};

export default Navigation;
