// Most of this code comes from this tutorial by Robin W:
// https://www.robinwieruch.de/react-router-authentication/
// This version encapsulates authenticaion and the needed AuthContext
// in the AuthProvider component
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Login from './pages/Login';
import NoMatch from './pages/NoMatch';
import Admin from './pages/Admin';
import ProtectedRouteParent from './components/ProtectedRouteParent';
import AuthProvider from './components/AuthProvider';

function App() {
  return (
    /*     
    AuthProvider encapsulates the AuthContext now
    AuthContext is created in AuthProvider.js.
    The <AuthContext.Provider value={ ...someObject }> is set in AuthProvider component
    Previously consumers such as Dashboard would access the context using
    {val1,val2} = useContext(AuthContext). This access has been replaced with
    useAuth() function in AuthProvider.js 
    Old Context.Consumer syntax example is in tutorial/react-context-to-hooks 
    */
    <AuthProvider>
      <div className="App">
        <h1>Menu App using react-router-dom V6</h1>
        <Navigation />
        <Routes>
          {/* If path is '/' or nothing, go here */}
          <Route index element={<Home />} />
          {/* /home is functioning as the login page */}
          <Route path="home" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route
            path="dashboard"
            // ProtectedRouteParent is a gate keeper,
            // must be logged in to go to <Dashboard />
            element={
              <ProtectedRouteParent>
                <Dashboard />
              </ProtectedRouteParent>
            }
          />
          <Route
            path="admin"
            element={
              <ProtectedRouteParent>
                <Admin />
              </ProtectedRouteParent>
            }
          />
          {/* This matches /(something) */}
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
