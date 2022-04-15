import * as S from "./styles";

interface Props {
    title: string;
    description: string;
}
const PageTitle = ({ title, description }: Props): JSX.Element => {
    return (
        <S.Wrapper>
            <S.Title>{title}</S.Title>
            <S.Description>{description}</S.Description>
        </S.Wrapper>
    );
};

export default PageTitle;
