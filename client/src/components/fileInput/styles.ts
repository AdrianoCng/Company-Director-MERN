import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    width: 100%;
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

export const FileInput = styled.input.attrs({ type: "file" })`
    appearance: none;
    padding: 10px;
    background: transparent;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    font-size: 1.05em;
    text-transform: capitalize;
    cursor: pointer;
    display: block;
`;

export const Error = styled.span`
    font-size: 0.75em;
    color: orange;
`;
