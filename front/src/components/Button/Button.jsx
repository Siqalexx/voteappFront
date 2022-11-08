import "./Button.scss";
export default function Button({ ButtonType, children, ...rest }) {
    return (
        <button
            {...rest}
            className={"buttonTest " + (ButtonType ? ButtonType : "")}
        >
            {children}
        </button>
    );
}
