import React, { useState } from "react";
import Sidebar from "./components/sidebar";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Homepage from "./containers/homepage";
import {
    sidebarCollapsedWidth,
    sidebarExpandedWidth,
    sidebarTransition,
} from "./utils/constants";

const App = (): JSX.Element => {
    const [isCollapsed, setIsCollapsed] = useState(true);

    return (
        <Wrapper $isCollapsed={isCollapsed}>
            <Sidebar isCollapsed={isCollapsed} toogle={setIsCollapsed} />

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
