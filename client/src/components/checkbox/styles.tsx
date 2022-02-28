import styled from "styled-components";

export const Checkbox = styled.input.attrs({ type: "checkbox" })`
    transform: scale(1.1);
    cursor: pointer;
    visibility: hidden;
`;

export const Label = styled.span`
    font-size: 1em;
`;

interface TileProps {
    $selected: boolean;
}
export const Tile = styled.label<TileProps>`
    padding: 10px 0;
    font-size: 16px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    cursor: pointer;
    background-color: ${(props) =>
        props.$selected
            ? "rgba(137, 160, 195, 0.4)"
            : "rgba(68, 78, 120, 0.3)"};
    color: ${(props) =>
        props.$selected ? "#fff" : "rgba(255, 255, 255, 0.5)"};
    border: ${(props) =>
        props.$selected
            ? "1px solid rgba(255, 255, 255, 0.4)"
            : "1px solid rgba(255, 255, 255, 0)"};
    text-transform: capitalize;

    &:hover {
        border: 1px solid rgba(255, 255, 255, 0.2);
        color: ${(props) => !props.$selected && "rgba(255, 255, 255, 0.75)"};
    }
`;
