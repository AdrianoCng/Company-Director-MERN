import React from "react";
import Logo from "../logo";
import styles from "./styles";

const Sidebar = (): JSX.Element => {
    return (
        <styles.Wrapper>
            <styles.Introduction>
                <Logo />
            </styles.Introduction>
        </styles.Wrapper>
    );
};

export default Sidebar;
