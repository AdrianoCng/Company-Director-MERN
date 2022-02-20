import styled from "styled-components";
import {
    sidebarCollapsedWidth,
    sidebarExpandedWidth,
    sidebarTransition,
} from "../../utils/constants";

export const Content = styled.div`
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const SectionGroup = styled(Content)`
    margin-top: 0px;
    height: 200px;
`;

export const Hamburger = styled.button`
    color: white;
    font-size: 24px;
    cursor: pointer;
    background: none;
    border: none;
`;

export const SectionGroupIcon = styled.span`
    font-weight: bold;
    letter-spacing: 0.7px;
`;

export const SectionGroupContent = styled.div`
    padding: 0 20px;
`;

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
    color: white;
    font-size: 18px;

    ${Content} {
        opacity: ${(props) => (props.$isCollapsed ? "0" : "1")};
        transition: ${sidebarTransition("opacity")};
        white-space: nowrap;
    }
`;
