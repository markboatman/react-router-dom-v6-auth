import { useAuth } from '../components/AuthProvider';

const Login = () => {
  const { onLogin, token } = useAuth();
  return (
    <>
      <h2>Login (public)</h2>
      {!token && (
        <button type="button" onClick={onLogin}>
          Sign On
        </button>
      )}
    </>
  );
};

export default Login;
