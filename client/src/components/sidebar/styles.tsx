import styled from "styled-components";
import {
    sidebarCollapsedWidth,
    sidebarExpandedWidth,
    sidebarTransition,
} from "../../utils/constants";

interface Props {
    $isCollapsed: boolean;
}

export const Wrapper = styled.div<Props>`
    width: ${(props) =>
        props.$isCollapsed ? sidebarCollapsedWidth : sidebarExpandedWidth};
    background: #1f3350;
    padding: 20px;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    transition: ${sidebarTransition("width")};
`;

export const Hamburger = styled.button`
    color: white;
    font-size: 24px;
    cursor: pointer;
    background: none;
    border: none;
`;
