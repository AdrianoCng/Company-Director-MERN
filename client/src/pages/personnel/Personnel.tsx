import { useParams } from "react-router-dom";
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
    const { id } = useParams();
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
    } = usePersonnel({ personnelID: id });

    const isEditing = () => !!id;

    const pageTitle = isEditing() ? "Edit Personnel" : "Add Personnel";
    const pageDescription = isEditing()
        ? "Edit details about this record."
        : "Add a new entry to the database";

    const renderDeleteConfirmationModal = () => {
        return (
            <Modal
                isOpen={isDeleteConfirmationModalOpen}
                onRequestClose={() => setIsDeleteConfirmationModalOpen(false)}
            >
                <div>
                    <h3>Are you sure you want to delete this record?</h3>

                    <ButtonsContainer>
                        <Button
                            onClick={() =>
                                setIsDeleteConfirmationModalOpen(false)
                            }
                            $size={ButtonSize.SMALL}
                            $variant={ButtonVariant.PRIMARY_MUTED}
                        >
                            No
                        </Button>
                        <Button
                            onClick={handleDeletePersonnel}
                            $size={ButtonSize.SMALL}
                        >
                            Yes
                        </Button>
                    </ButtonsContainer>
                </div>
            </Modal>
        );
    };

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

            {renderDeleteConfirmationModal()}
        </Wrapper>
    );
};

export default AddPersonnel;
