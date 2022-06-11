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
    const {
        allPersonnel,
        toogleSidebar,
        isCollapsed,
        handleInputOnChange,
        setCurrentPage,
        currentPage,
        lastPage,
    } = useHomepage();

    const renderContent = () => {
        if (!allPersonnel.data?.data) {
            return null;
        }

        if (allPersonnel.isError) {
            return null;
        }

        return allPersonnel.data?.data.map(
            ({ _id, first_name, last_name, email, department_name, location_name, avatar_url }) => (
                <PersonnelCard
                    firstName={first_name}
                    lastName={last_name}
                    email={email}
                    department={department_name}
                    location={location_name}
                    avatarUrl={avatar_url}
                    id={_id}
                    key={_id}
                />
            )
        );
    };

    return (
        <S.Wrapper $isCollapsed={isCollapsed}>
            <Sidebar
                isCollapsed={isCollapsed}
                toogle={toogleSidebar}
                onChange={handleInputOnChange}
            />

            <S.Main>
                <PageMeta title="All Personnel" description="View the list of all the personnel." />

                <S.Deck>
                    {allPersonnel.isError && <p>Error fetching data. Please try again later.</p>}

                    {renderContent()}
                </S.Deck>

                {allPersonnel.isLoading && (
                    <S.LoaderWrapper>
                        <LoaderSpinner />
                    </S.LoaderWrapper>
                )}

                <Pagination
                    currentPage={currentPage}
                    lastPage={lastPage}
                    changePage={setCurrentPage}
                />
            </S.Main>
        </S.Wrapper>
    );
};

export default Homepage;
