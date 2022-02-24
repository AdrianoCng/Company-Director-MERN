import React from "react";
import * as S from "./styles";
import { PersonnelCard } from "../../components/personnelCard";
import useHomepage from "../../hooks/useHomepage";

const Homepage = (): JSX.Element => {
    const { allPersonnel, goNextPage, goPreviousPage } = useHomepage();

    return (
        <S.Deck>
            {allPersonnel.isLoading && "Loading..."}
            {allPersonnel.isError &&
                "Error Fetching data! Please try again later."}
            {allPersonnel.data?.data.map((personnel) => (
                <PersonnelCard />
            ))}
        </S.Deck>
    );
};

export default Homepage;
