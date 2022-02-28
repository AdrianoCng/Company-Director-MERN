import React from "react";
import * as S from "./styles";
import { PersonnelCard } from "../../components/personnelCard";
import useHomepage from "../../hooks/useHomepage";

const Homepage = (): JSX.Element => {
    const { allPersonnel } = useHomepage();

    return (
        <S.Deck>
            {allPersonnel.isLoading && "Loading..."}
            {allPersonnel.isError &&
                "Error Fetching data! Please try again later."}
            {allPersonnel.data?.data.map(
                ({
                    _id,
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
                        key={_id}
                    />
                )
            )}
        </S.Deck>
    );
};

export default Homepage;
