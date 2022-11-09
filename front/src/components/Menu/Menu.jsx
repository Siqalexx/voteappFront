import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import PollService from "../../services/PollService";
import Button from "../Button/Button";
import Input from "../Input/Input";
import { authContext } from "../AuthContext/AuthContext";
import "./Menu.scss";

export default function Menu() {
    const [user] = useContext(authContext);
    const [tests, setTests] = useState([]);

    useEffect(() => {
        fetchPolls();
    }, []);

    function fetchPolls(offset, limit = 5) {
        PollService.getPolls({ limit, offset })
            .then((polls) => setTests((t) => [...t, ...polls]))
            .catch((error) => console.log(error));
    }

    const [searchInput, setSearchInput] = useState("");
    return (
        <form className="menu">
            <h1 className="menu__title">Главная страница</h1>
            <Input
                className="inputButton"
                placeholder="Поиск..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
            />
            <div className="testPlaces">
                {tests.map((element, i) => (
                    <Link to={`/test/${element._id}`} key={element._id}>
                        <Button key={i} className="buttonTest">
                            {element.pollTitle}
                        </Button>
                    </Link>
                ))}
            </div>
            <Link to="/test/create/name">
                <Button ButtonType="button_autorization" type="submit">
                    Создать тест
                </Button>
            </Link>
            <Link to="/me/tests">
                <Button ButtonType="button_autorization" type="submit">
                    Мои тесты
                </Button>
            </Link>
        </form>
    );
}
