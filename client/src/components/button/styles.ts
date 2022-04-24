import styled from "styled-components";

interface Props {
    $secondary?: boolean;
}
export const Button = styled.button<Props>`
    padding: 10px;
    background-color: var(--primary);
    opacity: ${({ $secondary }) => $secondary && "0.65"};
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 1.04em;
    font-weight: bold;
    min-width: 100px;
    cursor: pointer;
`;
