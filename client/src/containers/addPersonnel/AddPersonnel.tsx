import useAddPersonnel from "../../hooks/useAddPersonnel";
import * as S from "./styles";
import { Wrapper } from "../homepage/styles";
import { Sidebar } from "../../components/sidebar";
import { PersonnelDetailsForm } from "../../components/personnelDetailsForm";

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
            <S.Title>Add Personnel</S.Title>

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
