import { createGlobalStyle, css } from 'styled-components';
import { theme } from './theme';

export const Global = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }
    
    body {
        ${() => css`
          background-color: ${theme.colors.mainBg};
        `}
    }
`;
