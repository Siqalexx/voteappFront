import "./ButtonTest.scss";
export default function ButtonTest({ ButtonType, children }) {
	return (
		<button className={"buttonTest " + (ButtonType ? ButtonType : "")}>
			{children}
		</button>
	);
}
