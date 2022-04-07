import { render } from 'test-utils/TestWrapper';

import Home from 'Home';

describe('Home tests', () => {
  it('Should render the home page', () => {
    const { container } = render(<Home />);

    expect(container).toMatchSnapshot();
  });
});
