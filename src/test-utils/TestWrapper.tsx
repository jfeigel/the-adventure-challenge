import { ReactNode } from 'react';

import { render as jestRender } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import ThemeProvider from 'mui/components/ThemeProvider';

type Props = {
  children?: ReactNode;
};

function TestWrapper(props: Props) {
  return <ThemeProvider>{props.children}</ThemeProvider>;
}

export function render(component: ReactNode) {
  const wrapped = <TestWrapper>{component}</TestWrapper>;
  return jestRender(wrapped, { wrapper: MemoryRouter });
}
