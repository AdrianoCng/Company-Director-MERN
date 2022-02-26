import React from "react";
import { Sidebar } from "./components/sidebar";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { Homepage } from "./containers/homepage";
import useApp from "./hooks/useApp";
import {
    sidebarCollapsedWidth,
    sidebarExpandedWidth,
    sidebarTransition,
} from "./utils/constants";

const App = (): JSX.Element => {
    const { toogleSidebar, isCollapsed, locations, departments } = useApp();

    return (
        <Wrapper $isCollapsed={isCollapsed}>
            <Sidebar
                isCollapsed={isCollapsed}
                toogle={toogleSidebar}
                locations={locations.data}
                departments={departments.data}
            />

            <Routes>
                <Route path="/" element={<Homepage />} />
            </Routes>
        </Wrapper>
    );
};

interface WrapperProps {
    $isCollapsed: boolean;
}
const Wrapper = styled.div<WrapperProps>`
    margin-left: ${(props) =>
        props.$isCollapsed ? sidebarCollapsedWidth : sidebarExpandedWidth};
    padding: 20px;
    min-height: 100vh;
    transition: ${sidebarTransition("margin")};
`;

export default App;
