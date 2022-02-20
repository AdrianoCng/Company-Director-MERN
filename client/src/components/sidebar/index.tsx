import React from "react";
import * as Styled from "./styles";
import { GiHamburgerMenu } from "react-icons/gi";
import { GoLocation } from "react-icons/go";
import { MdOutlineLocationCity } from "react-icons/md";

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

            <Styled.Content>
                <Styled.SidebarIcon>
                    <GoLocation /> Locations
                </Styled.SidebarIcon>
                <MdOutlineLocationCity />
            </Styled.Content>
        </Styled.Wrapper>
    );
};

export default Sidebar;
