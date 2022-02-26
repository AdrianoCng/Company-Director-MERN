import React, { useState } from "react";
import * as S from "./styles";

interface Props {
    name: string;
    id: string;
}

const Checkbox = ({ name, id }: Props): JSX.Element => {
    const [selected, setSelected] = useState(false);

    return (
        <S.Tile
            onClick={() => setSelected((prev) => !prev)}
            $selected={selected}
        >
            <S.Checkbox id={id} value={id} />
            <S.Label style={{ textTransform: "capitalize" }} htmlFor={id}>
                {name}
            </S.Label>
        </S.Tile>
    );
};

export default Checkbox;
