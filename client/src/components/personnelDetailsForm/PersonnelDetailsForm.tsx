import { FormEventHandler } from "react";
import * as S from "./styles";
import { Avatar } from "../avatar";
import { Textbox } from "../textbox";
import { SelectField } from "../selectField";
import { OptionSelectField } from "../../types/SelectField";
import { Button } from "../button";

enum PersonnelDetails {
    FIRST_NAME = "first_name",
    LAST_NAME = "last_name",
    EMAIL = "email",
    LOCATION = "location_name",
    DEPARTMENT = "department_name",
}

interface Props {
    onSubmit: FormEventHandler<HTMLFormElement>;
    onInputChange: (name: string, value: string) => void;
    form: {
        first_name: string;
        last_name: string;
        email: string;
        location_name: string;
        department_name: string;
    };
    locationOptions: OptionSelectField[];
    departmentOptions: OptionSelectField[];
}

const PersonnelDetailsForm = ({
    onSubmit,
    onInputChange,
    form,
    locationOptions,
    departmentOptions,
}: Props) => {
    const { first_name, last_name, email, location_name, department_name } =
        form;

    return (
        <>
            <Avatar />

            <S.Form onSubmit={onSubmit}>
                <S.FormRow>
                    <Textbox
                        name={PersonnelDetails.FIRST_NAME}
                        value={first_name}
                        onChange={onInputChange}
                        required
                        label="First Name"
                    />
                    <Textbox
                        name={PersonnelDetails.LAST_NAME}
                        label="Last Name"
                        value={last_name}
                        onChange={onInputChange}
                        required
                    />
                </S.FormRow>

                <S.FormRow>
                    <Textbox
                        name={PersonnelDetails.EMAIL}
                        label="Email"
                        value={email}
                        onChange={onInputChange}
                        required
                    />
                </S.FormRow>

                <S.FormRow>
                    <SelectField
                        options={locationOptions}
                        name={PersonnelDetails.LOCATION}
                        value={location_name}
                        onChange={onInputChange}
                        label={"Location"}
                    />

                    <SelectField
                        options={departmentOptions}
                        name={PersonnelDetails.DEPARTMENT}
                        onChange={onInputChange}
                        value={department_name}
                        label={"Department"}
                    />
                </S.FormRow>

                <Button type="submit">Add</Button>
            </S.Form>
        </>
    );
};

export default PersonnelDetailsForm;
