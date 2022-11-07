import "./ProgressBar.scss";
export default function ProgressBar(props) {
	return (
		<div className='bar' style={{ "--progress": `${props.progress}%` }}></div>
	);
}
