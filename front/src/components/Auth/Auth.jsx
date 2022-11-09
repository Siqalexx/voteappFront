import React from "react";

import ButtonTest from "../Button/Button";
import Input from "../Input/Input";
import "./Auth.scss";
import { Link, useNavigate } from "react-router-dom";
import PollService from "../../services/PollService";
import { authContext } from "../AuthContext/AuthContext";
// autorization???
// authorization is correct

export default function Auth() {
	const navigate = useNavigate();
	const [user, setUser] = React.useContext(authContext);
	const [username, setUsername] = React.useState("");
	const [error, setError] = React.useState("");

	function handleSubmit(e) {
		e.preventDefault();

		if (!username) {
			return setError("Поле обязательное для ввода");
		}

		PollService.login(username)
			.then(({ accessToken }) => {
				setUser(accessToken);
				navigate("/");
			})
			.catch(error => {
				console.log(error);
			});
	}

	return (
		<form className='autorization' onSubmit={handleSubmit}>
			<h1 className='autorization__title'>Регистрация аккаунта</h1>
			<p className='autorization__subtitle'>
				Для использования сервиса требуется регистрация
			</p>
			<div className='autorization__block'>
				<p className='autorization__nickname'>Никнейм:</p>
				<Input
					className='inputButton'
					placeholder='Ваш никнейм'
					value={username}
					onChange={e => setUsername(e.target.value)}
				/>

				<ButtonTest ButtonType='button_autorization' type='submit'>
					Регистрация
				</ButtonTest>
			</div>
		</form>
	);
}
