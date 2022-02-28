import React from "react";
import { Routes, Route } from "react-router-dom";
import { Homepage } from "./containers/homepage";

const App = (): JSX.Element => {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
        </Routes>
    );
};

export default App;
