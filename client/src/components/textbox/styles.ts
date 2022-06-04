import styled from "styled-components";

// Styles
import { inputStyles } from "../../globalStyles";

interface Props {
    fullWidth?: boolean;
}
export const Textbox = styled.input.attrs({ type: "text" })<Props>`
    ${inputStyles}
`;

interface LabelProps {
    $disabled: boolean;
}
export const Label = styled.label<LabelProps>`
    font-size: 0.8em;
    position: absolute;
    left: 10px;
    top: -7px;
    background-color: white;
    color: var(--primary);
    padding: 0 4px;

    ${({ $disabled }) => $disabled && "color: var(--primary-muted)"};
`;

export const Container = styled.div`
    position: relative;
    width: 100%;
`;

export const Error = styled.span`
    font-size: 0.75em;
    color: orange;
`;
