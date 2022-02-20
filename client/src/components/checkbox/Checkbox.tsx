import React from "react";
import * as S from "./styles";

const Checkbox = (): JSX.Element => {
    return (
        <div>
            <S.Checkbox id="c1" />
            <label htmlFor="c1">London</label>
        </div>
    );
};

export default Checkbox;
