import styled, { css } from "styled-components";

const flexCenter = css`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Card = styled.div`
    background-color: #fff;
    width: 400px;
    border-radius: 5px;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
    // padding: 20px;
`;

export const Background = styled.div`
    background: red;
    height: 175px;
    border-radius: inherit;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
`;

export const Avatar = styled.div`
    height: 105px;
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

    a {
        text-decoration: none;
        color: #194d9b;
    }

    h3 {
        text-transform: capitalize;
    }
`;
