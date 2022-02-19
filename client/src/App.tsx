import React from "react";
import { createGlobalStyle } from "styled-components";
import Sidebar from "./components/sidebar";

const GlobalStyles = createGlobalStyle`
    *,
    *::before, 
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`;

const App = (): JSX.Element => {
    return (
        <>
            <GlobalStyles />
            <Sidebar />
        </>
    );
};

export default App;
