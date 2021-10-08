import { screen, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import Dashboard from '../Dashboard';

describe('Dashboard', () => {
  beforeEach(() => localStorage.setItem('authToken', 'token'));

  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <Dashboard />
      </Provider>,
    );
    expect(screen.getByTestId('dashboard')).toBeInTheDocument();
  });
});
