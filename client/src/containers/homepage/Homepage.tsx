import React from "react";
import * as S from "./styles";
import useHomepage from "../../hooks/useHomepage";
import { PersonnelCard } from "../../components/personnelCard";
import { Sidebar } from "../../components/sidebar";
import { LoaderSpinner } from "../../components/loaderSpinner";

const Homepage = (): JSX.Element => {
    const {
        allPersonnel,
        toogleSidebar,
        isCollapsed,
        locations,
        departments,
        handleInputOnChange,
    } = useHomepage();

    const renderLoaderSpinner = () => {
        if (!allPersonnel.isLoading) {
            return null;
        }

        return (
            <S.LoaderWrapper>
                <LoaderSpinner />
            </S.LoaderWrapper>
        );
    };

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

            {renderLoaderSpinner()}
        </S.Wrapper>
    );
};

export default Homepage;
