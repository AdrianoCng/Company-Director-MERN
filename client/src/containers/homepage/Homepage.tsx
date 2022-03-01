import React from "react";
import * as S from "./styles";
import useHomepage from "../../hooks/useHomepage";
import { PersonnelCard } from "../../components/personnelCard";
import { Sidebar } from "../../components/sidebar";

const Homepage = (): JSX.Element => {
    const {
        allPersonnel,
        toogleSidebar,
        isCollapsed,
        locations,
        departments,
        handleInputOnChange,
    } = useHomepage();

    return (
        <S.Wrapper $isCollapsed={isCollapsed}>
            <Sidebar
                isCollapsed={isCollapsed}
                toogle={toogleSidebar}
                locations={locations.data}
                departments={departments.data}
                onChange={handleInputOnChange}
            />

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
        </S.Wrapper>
    );
};

export default Homepage;
