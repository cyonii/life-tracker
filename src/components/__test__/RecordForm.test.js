import { screen, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import RecordForm from '../RecordForm';

describe('RecordForm', () => {
  it('should render correctly', () => {
    localStorage.setItem('authToken', 'token');

    render(
      <Provider store={store}>
        <RecordForm activity={['1', 'Sleep']} />
      </Provider>,
    );

    expect(screen.getByTestId('record-form')).toBeInTheDocument();
    expect(screen.getByText('Sleep')).toBeInTheDocument();
    expect(screen.getByText('Duration')).toBeInTheDocument();
    expect(screen.getByText('Satisfaction')).toBeInTheDocument();
  });
});
