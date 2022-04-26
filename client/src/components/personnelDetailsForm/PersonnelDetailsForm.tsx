// Types
import { OptionSelectField } from "../../types/selectField.types";
import { IFormErrors, PersonnelDetails } from "../../types/personnel.types";
import { ButtonType, ButtonVariant } from "../../types/button.types";

// Styles
import * as S from "./styles";
import { ButtonsContainer } from "../../globalStyles";

// Components
import { Avatar } from "../avatar";
import { Textbox } from "../textbox";
import { SelectField } from "../selectField";
import { Button } from "../button";

interface Props {
    onSubmit: React.FormEventHandler<HTMLFormElement>;
    onDelete: React.MouseEventHandler<HTMLButtonElement>;
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
    isEditing: boolean;
    formErrors: IFormErrors;
}
const PersonnelDetailsForm = ({
    onSubmit,
    onDelete,
    onInputChange,
    form,
    locationOptions,
    departmentOptions,
    isEditing,
    formErrors,
}: Props) => {
    const { first_name, last_name, email, location_name, department_name } =
        form;

    const renderButton = (): JSX.Element => {
        if (isEditing) {
            return (
                <>
                    <Button $variant={ButtonVariant.DANGER} onClick={onDelete}>
                        Delete
                    </Button>
                    <Button type={ButtonType.SUBMIT}>Edit</Button>
                </>
            );
        }

        return <Button type={ButtonType.SUBMIT}>Add</Button>;
    };

    return (
        <>
            <Avatar />

            <S.Form onSubmit={onSubmit}>
                <S.FormRow>
                    <Textbox
                        name={PersonnelDetails.FIRST_NAME}
                        value={first_name}
                        onChange={onInputChange}
                        label="First Name"
                        error={formErrors[PersonnelDetails.FIRST_NAME]}
                    />
                    <Textbox
                        name={PersonnelDetails.LAST_NAME}
                        label="Last Name"
                        value={last_name}
                        onChange={onInputChange}
                        error={formErrors[PersonnelDetails.LAST_NAME]}
                    />
                </S.FormRow>

                <S.FormRow>
                    <Textbox
                        name={PersonnelDetails.EMAIL}
                        label="Email"
                        value={email}
                        onChange={onInputChange}
                        error={formErrors[PersonnelDetails.EMAIL]}
                    />
                </S.FormRow>

                <S.FormRow>
                    <SelectField
                        options={locationOptions}
                        name={PersonnelDetails.LOCATION}
                        value={location_name}
                        onChange={onInputChange}
                        label={"Location"}
                        error={formErrors[PersonnelDetails.LOCATION]}
                    />

                    <SelectField
                        options={departmentOptions}
                        name={PersonnelDetails.DEPARTMENT}
                        onChange={onInputChange}
                        value={department_name}
                        label={"Department"}
                        error={formErrors[PersonnelDetails.DEPARTMENT]}
                    />
                </S.FormRow>

                <ButtonsContainer>{renderButton()}</ButtonsContainer>
            </S.Form>
        </>
    );
};

export default PersonnelDetailsForm;
