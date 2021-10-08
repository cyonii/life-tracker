import { screen, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import TabNav from '../TabNav';

describe('TabNav', () => {
  it('should render', () => {
    render(
      <Provider store={store}>
        <TabNav />
      </Provider>,
    );
    expect(screen.getByTestId('tab-nav')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <TabNav />
      </Provider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
