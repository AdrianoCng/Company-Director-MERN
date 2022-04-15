import * as S from "./styles";

interface Props {
    currentPage: number;
    lastPage: number;
    changePage: (page: number) => void;
}
const Pagination = ({
    currentPage,
    lastPage,
    changePage,
}: Props): JSX.Element => {
    const renderPages: () => JSX.Element[] = () => {
        return Array.from({ length: lastPage }, (_, i) => i + 1).map((page) => (
            <S.PageButton
                key={page}
                $active={page === currentPage}
                onClick={() => changePage(page)}
            >
                {page}
            </S.PageButton>
        ));
    };

    return <S.PaginationWrapper>{renderPages()}</S.PaginationWrapper>;
};

export default Pagination;
