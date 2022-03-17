import styled from "styled-components";

export const Main = styled.main`
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    margin-top: 20px;
    height: calc(100vh - 88px);
    width: 100%;
    padding: 20px;
    position: relative;
    background-color: white;
`;

export const Title = styled.h2`
    margin-left: 20px;
`;

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

export const Button = styled.button`
    position: absolute;
    right: 20px;
    bottom: 20px;
    padding: 10px;
    background-color: var(--primary);
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 1.04em;
    font-weight: bold;
    min-width: 100px;
    cursor: pointer;
`;
