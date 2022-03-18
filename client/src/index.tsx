import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { QueryClientProvider, QueryClient } from "react-query";
import GlobalStyles from "./globalStyles";
import { BrowserRouter } from "react-router-dom";
import { IconContext } from "react-icons";
import { iconStyles } from "./utils/constants";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        <ToastContainer />
    </React.StrictMode>,
    document.getElementById("root")
);
