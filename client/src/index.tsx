import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { IconContext } from "react-icons";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import App from "./App";
import GlobalStyles from "./globalStyles";
import { iconStyles } from "./constants";

const queryClient = new QueryClient();

ReactDOM.render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <IconContext.Provider value={iconStyles}>
                <BrowserRouter>
                    <GlobalStyles />
                    <App />
                </BrowserRouter>
            </IconContext.Provider>
            <ReactQueryDevtools />
        </QueryClientProvider>
        <ToastContainer />
    </StrictMode>,
    document.getElementById("root")
);
