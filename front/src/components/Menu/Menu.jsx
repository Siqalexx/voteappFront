import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import PollService from "../../services/PollService";
import Button from "../Button/Button";
import Input from "../Input/Input";
import { authContext } from "../AuthContext/AuthContext";
import "./Menu.scss";
import Loading from "../Loading/Loading";

export default function Menu() {
    const [user] = useContext(authContext);
    const [searchInput, setSearchInput] = useState("");
    const [offset, setOffset] = useState(0);
    const [tests, setTests] = useState([]);
    const [searchTest, setSearchTest] = useState([]);
    const [isSearching, setSearching] = useState(false);

    useEffect(() => {
        fetchPolls();
    }, []);

    useEffect(() => {
        const timeout = setTimeout(
            () => searchInput && search(searchInput),
            500
        );
        return () => clearTimeout(timeout);
    }, [searchInput]);

    function fetchPolls(offset = 0, limit = 5) {
        PollService.getPolls({ limit, offset: offset + 1 })
            .then((polls) => {
                setTests((t) => [...t, ...polls]);
                setOffset((prev) => prev + polls.length);
            })
            .catch((error) => console.log(error));
    }

    function search(query) {
        setSearching(true);
        PollService.searchPoll(query)
            .then((result) => {
                setSearchTest(result);
                setSearching(false);
            })
            .catch((error) => {
                console.log(error);
                setSearching(false);
            });
    }

    const elements = searchInput ? searchTest : tests;

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
                {elements.map((element, i) => (
                    <Link to={`/test/${element._id}`} key={element._id}>
                        <Button key={i} className="buttonTest">
                            {element.pollTitle}
                        </Button>
                    </Link>
                ))}
                {searchInput && !isSearching && searchTest.length === 0 && (
                    <div>Ничего не найдено</div>
                )}
                {!searchInput && (
                    <button
                        className="menu__more"
                        onClick={() => fetchPolls(offset, 5)}
                        type="button"
                    >
                        Показать еще
                    </button>
                )}
            </div>
            <Link to="/test/create">
                <Button ButtonType="button_autorization" type="submit">
                    Создать тест
                </Button>
            </Link>
        </form>
    );
}
