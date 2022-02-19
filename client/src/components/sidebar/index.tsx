import React from "react";
import styles from "./styles";

interface Props {
    isCollapsed: boolean;
    toogle: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar = ({ isCollapsed, toogle }: Props): JSX.Element => {
    return (
        <styles.Wrapper isCollapsed={isCollapsed}>
            <styles.Title>Company Directory</styles.Title>
        </styles.Wrapper>
    );
};

export default Sidebar;
