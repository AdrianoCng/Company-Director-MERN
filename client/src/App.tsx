import React, { useState } from "react";
import Sidebar from "./components/sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Homepage from "./containers/homepage";

const App = (): JSX.Element => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <BrowserRouter>
            <Wrapper isCollapsed={isCollapsed}>
                <Sidebar isCollapsed={isCollapsed} toogle={setIsCollapsed} />
                <Routes>
                    <Route path="/" element={<Homepage />} />
                </Routes>
            </Wrapper>
        </BrowserRouter>
    );
};

interface WrapperProps {
    isCollapsed: boolean;
}
const Wrapper = styled.div<WrapperProps>`
    margin-left: ${(props) => (props.isCollapsed ? "90px" : "290px")};
    padding: 20px;
    height: 100vh;
`;

export default App;
