import React from "react";
import * as S from "./styles";
import { OptionSelectField } from "../../types/SelectField";

interface Props {
    onChange: (name: string, value: string) => void;
    options?: OptionSelectField[];
    name: string;
    value: string;
    label?: string;
}
const SelectField = ({ options, onChange, name, value, label }: Props) => {
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
        </S.Container>
    );
};

export default SelectField;
