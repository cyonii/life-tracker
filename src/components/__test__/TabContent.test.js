import { screen, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import TabContent from '../TabContent';

describe('TabContent', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <TabContent />
      </Provider>,
    );
    expect(screen.getByTestId('tab-content')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <TabContent />
      </Provider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
