import React from "react";
import Sidebar from "./components/sidebar";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";

const App = (): JSX.Element => {
    return (
        <BrowserRouter>
            <Wrapper>
                <Sidebar />
                <Routes>
                    <Route path="/" element={"Component"} />
                </Routes>
            </Wrapper>
        </BrowserRouter>
    );
};

const Wrapper = styled.div`
    margin-left: 290px;
    padding: 20px;
    height: 100vh;
`;

export default App;
