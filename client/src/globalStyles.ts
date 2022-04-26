import styled, { createGlobalStyle, css } from "styled-components";

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
        --primary: #1f3350;
        --danger: #b31518;
    }

    body {
        font-family: 'Roboto', sans-serif;
        background-color: var(--white);
        color: var(--black);
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        color: var(--primary);
    }
`;

export const inputStyles = css`
    appearance: none;
    padding: 10px;
    width: 100%;
    background: transparent;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    font-size: 1.05em;
`;

export const ButtonsContainer = styled.div`
    position: absolute;
    bottom: 20px;
    right: 20px;
    display: flex;
    justify-content: flex-end;
    gap: 20px;
`;

export default GlobalStyles;
