import styled from "styled-components";

// Misc
import { blankAvatar } from "../../constants";

interface Props {
    avatarUrl?: string | null;
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
    background-position: center;
`;
