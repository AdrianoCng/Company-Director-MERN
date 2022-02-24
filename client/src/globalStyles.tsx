import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *,
    *::before, 
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        --white: #f5f5f5;
        --black: #383838;
    }

    body {
        font-family: 'Roboto', sans-serif;
        background-color: var(--white);
    }
`;

export default GlobalStyles;
