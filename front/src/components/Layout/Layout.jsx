import "./layout.scss";

export default function Layout({ children }) {
	return (
		<div className='layout__background'>
			<div className='layout'>{children}</div>
		</div>
	);
}
