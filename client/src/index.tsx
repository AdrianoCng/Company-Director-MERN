import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { QueryClientProvider, QueryClient } from "react-query";
import GlobalStyles from "./globalStyles";
import { BrowserRouter } from "react-router-dom";

const queryClient = new QueryClient();

ReactDOM.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <GlobalStyles />
                <App />
            </BrowserRouter>
        </QueryClientProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
