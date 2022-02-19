import React from "react";
import { useQuery } from "react-query";
import { api } from "./utils";

const App = () => {
    const { data, isError, isLoading } = useQuery("personnel", async () => {
        const res = await api.get("http://localhost:5000/api/personnel");
        return res;
    });

    return (
        <div>
            {isError && <p>Error fetching data</p>}
            {isLoading && <p>Loading...</p>}
            {data?.data.data.map((el: { first_name: string }) => el.first_name)}
        </div>
    );
};

export default App;
