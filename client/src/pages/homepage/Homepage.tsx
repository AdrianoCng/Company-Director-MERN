import useHomepage from "../../hooks/useHomepage";

// Styles
import * as S from "./styles";

// Components
import { PersonnelCard } from "../../components/personnelCard";
import { Sidebar } from "../../components/sidebar";
import { LoaderSpinner } from "../../components/loaderSpinner";
import { Pagination } from "../../components/pagination";
import { PageMeta } from "../../components/pageMeta";

const Homepage = (): JSX.Element => {
    const { allPersonnel, toogleSidebar, isCollapsed, handleInputOnChange, goToPage, currentPage } =
        useHomepage();

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

    const renderErrorMessage = () => {
        if (!allPersonnel.isError) {
            return null;
        }

        return <p>Error fetching data. Please try again later.</p>;
    };

    const renderContent = () => {
        if (!allPersonnel.data?.data) {
            return null;
        }

        if (allPersonnel.isError) {
            return null;
        }

        return allPersonnel.data?.data.map(
            ({ _id, first_name, last_name, email, department_name, location_name }) => (
                <PersonnelCard
                    firstName={first_name}
                    lastName={last_name}
                    email={email}
                    department={department_name}
                    location={location_name}
                    id={_id}
                    key={_id}
                />
            )
        );
    };

    return (
        <S.Wrapper $isCollapsed={isCollapsed}>
            <Sidebar isCollapsed={isCollapsed} toogle={toogleSidebar} onChange={handleInputOnChange} />

            <S.Main>
                <PageMeta title="All Personnel" description="View the list of all the personnel." />

                <S.Deck>
                    {renderErrorMessage()}
                    {renderContent()}

                    {renderLoaderSpinner()}
                </S.Deck>

                <Pagination
                    currentPage={currentPage}
                    lastPage={allPersonnel.data?.last_page || currentPage}
                    changePage={goToPage}
                />
            </S.Main>
        </S.Wrapper>
    );
};

export default Homepage;
