import { screen, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import App from '../App';

describe('App', () => {
  beforeEach(() => localStorage.clear());

  it('renders without crashing', () => {
    render(<App />);
  });

  it('renders Authentication component when user is not authenticated', () => {
    render(<App />);

    expect(screen.getByTestId('authentication')).toBeInTheDocument();
  });

  it('renders Dashboard component when user is authenticated', () => {
    localStorage.setItem('authToken', 'fake-token');
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );

    expect(screen.getByTestId('dashboard')).toBeInTheDocument();
    expect(screen.getByText('Add record')).toBeInTheDocument();
  });
});
