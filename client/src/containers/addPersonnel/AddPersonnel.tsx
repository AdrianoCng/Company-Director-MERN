import useAddPersonnel from "../../hooks/useAddPersonnel";
import * as S from "./styles";
import { Wrapper } from "../homepage/styles";
import { Sidebar } from "../../components/sidebar";
import { PersonnelDetailsForm } from "../../components/personnelDetailsForm";
import { PageMeta } from "../../components/pageMeta";

const AddPersonnel = () => {
    const {
        handleInputOnChange,
        form,
        handleFormOnSubmit,
        locationOptions,
        departmentOptions,
    } = useAddPersonnel();

    return (
        <Wrapper $isCollapsed>
            <Sidebar isCollapsed />
            <PageMeta
                title="Add Personnel"
                description="Add a new entry to the database"
            />

            <S.Main>
                <PersonnelDetailsForm
                    onSubmit={handleFormOnSubmit}
                    onInputChange={handleInputOnChange}
                    form={form}
                    locationOptions={locationOptions}
                    departmentOptions={departmentOptions}
                />
            </S.Main>
        </Wrapper>
    );
};

export default AddPersonnel;
