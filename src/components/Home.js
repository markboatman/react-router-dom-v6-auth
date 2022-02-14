const Home = ({ onLogin }) => {
  return (
    <main style={{ padding: '1rem 0', border: '2px solid blue' }}>
      <h2 style={{ border: '2px solid red' }}>Home (Public)</h2>
      <button type="button" onClick={onLogin}>
        Sign In
      </button>
    </main>
  );
};

export default Home;
