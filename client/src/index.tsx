import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { QueryClientProvider, QueryClient } from "react-query";
import GlobalStyles from "./globalStyles";
import { BrowserRouter } from "react-router-dom";
import { IconContext } from "react-icons";
import { iconStyles } from "./utils/constants";

const queryClient = new QueryClient();

ReactDOM.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <IconContext.Provider value={iconStyles}>
                <BrowserRouter>
                    <GlobalStyles />
                    <App />
                </BrowserRouter>
            </IconContext.Provider>
        </QueryClientProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
