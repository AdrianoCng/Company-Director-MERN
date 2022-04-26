import { FC } from "react";

import * as S from "./styles";

interface Props {
    type?: "button" | "submit" | "reset";
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    $variant?: "primary" | "danger";
    $size?: "small" | "medium" | "large";
}
const Button: FC<Props> = ({
    children,
    type = "button",
    onClick,
    $variant = "primary",
    $size = "medium",
}) => {
    return (
        <S.Button
            $variant={$variant}
            $size={$size}
            type={type}
            onClick={onClick}
        >
            {children}
        </S.Button>
    );
};

export default Button;
