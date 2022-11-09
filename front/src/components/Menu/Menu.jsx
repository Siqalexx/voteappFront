import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Input from "../Input/Input";
import "./Menu.scss";

export default function Menu() {
	//сервер возвращает кол-во тестов в {tests}
	let tests = [
		{ testName: "Test nubmer one" },
		{ testName: "second" },
		{ testName: "third" },
	];
	//state для поисковой строки
	const [searchInput, setSearchInput] = useState("");
	return (
		<form className='menu'>
			<h1 className='menu__title'>Главная страница</h1>
			<Input
				className='inputButton'
				placeholder='Поиск...'
				value={searchInput}
				onChange={e => setSearchInput(e.target.value)}
			/>
			<div className='testPlaces'>
				{tests.map((element, i) => (
					<Button key={i} className='buttonTest'>
						{element.testName}
					</Button>
				))}
			</div>
			<Link to='/Name-test'>
				<Button ButtonType='button_autorization' type='submit'>
					Создать новый тест
				</Button>
			</Link>
		</form>
	);
}
