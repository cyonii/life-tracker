function App() {
  const styles = {
    container: {
      width: '100wh',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#eee',
      padding: '18px',
    },

    text: {
      fontFamily: 'sans-serif',
      maginUp: 0,
    },

    subText: {
      color: '#a9a9a9',
      fontSize: '18px',
      fontStyle: 'italic',
      fontWeight: '200',
      marginBottom: 0,
    },
  };

  return (
    <div className="app" style={styles.container}>
      <h1 style={styles.text}>Life Tracker App</h1>
      <p style={styles.subText}>Something cool is cooking...</p>
    </div>
  );
}

export default App;
