import * as S from "./styles";
import { OptionSelectField } from "../../types/selectField.types";

interface Props {
    onChange: (name: string, value: string) => void;
    options?: OptionSelectField[];
    name: string;
    value: string;
    label?: string;
    error?: string;
}
const SelectField = ({
    options,
    onChange,
    name,
    value,
    label,
    error,
}: Props) => {
    const renderLabel = () => {
        if (!label) {
            return null;
        }

        return <S.Label>{label}</S.Label>;
    };

    const renderOptions = () => {
        if (Array.isArray(options) && options?.length < 1) {
            return null;
        }

        return options?.map(({ value, label }) => (
            <option key={value} value={value}>
                {label}
            </option>
        ));
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

            <S.SelectInput
                name={name}
                onChange={(e) => {
                    onChange(name, e.target.value);
                }}
                value={value}
            >
                {renderOptions()}
            </S.SelectInput>

            {renderError()}
        </S.Container>
    );
};

export default SelectField;
