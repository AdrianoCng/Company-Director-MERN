import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { QueryClientProvider, QueryClient } from "react-query";
import GlobalStyles from "./globalStyles";

const queryClient = new QueryClient();

ReactDOM.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <GlobalStyles />
            <App />
        </QueryClientProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
