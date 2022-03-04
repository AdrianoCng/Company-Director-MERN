import styled from "styled-components";
import {
    sidebarCollapsedWidth,
    sidebarExpandedWidth,
    sidebarTransition,
} from "../../utils/constants";

export const Deck = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
`;

interface WrapperProps {
    $isCollapsed: boolean;
}
export const Wrapper = styled.div<WrapperProps>`
    margin-left: ${(props) =>
        props.$isCollapsed ? sidebarCollapsedWidth : sidebarExpandedWidth};
    padding: 20px;
    min-height: 100vh;
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
