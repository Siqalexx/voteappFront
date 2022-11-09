import "./CreatePoll.scss";
import { React, useState } from "react";
import ButtonTest from "../Button/Button";
import Input from "../Input/Input";
// import { Link } from "react-router-dom";
export default function CreatePoll(props) {
	const [variants, setVariants] = useState(["", ""]);
	const [questionName, setQuestionName] = useState("");
	function setInput(evt, index) {
		setVariants(prev => {
			let arr = [...prev];
			arr[index] = evt.target.value;
			return arr;
		});
	}
	return (
		<form
			onSubmit={e => {
				e.preventDefault();
				console.log(variants + " " + questionName);
			}}
			className='poll'
		>
			<h1 className='poll__title'>Создать вопрос</h1>
			<Input
				value={questionName}
				onChange={evt => {
					setQuestionName(evt.target.value);
				}}
				className='inputButton'
				placeholder='Введите название вопроса...'
			/>
			<div className='poll__block'>
				{variants.map((input, index) => {
					return (
						<Input
							key={index}
							value={input}
							onChange={evt => setInput(evt, index)}
							type='text'
							className='inputButton create-variant'
							placeholder='Введите вариант ответа...'
						/>
					);
				})}

				{variants.length < 5 && (
					<ButtonTest
						onClick={() => {
							setVariants(prev => {
								return [...prev, ""];
							});
						}}
						ButtonType='button_create-variant'
						type='button'
					>
						Добавить вариант
					</ButtonTest>
				)}
			</div>
			<ButtonTest ButtonType='button_autorization' type='button'>
				Добавить вопрос
			</ButtonTest>
			<ButtonTest ButtonType='button_autorization create-test' type='submit'>
				Создать тест
			</ButtonTest>
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
