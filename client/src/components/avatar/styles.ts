import styled from "styled-components";

// Misc
import blankAvatar from "../../assets/PngItem_6619328.png";

export const Avatar = styled.div`
    height: 300px;
    width: 300px;
    border: 1px inset grey;
    float: left;
    margin-right: 20px;
    background-image: url(${blankAvatar});
    background-repeat: no-repeat;
    background-size: cover;
`;
