import { devices } from "./../../globalStyles";
import styled from "styled-components";

// Misc
import { sidebarCollapsedWidth, sidebarExpandedWidth, sidebarTransition } from "../../constants";

export const Main = styled.main`
    height: 100%;
    position: relative;
`;

export const Deck = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    margin-top: 20px;
    max-height: calc(100% - 120px);
    overflow: scroll;

    @media ${devices.tablet} {
        grid-template-columns: repeat(2, 1fr);
    }

    @media ${devices.laptop} {
        grid-template-columns: repeat(3, 1fr);
    }

    @media ${devices.laptopL} {
        grid-template-columns: repeat(4, 1fr);
    }

    @media ${devices.desktop} {
        grid-template-columns: repeat(5, 1fr);
    }

    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`;

interface WrapperProps {
    $isCollapsed: boolean;
}
export const Wrapper = styled.div<WrapperProps>`
    margin-left: ${(props) => (props.$isCollapsed ? sidebarCollapsedWidth : sidebarExpandedWidth)};
    padding: 20px;
    height: 100vh;
    transition: ${sidebarTransition("margin")};
`;

export const LoaderWrapper = styled.div`
    height: calc(100vh - 40px);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding-top: 5%;
`;
