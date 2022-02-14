import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import { fakeAuth } from './utils/fakeAuth';

function App() {
  const [token, setToken] = useState(null);

  const handleLogin = async () => {
    const token = fakeAuth();
    setToken(token);
  };

  const handleLogout = () => {
    setToken(null);
  };

  return (
    <div className="App">
      <h1>react-router-dom Auth V6</h1>
      <Navigation token={token} onLogout={handleLogout} />
      {/* Navigation uses these Routes in NavLink(s), could have been Link(s) */}
      <Routes>
        {/* If path is '/' or nothing, go here */}
        <Route index element={<Home />} />
        <Route path="home" element={<Home onLogin={handleLogin} />} />
        <Route path="dashboard" element={<Dashboard />} />
        {/* This match /*(something) */}
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
