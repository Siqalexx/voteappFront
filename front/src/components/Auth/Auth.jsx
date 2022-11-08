import ButtonTest from "../Button/Button";
import InputButton from "../Input/Input";
import "./Auth.scss";
import { Link } from "react-router-dom";
// autorization???
// authorization is correct

export default function Auth() {
	return (
		<form className='autorization'>
			<h1 className='autorization__title'>Регистрация аккаунта</h1>
			<p className='autorization__subtitle'>
				Для использования сервиса требуется регистрация
			</p>
			<div className='autorization__block'>
				<p className='autorization__nickname'>Никнейм:</p>
				<InputButton placeholder='Ваш никнейм'></InputButton>
				<Link to='/test'>
					<ButtonTest ButtonType='button_autorization'>Регистрация</ButtonTest>
				</Link>
			</div>
		</form>
	);
}
