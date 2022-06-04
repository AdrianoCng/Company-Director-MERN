import * as S from "./styles";

interface Props {
    name: string;
    value: string;
    onChange: (name: string, value: string) => void;
    id?: string;
    placeholder?: string;
    label?: string;
    required?: boolean;
    error?: string;
    disabled?: boolean;
}
const Textbox = ({
    name,
    value,
    onChange,
    id,
    placeholder,
    label,
    required = false,
    error,
    disabled = false,
}: Props) => {
    const renderLabel = () => {
        if (!label) {
            return null;
        }

        return (
            <S.Label $disabled={disabled} htmlFor={id}>
                {label}
            </S.Label>
        );
    };

    const renderError = () => {
        if (!error) {
            return null;
        }

        return <S.Error>{error}</S.Error>;
    };

    return (
        <S.Container>
            {renderLabel()}

            <S.Textbox
                name={name}
                value={value}
                id={id}
                onChange={(e) => {
                    onChange(name, e.target.value);
                }}
                placeholder={placeholder}
                required={required}
                disabled={disabled}
            />

            {renderError()}
        </S.Container>
    );
};

export default Textbox;
