import "./CreatePoll.scss";
import { useState } from "react";
import ButtonTest from "../Button/Button";
import Input from "../Input/Input";
import { useParams } from "react-router-dom";
import PollService from "../../services/PollService";
// import { Link } from "react-router-dom";

// name of the poll
export default function CreatePoll() {
  const { name } = useParams();

  const [questions, setQuestions] = useState([]);
  const [variants, setVariants] = useState(["", ""]);
  const [questionName, setQuestionName] = useState("");
  const [error, setError] = useState("");

  function setInput(evt, index) {
    setVariants((prev) => {
      let arr = [...prev];
      arr[index] = evt.target.value;
      return arr;
    });
  }

  function resetQuestions() {
    setVariants(["", ""]);
    setQuestionName("");
    setError("");
  }

  function addQuestion({ options, title }) {
    if (options.length < 2) {
      return null;
    }

    if (!title) {
      return setError("Введите название вопроса");
    }

    if (variants[0].length === 0 || variants[1].length === 0) {
      return setError("Введите хотя бы два варианта ответа");
    }

    resetQuestions();

    setQuestions((questions) => {
      return [...questions, { options, correct: options[0], title }];
    });
  }

  function handleClick() {
    addQuestion({ options: variants, title: questionName });
  }

  function handleSubmit(e) {
    e.preventDefault();

    PollService.createPoll({ pollTitle: name, questions })
      .then(() => console.log("УСПЕШНО СОЗДАН!!!!"))
      .catch(() => {
        setError("Произошла ошибка при создании теста");
      });
  }

  return (
    <form onSubmit={handleSubmit} className="poll">
      <h1 className="poll__title">Создать вопрос №{questions.length + 1}</h1>
      <Input
        value={questionName}
        onChange={(evt) => {
          setQuestionName(evt.target.value);
        }}
        className="inputButton"
        placeholder="Введите название вопроса..."
      />
      <div className="poll__block">
        {variants.map((input, index) => {
          let placeholder = "Введите вариант ответа...";
          if (index === 0) {
            placeholder = "Введите верный ответ здесь";
          }
          return (
            <Input
              key={index}
              value={input}
              onChange={(evt) => setInput(evt, index)}
              type="text"
              className="inputButton create-variant"
              placeholder={placeholder}
            />
          );
        })}

        {variants.length < 5 && (
          <ButtonTest
            onClick={() => {
              setVariants((prev) => {
                return [...prev, ""];
              });
            }}
            ButtonType="button_create-variant"
            type="button"
          >
            Добавить вариант ответа
          </ButtonTest>
        )}
      </div>
      {error && <div className="error">{error}</div>}
      <ButtonTest
        ButtonType="button_autorization"
        type="button"
        onClick={handleClick}
      >
        Добавить вопрос
      </ButtonTest>
      {questions.length > 0 && (
        <ButtonTest ButtonType="button_autorization create-test" type="submit">
          Завершить создание теста
        </ButtonTest>
      )}
    </form>
  );
}

/* <Input
					value={[][0]}
					type='text'
					className='inputButton create-variant'
					placeholder='Введите вариант ответа...'
				/>
				<Input
					value={[][1]}
					type='text'
					className='inputButton create-variant'
					placeholder='Введите вариант ответа...'
				/> */
