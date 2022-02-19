import styled from "styled-components";

interface Props {
    isCollapsed: boolean;
}

const Wrapper = styled.div<Props>`
    width: ${(props) => (props.isCollapsed ? "90px" : "290px")};
    background: #1f3350;
    padding: 20px;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
`;

const Title = styled.div`
    padding: 0 20px;
    font-size: 24px;
    color: white;
    font-weight: bold;
`;

const Styles = {
    Wrapper,
    Title,
};
export default Styles;
