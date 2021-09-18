import Authentication from './components/authentication';
import Dashboard from './components/Dashboard';

function App() {
  // display the authentication component if the user is not logged in
  if (localStorage.getItem('authToken') === null) return <Authentication />;

  return <Dashboard />;
}

export default App;
