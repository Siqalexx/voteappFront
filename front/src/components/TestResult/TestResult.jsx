import Button from "../Button/Button";
import Loading from "../Loading/Loading";
import { Link } from "react-router-dom";
import "./TestResult.scss";

export default function TestResult({ test, testResult }) {
    return (
        <div className="test__result">
            <h1>Тест успешно пройден!</h1>

            {!testResult && <Loading />}
            {testResult && (
                <>
                    <div className="test__results">
                        <h3>Ваши результаты:</h3>
                        <div>Правильных ответов: {testResult.correct}</div>
                    </div>
                    <Link to="/">
                        <Button ButtonType="button_autorization">
                            На главную
                        </Button>
                    </Link>
                </>
            )}
        </div>
    );
}
