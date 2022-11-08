import Button from "../Button/Button";
import ProgressBar from "../ProgressBar/ProgressBar";
import "./Question.scss";

export default function Question({ questionTitle, options }) {
    return (
        <div className="question">
            <ProgressBar progress={100}></ProgressBar>
            <h1 className="question__title">{questionTitle}</h1>
            <div className="buttonPlaces">
                {options.map((text) => (
                    <Button key={text} className="buttonTest">
                        {text}
                    </Button>
                ))}
            </div>
            <p className="question__page">{`1/${options.length}`}</p>
        </div>
    );
}
