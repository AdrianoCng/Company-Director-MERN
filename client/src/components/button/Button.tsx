import { FC } from "react";

import * as S from "./styles";

interface Props {
    type?: "button" | "submit" | "reset";
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    $variant?: "primary" | "danger";
}
const Button: FC<Props> = ({
    children,
    type = "button",
    onClick,
    $variant = "primary",
}) => {
    return (
        <S.Button $variant={$variant} type={type} onClick={onClick}>
            {children}
        </S.Button>
    );
};

export default Button;
