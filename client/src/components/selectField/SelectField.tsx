import React from "react";
import * as S from "./styles";
import { OptionSelectField } from "../../types/SelectField";

interface Props {
    onChange: (name: string, value: string) => void;
    options?: OptionSelectField[];
    name: string;
}
const SelectField = ({ options, onChange, name }: Props) => {
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

    return (
        <S.SelectInput
            name={name}
            onChange={(e) => {
                onChange(name, e.target.value);
            }}
        >
            {renderOptions()}
        </S.SelectInput>
    );
};

export default SelectField;
