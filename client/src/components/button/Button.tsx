import { FC } from "react";

import * as S from "./styles";

interface Props {
    type?: "button" | "submit" | "reset";
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    $secondary?: boolean;
}
const Button: FC<Props> = ({
    children,
    type = "button",
    onClick,
    $secondary = false,
}) => {
    return (
        <S.Button $secondary={$secondary} type={type} onClick={onClick}>
            {children}
        </S.Button>
    );
};

export default Button;
