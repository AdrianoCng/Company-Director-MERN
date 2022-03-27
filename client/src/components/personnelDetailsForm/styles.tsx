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
