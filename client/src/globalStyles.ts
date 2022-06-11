import styled, { createGlobalStyle, css } from "styled-components";

const breakpoints = {
    mobileS: "320px",
    mobileM: "375px",
    mobileL: "425px",
    tablet: "650px",
    laptop: "1024px",
    laptopL: "1410px",
    desktop: "1725px",
};

export const devices = {
    mobileS: `(min-width: ${breakpoints.mobileS})`,
    mobileM: `(min-width: ${breakpoints.mobileM})`,
    mobileL: `(min-width: ${breakpoints.mobileL})`,
    tablet: `(min-width: ${breakpoints.tablet})`,
    laptop: `(min-width: ${breakpoints.laptop})`,
    laptopL: `(min-width: ${breakpoints.laptopL})`,
    desktop: `(min-width: ${breakpoints.desktop})`,
};

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
        --primary-highlighted: #304e7a;
        --danger-highlighted: #d7191d;
        --primary-muted: rgba(31,51,80, 0.5);
        --danger-muted: rgba(179, 21, 24, 0.5);
        --primary-muted-highlighted: var(--primary-highlighted);
        --danger-muted-highlighted: var(--danger-highlighted);
        --black-muted: rgba(56, 56, 56, 0.65);
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

    &:disabled {
        color: var(--black-muted);
    }
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
