import Button from "../Button/Button";
import ProgressBar from "../ProgressBar/ProgressBar";
import "./Question.scss";

export default function Question({
    questionTitle,
    options,
    onAnswer,
    progress,
    testLength,
}) {
    return (
        <div className="question">
            <ProgressBar progress={progress}></ProgressBar>
            <h1 className="question__title">{questionTitle}</h1>
            <div className="buttonPlaces">
                {options.map((text, i) => (
                    <Button
                        key={i}
                        className="buttonTest"
                        onClick={() => onAnswer(text)}
                    >
                        {text}
                    </Button>
                ))}
            </div>
            <p className="question__page">{`1/${testLength}`}</p>
        </div>
    );
}
