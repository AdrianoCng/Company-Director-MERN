import React from "react";
import * as S from "./styles";

interface Props {
    name: string;
    value: string;
    onChange: (name: string, value: string) => void;
    id?: string;
    placeholder?: string;
    label?: string;
    required?: boolean;
}

const Textbox = ({
    name,
    value,
    onChange,
    id,
    placeholder,
    label,
    required,
}: Props) => {
    const renderLabel = () => {
        if (!label) {
            return null;
        }

        return <S.Label htmlFor={id}>{label}</S.Label>;
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
            />
        </S.Container>
    );
};

export default Textbox;
