import styled, { css } from "styled-components";

const smallButton = css`
    min-width: 70px;
    padding: 5px;
    font-size: 1em;
`;

const mediumButton = css`
    min-width: 100px;
    padding: 10px;
    font-size: 1.05em;
`;

const largeButton = css`
    min-width: 150px;
    padding: 15px;
    font-size: 1.15em;
`;

interface Props {
    $variant?: "primary" | "danger";
    $size?: "small" | "medium" | "large";
}
export const Button = styled.button<Props>`
    background-color: ${({ $variant }) => `var(--${$variant})`};
    color: white;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;

    ${({ $size }) => $size === "small" && smallButton}

    ${({ $size }) => $size === "medium" && mediumButton}

    ${({ $size }) => $size === "large" && largeButton}
`;
