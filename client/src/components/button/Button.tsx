import React from "react";
import * as S from "./styles";

interface Props {
    type?: "button" | "submit" | "reset";
}
const Button: React.FC<Props> = ({ children, type = "button" }) => {
    return <S.Button type={type}>{children}</S.Button>;
};

export default Button;
