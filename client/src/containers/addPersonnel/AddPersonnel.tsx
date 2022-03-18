import React from "react";
import { Wrapper } from "../homepage/styles";
import { Sidebar } from "../../components/sidebar";
import { toast } from "react-toastify";

const AddPersonnel = () => {
    return (
        <Wrapper $isCollapsed>
            <Sidebar isCollapsed />
            <button onClick={() => toast.success("Miiinchia")}>
                Miiiiiinchia
            </button>
        </Wrapper>
    );
};

export default AddPersonnel;
