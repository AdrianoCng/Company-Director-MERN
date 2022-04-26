import styled from "styled-components";

// Styles
import { inputStyles } from "../../globalStyles";

export const SelectInput = styled.select`
    ${inputStyles}
    text-transform: capitalize;
    cursor: pointer;
`;

export const Label = styled.label`
    font-size: 0.8em;
    position: absolute;
    left: 10px;
    top: -7px;
    background-color: white;
    color: var(--primary);
    padding: 0 4px;
`;

export const Container = styled.div`
    position: relative;
    width: 100%;
`;

export const Error = styled.span`
    font-size: 0.75em;
    color: orange;
`;
