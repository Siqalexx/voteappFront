import Loyout from "../Layout/Layout";
import ButtonTest from "../ButtonTest/ButtonTest.js";
import ProgressBar from "../ProgressBar/ProgressBar";
import "./question.scss";

export default function Question({ questionTitle, options }) {
	return (
		<Loyout>
			<div className='question'>
				<ProgressBar progress={100}></ProgressBar>
				<h1 className='question__title'>{questionTitle}</h1>
				<div className='buttonPlaces'>
					{options.map(text => (
						<ButtonTest key={text} className='buttonTest'>
							{text}
						</ButtonTest>
					))}
				</div>
				<p className='question__page'>{`1/${options.length}`}</p>
			</div>
		</Loyout>
	);
}
