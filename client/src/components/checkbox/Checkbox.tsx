import React from "react";
import * as S from "./styles";

interface Props {
    name: string;
    id: string;
}

const Checkbox = ({ name, id }: Props): JSX.Element => {
    return (
        <div>
            <S.Checkbox id={id} value={id} />
            <label style={{ textTransform: "capitalize" }} htmlFor={id}>
                {name}
            </label>
        </div>
    );
};

export default Checkbox;
