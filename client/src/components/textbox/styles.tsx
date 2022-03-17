import styled from "styled-components";
import { inputStyles } from "../../globalStyles";

interface Props {
    fullWidth?: boolean;
}
export const Textbox = styled.input.attrs({ type: "text" })<Props>`
    ${inputStyles}
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
