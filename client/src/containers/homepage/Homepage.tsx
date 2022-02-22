import React from "react";
import useHomepage from "../../hooks/useHomepage";

const Homepage = (): JSX.Element => {
    const { allPersonnel, goNextPage, goPreviousPage } = useHomepage();

    return (
        <div>
            {allPersonnel.isLoading && "Loading..."}
            {allPersonnel.isError &&
                "Error Fetching data! Please try again later."}
            {allPersonnel.data?.data.map((personnel) => (
                <p>{personnel.first_name}</p>
            ))}
            <button onClick={goPreviousPage}>prev</button>
            <button onClick={goNextPage}>next</button>
        </div>
    );
};

export default Homepage;
