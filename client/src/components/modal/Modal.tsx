import ReactModal from "react-modal";

interface Props {
    isOpen: boolean;
}
const Modal = ({ isOpen }: Props) => {
    return <ReactModal isOpen={isOpen}>Hello</ReactModal>;
};

export default Modal;
