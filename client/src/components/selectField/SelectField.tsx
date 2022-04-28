// Styles
import * as S from "./styles";

// Types
import { OptionSelectField } from "../../types/selectField.types";

interface Props {
    onChange: (name: string, value: string) => void;
    options?: OptionSelectField[];
    name: string;
    value: string;
    label?: string;
    error?: string;
    placeholder?: string;
}
const SelectField = ({ options, onChange, name, value, label, error, placeholder }: Props) => {
    const renderOptions = () => {
        if (!options) {
            return null;
        }

        if (options.length < 1) {
            return null;
        }

        const optionsList = [...options];

        if (!!placeholder) {
            optionsList.unshift({ value: "", label: placeholder });
        }

        return optionsList?.map(({ value, label }) => (
            <option disabled={!value} selected={!value} hidden={!value} key={value} value={value}>
                {label}
            </option>
        ));
    };

    return (
        <S.Container>
            {label && <S.Label>{label}</S.Label>}

            <S.SelectInput
                name={name}
                onChange={(e) => {
                    onChange(name, e.target.value);
                }}
                value={value}
            >
                {renderOptions()}
            </S.SelectInput>

            {error && <S.Error>{error}</S.Error>}
        </S.Container>
    );
};

export default SelectField;
