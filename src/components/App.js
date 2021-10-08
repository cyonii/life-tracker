import Authentication from './authentication';
import Dashboard from './Dashboard';

function App() {
  const authToken = localStorage.getItem('authToken');

  // display the authentication component if the user is not logged in
  if (!authToken) {
    localStorage.clear();
    return <Authentication />;
  }
  return <Dashboard />;
}

export default App;
