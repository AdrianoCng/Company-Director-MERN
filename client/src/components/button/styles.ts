import styled, { css } from "styled-components";

// Types
import { ButtonSize, ButtonVariant } from "../../types/button.types";

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
    $variant?: ButtonVariant;
    $size?: ButtonSize;
}
export const Button = styled.button<Props>`
    background-color: ${({ $variant }) => `var(--${$variant})`};
    color: white;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;

    ${({ $size }) => $size === ButtonSize.SMALL && smallButton}

    ${({ $size }) => $size === ButtonSize.MEDIUM && mediumButton}

    ${({ $size }) => $size === ButtonSize.LARGE && largeButton}

    &:hover {
        background-color: ${({ $variant }) => `var(--${$variant}-highlighted)`};
    }
`;
