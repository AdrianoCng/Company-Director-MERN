import styled from "styled-components";

export const Checkbox = styled.input.attrs({ type: "checkbox" })`
    transform: scale(1.1);
    cursor: pointer;
    // margin: 0 10px;
    visibility: hidden;
`;

export const Label = styled.label`
    font-size: 1em;
    cursor: pointer;
    pointer-events: none;
`;

interface TileProps {
    $selected: boolean;
}
export const Tile = styled.div<TileProps>`
    padding: 10px 0;
    font-size: 16px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    cursor: pointer;
    background-color: ${(props) =>
        props.$selected
            ? "rgba(105, 105, 160, 0.5)"
            : "rgba(68, 78, 120, 0.3)"};
    color: ${(props) =>
        props.$selected ? "#fff" : "rgba(255, 255, 255, 0.5)"};
    border: ${(props) =>
        props.$selected && "1px solid rgba(255, 255, 255, 0.6)"};
    font-weight: ${(props) => props.$selected && "bold"};
`;
