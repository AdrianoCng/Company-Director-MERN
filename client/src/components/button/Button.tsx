import { FC } from "react";

// Types
import {
    ButtonSize,
    ButtonType,
    ButtonVariant,
} from "../../types/button.types";

// Styles
import * as S from "./styles";

interface Props {
    type?: ButtonType;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    $variant?: ButtonVariant;
    $size?: ButtonSize;
}
const Button: FC<Props> = ({
    children,
    type = ButtonType.BUTTON,
    onClick,
    $variant = ButtonVariant.PRIMARY,
    $size = ButtonSize.MEDIUM,
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
