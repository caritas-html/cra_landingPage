import { render, screen } from '@testing-library/react';
import Home from './index';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';

const renderTheme = (children) => {
  return render(<ThemeProvider theme={{ theme }}>{children}</ThemeProvider>);
};

test('renders learn react link', () => {
  renderTheme(<Home />);
  const headingContainer = screen.getByRole('heading', {
    name: 'hello',
  }).parentElement;
  expect(headingContainer).toHaveStyle({
    background: theme.colors.cybPunk.whitePale,
  });
  expect(headingContainer).toHaveStyleRule(
    'background-color',
    theme.colors.cybPunk.whitePale,
  );
  expect(headingContainer).toMatchSnapshot();
});
