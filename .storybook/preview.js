import { ThemeProvider } from 'styled-components';
import { theme } from '../src/styles/theme';
import { Global } from '../src/styles/global-styles';

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
      <Global />
    </ThemeProvider>
  ),
];

export default preview;
