import styled from "styled-components";

// Misc
import { blankAvatar } from "../../constants";

export const Card = styled.div`
    background-color: #fff;
    flex: 0 0 calc((100% / 5) - 16px);
    border-radius: 5px;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
`;

export const Background = styled.div`
    background: rgba(0, 0, 0, 0.2);
    height: 125px;
    border-radius: inherit;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
`;

interface AvatarProps {
    $src?: string | null;
}
export const AvatarContainer = styled.div`
    padding: 10px 0;
    background-color: rgba(0, 0, 0, 0.05);
`;

export const Avatar = styled.div<AvatarProps>`
    height: 100px;
    width: 100px;
    margin: 0 auto;
    border-radius: 50%;
    background-image: url(${({ $src }) => $src || blankAvatar});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`;

export const Title = styled.div;

export const Body = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    flex-direction: column;

    h3,
    span {
        text-transform: capitalize;
    }

    a {
        text-decoration: none;
        color: #194d9b;
    }
`;

export const Footer = styled.div`
    margin-top: 20px;

    button {
        border: none;
        background: none;
        cursor: pointer;

        &:not(:last-of-type) {
            margin-right: 5px;
        }

        svg {
            font-size: 32px;
            border-radius: 20px;
        }
    }
`;
