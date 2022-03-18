import React from "react";
import useAddPersonnel from "../../hooks/useAddPersonnel";
import * as S from "./styles";
import { Wrapper } from "../homepage/styles";
import { Sidebar } from "../../components/sidebar";
import { Textbox } from "../../components/textbox";
import { Avatar } from "../../components/avatar";
import SelectField from "../../components/selectField/SelectField";

enum PersonnelDetails {
    firstName = "first_name",
    lastName = "last_name",
    email = "email",
    location = "location_name",
    department = "department_name",
}

const AddPersonnel = () => {
    const {
        handleInputOnChange,
        form,
        handleFormOnSubmit,
        locationOptions,
        departmentOptions,
    } = useAddPersonnel();

    const { first_name, last_name, email } = form;

    return (
        <Wrapper $isCollapsed>
            <Sidebar isCollapsed />
            <S.Title>Add Personnel</S.Title>

            <S.Main>
                <Avatar />

                <S.Form onSubmit={handleFormOnSubmit}>
                    <S.FormRow>
                        <Textbox
                            name={PersonnelDetails.firstName}
                            value={first_name}
                            onChange={handleInputOnChange}
                            required
                            label="First Name"
                        />
                        <Textbox
                            name={PersonnelDetails.lastName}
                            label="Last Name"
                            value={last_name}
                            onChange={handleInputOnChange}
                            required
                        />
                    </S.FormRow>

                    <S.FormRow>
                        <Textbox
                            name={PersonnelDetails.email}
                            label="Email"
                            value={email}
                            onChange={handleInputOnChange}
                            required
                        />
                    </S.FormRow>

                    <S.FormRow>
                        {/* <Textbox
                            name={PersonnelDetails.location}
                            label="Location"
                            value={location_name}
                            onChange={handleInputOnChange}
                            required
                        /> */}
                        <SelectField
                            options={locationOptions}
                            name={PersonnelDetails.location}
                            onChange={handleInputOnChange}
                        />

                        {/* <Textbox
                            name={PersonnelDetails.department}
                            label="Department"
                            value={department_name}
                            onChange={handleInputOnChange}
                            required
                        /> */}
                        <SelectField
                            options={departmentOptions}
                            name={PersonnelDetails.department}
                            onChange={handleInputOnChange}
                        />
                    </S.FormRow>

                    <S.Button type="submit">Add</S.Button>
                </S.Form>
            </S.Main>
        </Wrapper>
    );
};

export default AddPersonnel;
