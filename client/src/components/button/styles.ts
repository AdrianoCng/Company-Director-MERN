import styled from "styled-components";

interface Props {
    $variant?: "primary" | "danger";
}
export const Button = styled.button<Props>`
    padding: 10px;
    background-color: ${({ $variant }) => `var(--${$variant})`};
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 1.04em;
    font-weight: bold;
    min-width: 100px;
    cursor: pointer;
`;
