import { useState, useEffect } from "react";
import PollService from "../../services/PollService";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import Question from "../Question/Question";
import Loading from "../Loading/Loading";
import TestResult from "../TestResult/TestResult";
import "./Test.scss";

export default function Test() {
    const [test, setTest] = useState(null);
    const [answer, setAnswers] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const [isComplete, setComplete] = useState(false);
    const [completeResults, setCompleteResults] = useState(null);

    const { id } = useParams();

    function fetchTest() {
        PollService.getPoll(id)
            .then((data) => setTest(data))
            .catch((error) => console.log(error));
    }

    useEffect(() => {
        fetchTest();
        setCurrentQuestion(0);
    }, []);

    useEffect(() => {
        if (isComplete) {
            completeTest();
        }
    }, [isComplete]);

    if (!test) {
        return <Loading />;
    }

    function nextQuestion(answer) {
        setAnswers((prev) => {
            const list = [...prev];
            list[currentQuestion] = answer;
            return list;
        });

        console.log(test.questions.length > currentQuestion);

        if (test.questions.length - 1 > currentQuestion) {
            return setCurrentQuestion((q) => q + 1);
        }

        return setComplete(true);
    }

    function completeTest() {
        PollService.vote(id, { questions: answer })
            .then((results) => {
                setCompleteResults(results);
            })
            .catch((error) => console.log(error));
    }

    if (isComplete) {
        return <TestResult test={test} testResult={completeResults} />;
    }

    const question = test.questions[currentQuestion];

    console.log(test.questions.length / (currentQuestion + 1));

    return (
        <Question
            questionTitle={question.title}
            options={question.options}
            onAnswer={nextQuestion}
            testLength={test.questions.length}
            progress={((currentQuestion + 1) / test.questions.length) * 100}
        />
    );
}
