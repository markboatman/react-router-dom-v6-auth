import { useState, createContext, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { fakeAuth } from '../utils/fakeAuth';

// Create the context,
export const AuthContext = createContext(null);

// Utility function, this will return the context value object
// { token, onLogin: handleLogin, onLogout: handleLogout }
export const useAuth = () => {
  return useContext(AuthContext);
};

// Main file component, pull the children off of props
const AuthProvider = ({ children }) => {
  // persist the token
  const [token, setToken] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = async () => {
    // fakeAuth().then((token) => {
    //   setToken(token);
    //   navigate('/dashboard');
    // });   OR
    const token = await fakeAuth();
    setToken(token);
    // Iteresting ?. syntax, we put 'from.pathname' value on
    // in ProtectedRouteParent
    // This will get us back to the current page (origin) after we login
    const origin = location.state?.from?.pathname || '/dashboard';
    navigate(origin);
  };

  const handleLogout = () => {
    setToken(null);
  };

  const value = {
    token,
    onLogin: handleLogin,
    onLogout: handleLogout,
  };
  // Children of this AuthContext.Provider component can use the hook useContext(AuthContext) to get
  // a reference to the context value.
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
