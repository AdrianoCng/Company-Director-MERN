import styled from "styled-components";

// Misc
import blankAvatar from "../../assets/PngItem_6619328.png";

interface Props {
    avatarUrl?: string;
}
export const Avatar = styled.div<Props>`
    height: 300px;
    width: 300px;
    border: 1px inset grey;
    float: left;
    margin-right: 20px;
    background-image: url(${({ avatarUrl }) => avatarUrl || blankAvatar});
    background-repeat: no-repeat;
    background-size: cover;
`;
