import React, { useEffect, useState } from "react";

function App() {
    const [response, setResponse] = useState("");

    useEffect(() => {
        fetch("http://localhost:5000")
            .then((res) => res.json())
            .then((res) => setResponse(res.message));
    }, []);

    return <div>{response}</div>;
}

export default App;
