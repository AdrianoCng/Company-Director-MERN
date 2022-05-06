// Hooks
import usePersonnel from "../../hooks/usePersonnel";

// Types
import { ButtonSize, ButtonType, ButtonVariant } from "../../types/button.types";
import { PersonnelDetails } from "../../types/personnel.types";

// Styles
import * as S from "./styles";
import { ButtonsContainer } from "../../globalStyles";
import { Wrapper } from "../homepage/styles";

// Components
import { Sidebar } from "../../components/sidebar";
import { PageMeta } from "../../components/pageMeta";
import { Button } from "../../components/button";
import { Modal } from "../../components/modal";
import { Avatar } from "../../components/avatar";
import { FileInput } from "../../components/fileInput";
import { SelectField } from "../../components/selectField";
import { Textbox } from "../../components/textbox";

const AddPersonnel = () => {
    const {
        handleInputOnChange,
        form,
        handleFormOnSubmit,
        locationOptions,
        departmentOptions,
        formErrors,
        handleDeletePersonnel,
        setIsDeleteConfirmationModalOpen,
        isDeleteConfirmationModalOpen,
        pageTitle,
        pageDescription,
        isEditing,
        personnelDetails,
    } = usePersonnel();

    const { first_name, last_name, email, location_name, department_name } = form;

    const renderButton = (): JSX.Element => {
        if (isEditing()) {
            return (
                <>
                    <Button $variant={ButtonVariant.DANGER} onClick={() => setIsDeleteConfirmationModalOpen}>
                        Delete
                    </Button>
                    <Button type={ButtonType.SUBMIT}>Edit</Button>
                </>
            );
        }

        return <Button type={ButtonType.SUBMIT}>Add</Button>;
    };

    return (
        <Wrapper $isCollapsed>
            <Sidebar isCollapsed />
            <PageMeta title={pageTitle} description={pageDescription} />

            <S.Main>
                <Avatar avatarUrl={personnelDetails.data?.data.avatar_url} />

                <S.Form onSubmit={handleFormOnSubmit} encType={"multipart/form-data"}>
                    <S.FormRow>
                        <Textbox
                            name={PersonnelDetails.FIRST_NAME}
                            value={first_name}
                            onChange={handleInputOnChange}
                            label="First Name"
                            error={formErrors[PersonnelDetails.FIRST_NAME]}
                        />
                        <Textbox
                            name={PersonnelDetails.LAST_NAME}
                            label="Last Name"
                            value={last_name}
                            onChange={handleInputOnChange}
                            error={formErrors[PersonnelDetails.LAST_NAME]}
                        />
                    </S.FormRow>

                    <S.FormRow>
                        <Textbox
                            name={PersonnelDetails.EMAIL}
                            label="Email"
                            value={email}
                            onChange={handleInputOnChange}
                            error={formErrors[PersonnelDetails.EMAIL]}
                        />
                    </S.FormRow>

                    <S.FormRow>
                        <SelectField
                            options={locationOptions}
                            name={PersonnelDetails.LOCATION}
                            value={location_name}
                            onChange={handleInputOnChange}
                            label={"Location"}
                            error={formErrors[PersonnelDetails.LOCATION]}
                            placeholder={"Select a location"}
                        />

                        <SelectField
                            options={departmentOptions}
                            name={PersonnelDetails.DEPARTMENT}
                            onChange={handleInputOnChange}
                            value={department_name}
                            label={"Department"}
                            error={formErrors[PersonnelDetails.DEPARTMENT]}
                            placeholder={"Select a department"}
                        />
                    </S.FormRow>

                    <S.FormRow>
                        <FileInput
                            name={PersonnelDetails.AVATAR}
                            label="Avatar"
                            onChange={handleInputOnChange}
                            error={formErrors[PersonnelDetails.AVATAR]}
                        />
                    </S.FormRow>

                    <ButtonsContainer>{renderButton()}</ButtonsContainer>
                </S.Form>
            </S.Main>

            <Modal
                isOpen={isDeleteConfirmationModalOpen}
                onRequestClose={() => setIsDeleteConfirmationModalOpen(false)}
            >
                <div>
                    <h3>Are you sure you want to delete this record?</h3>

                    <ButtonsContainer>
                        <Button
                            onClick={() => setIsDeleteConfirmationModalOpen(false)}
                            $size={ButtonSize.SMALL}
                            $variant={ButtonVariant.PRIMARY}
                        >
                            No
                        </Button>
                        <Button
                            onClick={handleDeletePersonnel}
                            $size={ButtonSize.SMALL}
                            $variant={ButtonVariant.DANGER_MUTED}
                        >
                            Yes
                        </Button>
                    </ButtonsContainer>
                </div>
            </Modal>
        </Wrapper>
    );
};

export default AddPersonnel;
