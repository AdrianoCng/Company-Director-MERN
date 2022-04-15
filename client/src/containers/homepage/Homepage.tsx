import * as S from "./styles";
import useHomepage from "../../hooks/useHomepage";
import { PersonnelCard } from "../../components/personnelCard";
import { Sidebar } from "../../components/sidebar";
import { LoaderSpinner } from "../../components/loaderSpinner";
import { Pagination } from "../../components/pagination";
import { PageMeta } from "../../components/pageMeta";

const Homepage = (): JSX.Element => {
    const {
        allPersonnel,
        toogleSidebar,
        isCollapsed,
        locations,
        departments,
        handleInputOnChange,
        goToPage,
        currentPage,
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

            <S.Main>
                <PageMeta
                    title="All Personnel"
                    description="View the list of all the personnel."
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

                <Pagination
                    currentPage={currentPage}
                    lastPage={allPersonnel.data?.last_page || currentPage}
                    changePage={goToPage}
                />
            </S.Main>

            {renderLoaderSpinner()}
        </S.Wrapper>
    );
};

export default Homepage;
