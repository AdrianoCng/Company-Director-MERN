import { FC } from "react";
import * as S from "./styles";

interface Props {
    type?: "button" | "submit" | "reset";
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
const Button: FC<Props> = ({ children, type = "button", onClick }) => {
    return (
        <S.Button type={type} onClick={onClick}>
            {children}
        </S.Button>
    );
};

export default Button;
