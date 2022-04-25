import { useParams } from "react-router-dom";

import usePersonnel from "../../hooks/usePersonnel";
import * as S from "./styles";
import { Wrapper } from "../homepage/styles";
import { Sidebar } from "../../components/sidebar";
import { PersonnelDetailsForm } from "../../components/personnelDetailsForm";
import { PageMeta } from "../../components/pageMeta";

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
    } = usePersonnel({ personnelID: id });

    const isEditing = () => !!id;

    const pageTitle = isEditing() ? "Edit Personnel" : "Add Personnel";
    const pageDescription = isEditing()
        ? "Edit details about this record."
        : "Add a new entry to the database";

    return (
        <Wrapper $isCollapsed>
            <Sidebar isCollapsed />
            <PageMeta title={pageTitle} description={pageDescription} />

            <S.Main>
                <PersonnelDetailsForm
                    onSubmit={handleFormOnSubmit}
                    onDelete={handleDeletePersonnel}
                    onInputChange={handleInputOnChange}
                    form={form}
                    formErrors={formErrors}
                    locationOptions={locationOptions}
                    departmentOptions={departmentOptions}
                    isEditing={isEditing()}
                />
            </S.Main>
        </Wrapper>
    );
};

export default AddPersonnel;
