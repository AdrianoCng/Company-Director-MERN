import styled from "styled-components";

export const Main = styled.main`
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    margin-top: 20px;
    height: calc(100vh - 113px);
    width: 100%;
    padding: 20px;
    position: relative;
    background-color: white;
`;

export const FormRow = styled.div`
    display: flex;
    gap: 20px;
    align-items: flex-start;
`;

export const Form = styled.form`
    ${FormRow}:not(:last-of-type) {
        margin-bottom: 20px;
    }
`;
