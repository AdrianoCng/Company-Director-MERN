import styled, { keyframes } from "styled-components";

interface PageButtonProps {
    $active?: boolean;
}

const shaking = keyframes`
    25% {transform: rotate(-10deg);}
    50% {transform: rotate(10deg);}
    75% {transform: rotate(-5deg);}
    100% {transform: rotate(0deg);}
`;

const activePageStyles = `
    background: var(--primary);
    color: var(--white);
    font-weight: bold;
`;

export const PaginationWrapper = styled.div`
    display: flex;
    gap: 2px;
    position: absolute;
    right: 20px;
    bottom: 0;
`;

export const PageButton = styled.div<PageButtonProps>`
    height: 30px;
    width: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-size: 1.15em;
    border-radius: 2px;
    padding: 15px;

    &:hover {
        ${activePageStyles}
        animation: ${shaking} 300ms ease;
        background-color: ${({ $active }) =>
            !$active && "var(--primary-muted)"};
    }

    ${({ $active }) =>
        !!$active &&
        `
        ${activePageStyles} 
        cursor: default;
    `}
`;
