import * as S from "./styles";

interface Props {
    avatarUrl?: string;
}
const Avatar = ({ avatarUrl }: Props) => {
    return <S.Avatar avatarUrl={avatarUrl} />;
};

export default Avatar;
