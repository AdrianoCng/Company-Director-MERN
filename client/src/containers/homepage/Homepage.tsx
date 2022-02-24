import React from "react";
import { PersonnelCard } from "../../components/personnelCard";
import useHomepage from "../../hooks/useHomepage";

const Homepage = (): JSX.Element => {
    const { allPersonnel, goNextPage, goPreviousPage } = useHomepage();

    return (
        <div>
            {allPersonnel.isLoading && "Loading..."}
            {allPersonnel.isError &&
                "Error Fetching data! Please try again later."}
            {/* {allPersonnel.data?.data.map((personnel) => (
                <PersonnelCard />
            ))} */}
            <PersonnelCard />
            {/* <button onClick={goPreviousPage}>prev</button>
            <button onClick={goNextPage}>next</button> */}
        </div>
    );
};

export default Homepage;
