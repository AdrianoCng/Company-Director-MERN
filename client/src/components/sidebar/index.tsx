import React from "react";
import styles from "./styles";
import { GiHamburgerMenu } from "react-icons/gi";

interface Props {
    isCollapsed: boolean;
    toogle: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar = ({ isCollapsed, toogle }: Props): JSX.Element => {
    return (
        <styles.Wrapper isCollapsed={isCollapsed}>
            <styles.Hamburger onClick={() => toogle((prev) => !prev)}>
                <GiHamburgerMenu />
            </styles.Hamburger>
        </styles.Wrapper>
    );
};

export default Sidebar;
