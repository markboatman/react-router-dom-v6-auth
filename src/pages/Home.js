import { useAuth } from '../components/AuthProvider';
const Home = () => {
  const { onLogin, token } = useAuth();
  return (
    <main>
      <h2>Home (Public)</h2>
      {!token && (
        <button type="button" onClick={onLogin}>
          Sign In
        </button>
      )}
      <div style={{ textAlign: 'left' }}>
        <p>
          This app is a demo of react-router-dom v6. This app uses
          BrowsesRouter, Routes, Route and the hooks useNavigation and
          useLocation to define routes and accomplish redirection. It uses
          authentication to implement public and protected routes. All
          components are react function components. Protected routes are
          children of components/ProtectRouteParent.js. Authentication of tokens
          are provided by a fake authtoken generator in util/fakeAuth.js and the
          token is persisted by AuthContext = createContext(null) in
          components/AuthProvider.js. All authentication, login/logout and token
          logic/maintenance is encapsulated in components/AuthProvider.js.
          Currently the home page also functions as the login page.{' '}
        </p>{' '}
        <p>
          Most of this code comes from the tutorial by Robin Wieruch:{' '}
          <a href="https://www.robinwieruch.de/react-router-authentication/">
            React Router Tutorial
          </a>
        </p>
      </div>
    </main>
  );
};

export default Home;
