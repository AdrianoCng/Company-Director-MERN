import ReactModal, { Props, Styles } from "react-modal";

const Modal = (props: Props) => {
    const defaultStyles: Styles = {
        overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            ...props.style?.overlay,
        },
        content: {
            height: "600px",
            width: "800px",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            borderRadius: "5px",
            ...props.style?.content,
        },
    };

    return (
        <ReactModal {...props} style={defaultStyles}>
            {props.children}
        </ReactModal>
    );
};

export default Modal;
