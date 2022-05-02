import * as S from "./styles";

interface Props {
    onChange: (name: string, value: File | null) => void;
    name: string;
    label?: string;
    error?: string;
}
const FileInput = ({ name, label, error, onChange }: Props) => {
    return (
        <S.Container>
            {label && <S.Label>{label}</S.Label>}

            <S.FileInput
                name={name}
                onChange={(e) => {
                    if (e.target.files) {
                        onChange(name, e.target.files[0]);
                    }
                }}
            />

            {error && <S.Error>{error}</S.Error>}
        </S.Container>
    );
};

export default FileInput;
