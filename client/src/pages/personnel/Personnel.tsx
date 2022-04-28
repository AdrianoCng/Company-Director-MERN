// Hooks
import usePersonnel from "../../hooks/usePersonnel";

// Types
import { ButtonSize, ButtonVariant } from "../../types/button.types";

// Styles
import * as S from "./styles";
import { ButtonsContainer } from "../../globalStyles";
import { Wrapper } from "../homepage/styles";

// Components
import { Sidebar } from "../../components/sidebar";
import { PersonnelDetailsForm } from "../../components/personnelDetailsForm";
import { PageMeta } from "../../components/pageMeta";
import { Button } from "../../components/button";
import { Modal } from "../../components/modal";

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
    } = usePersonnel();

    return (
        <Wrapper $isCollapsed>
            <Sidebar isCollapsed />
            <PageMeta title={pageTitle} description={pageDescription} />

            <S.Main>
                <PersonnelDetailsForm
                    onSubmit={handleFormOnSubmit}
                    onDelete={() => setIsDeleteConfirmationModalOpen(true)}
                    onInputChange={handleInputOnChange}
                    form={form}
                    formErrors={formErrors}
                    locationOptions={locationOptions}
                    departmentOptions={departmentOptions}
                    isEditing={isEditing()}
                />
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
