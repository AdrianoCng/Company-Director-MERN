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
            {allPersonnel.data?.data.map(
                ({
                    first_name,
                    last_name,
                    email,
                    department_name,
                    location_name,
                }) => (
                    <PersonnelCard
                        firstName={first_name}
                        lastName={last_name}
                        email={email}
                        department={department_name}
                        location={location_name}
                    />
                )
            )}
        </S.Deck>
    );
};

export default Homepage;
