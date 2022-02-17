import { useAuth } from '../components/AuthProvider';
const Home = () => {
  const { onLogin } = useAuth();
  return (
    <main>
      <h2>Home (Public)</h2>
      <button type="button" onClick={onLogin}>
        Sign In
      </button>
    </main>
  );
};

export default Home;
