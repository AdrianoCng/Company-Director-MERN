import styled, { css } from "styled-components";

const flexCenter = css`
    display: flex;
    justify-content: center;
    align-items: center;
`;

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

export const Avatar = styled.div`
    height: 100px;
    position: relative;
    top: -50px;
    ${flexCenter}
    margin-bottom: -50px;

    & img {
        height: 100%;
        width: auto;
        border-radius: 50%;
        border: 5px solid rgba(255, 255, 255, 0.5);
    }
`;

export const Title = styled.div;

export const Body = styled.div`
    ${flexCenter}
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
