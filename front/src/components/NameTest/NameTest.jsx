import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Input from "../Input/Input";
import "./NameTest.scss";

export default function NameTest() {
  const [nameTest, setNameTest] = useState("");
  return (
    <form
      className="autorization create_test"
      onSubmit={() => {
        console.log(1);
      }}
    >
      <h1 className="autorization__title">Введите название теста</h1>

      <Input
        className="inputButton"
        placeholder="Введите название теста.."
        value={nameTest}
        onChange={(e) => setNameTest(e.target.value)}
      />
      <Link to={`/test/create/${nameTest}`}>
        <Button ButtonType="button_autorization" type="submit">
          Далее
        </Button>
      </Link>
    </form>
  );
}
