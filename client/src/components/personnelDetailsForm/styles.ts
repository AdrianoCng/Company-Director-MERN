import styled from "styled-components";

export const FormRow = styled.div`
    display: flex;
    gap: 20px;
    align-items: flex-end;
`;

export const Form = styled.form`
    ${FormRow}:not(:last-of-type) {
        margin-bottom: 20px;
    }
`;

export const ButtonsContainer = styled.div`
    position: absolute;
    bottom: 20px;
    right: 20px;
    display: flex;
    justify-content: flex-end;
    gap: 20px;
`;
