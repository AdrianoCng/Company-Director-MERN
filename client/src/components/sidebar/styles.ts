import styled from "styled-components";
import {
    sidebarCollapsedWidth,
    sidebarExpandedWidth,
    sidebarTransition,
} from "../../utils/constants";

export const Content = styled.form`
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const SectionGroup = styled(Content)`
    margin-top: 0px;
    height: 100%;
`;

export const Header = styled.div`
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-end;
`;

export const Button = styled.button`
    color: var(--white);
    font-size: 24px;
    cursor: pointer;
    background: none;
    border: none;
`;

export const SectionGroupHeader = styled.h3`
    font-weight: bold;
    letter-spacing: 0.7px;
    font-size: 24px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    padding-bottom: 5px;
    color: var(--white);
`;

export const SectionGroupContent = styled.div`
    padding: 0 10px;
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

interface Props {
    $isCollapsed: boolean;
}
export const Wrapper = styled.aside<Props>`
    width: ${(props) =>
        props.$isCollapsed ? sidebarCollapsedWidth : sidebarExpandedWidth};
    background: var(--primary);
    padding: 20px;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    transition: ${sidebarTransition("width")};
    color: var(--white);
    font-size: 18px;
    overflow: auto;
    overflow-x: hidden;

    ${Content} {
        // opacity: ${(props) => (props.$isCollapsed ? "0" : "1")};
        // transition: ${sidebarTransition("all")};
        display: ${(props) => props.$isCollapsed && "none"};
    }
`;
