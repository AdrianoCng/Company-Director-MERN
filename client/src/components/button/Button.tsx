import { FC } from "react";
import * as S from "./styles";

interface Props {
    type?: "button" | "submit" | "reset";
}
const Button: FC<Props> = ({ children, type = "button" }) => {
    return <S.Button type={type}>{children}</S.Button>;
};

export default Button;
