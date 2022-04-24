import { useState } from "react";

import * as S from "./styles";

interface Props {
    name: string;
    id: string;
    value: string;
    onChange?: (name: string, value: string) => void;
}

const Checkbox = ({ name, id, value, onChange }: Props): JSX.Element => {
    const [selected, setSelected] = useState(false);

    return (
        <S.Tile $selected={selected}>
            <S.Checkbox
                name={name}
                id={id}
                value={value}
                onChange={(e) => {
                    if (onChange) {
                        onChange(name, e.target.value);
                    }
                    setSelected(e.target.checked);
                }}
            />
            <S.Label>{value}</S.Label>
        </S.Tile>
    );
};

export default Checkbox;
