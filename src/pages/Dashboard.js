import { useAuth } from '../components/AuthProvider';

const Dashboard = () => {
  const { token } = useAuth();
  console.log('token is: ', token);
  return (
    <>
      <main style={{ padding: '1rem 0' }}>
        <h2>Dashboard (Private)</h2>
        <h3>You are authenticate with this token: {token}</h3>
      </main>
    </>
  );
};

export default Dashboard;
