import React from "react";
import * as Styled from "./styles";
import { GiHamburgerMenu } from "react-icons/gi";

interface Props {
    isCollapsed: boolean;
    toogle: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar = ({ isCollapsed, toogle }: Props): JSX.Element => {
    return (
        <Styled.Wrapper $isCollapsed={isCollapsed}>
            <Styled.Hamburger onClick={() => toogle((prev) => !prev)}>
                <GiHamburgerMenu />
            </Styled.Hamburger>
        </Styled.Wrapper>
    );
};

export default Sidebar;
