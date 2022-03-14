import React from "react";
import { Wrapper } from "../homepage/styles";
import { Sidebar } from "../../components/sidebar";

const AddPersonnel = () => {
    return (
        <Wrapper $isCollapsed>
            <Sidebar isCollapsed />
            Hello
        </Wrapper>
    );
};

export default AddPersonnel;
