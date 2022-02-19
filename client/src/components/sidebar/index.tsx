import React from "react";
import Logo from "../logo";
import styles from "./styles";

const Sidebar = (): JSX.Element => {
    return (
        <styles.Wrapper>
            <Logo />
        </styles.Wrapper>
    );
};

export default Sidebar;
