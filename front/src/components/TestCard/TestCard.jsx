import { useEffect, useState } from "react";

import { useParams, Link } from "react-router-dom";
import PollService from "../../services/PollService";
import Button from "../Button/Button";
import Loading from "../Loading/Loading";
import "./TestCard.scss";

export default function TestCard() {
    const [poll, setPoll] = useState(null);
    const [error, setError] = useState("");
    const { id } = useParams();

    function fetchTest() {
        PollService.getPoll(id)
            .then((data) => setPoll(data))
            .catch((error) => setError("Произошла неизвестная ошибка"));
    }

    useEffect(() => {
        fetchTest();
    }, []);

    if (!poll) {
        return <Loading />;
    }

    return (
        <div className="test__card">
            <h1 className="test__heading">{poll.pollTitle}</h1>
            <div className="test__param">
                Всего вопросов: {poll.questions.length}
            </div>
            <div className="test__param">Рейтинг теста: {poll.rating}</div>
            <Link to={`/test/${id}/run`}>
                <Button ButtonType="button_autorization test__btn">
                    Пройти тест
                </Button>
            </Link>
            <Link to="/">
                <Button ButtonType="button_autorization">Назад</Button>
            </Link>
        </div>
    );
}
