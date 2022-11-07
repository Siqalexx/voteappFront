import ButtonTest from "../ButtonTest/ButtonTest";
import InputButton from "../InputButton/InputButton";
import Layout from "../Layout/Layout";
import "./Autorization.scss";

export default function Autorization() {
	return (
		<Layout>
			<form className='autorization'>
				<h1 className='autorization__title'>Регистрация аккаунта</h1>
				<p className='autorization__subtitle'>
					Для использования сервиса требуется регистрация
				</p>
				<div className='autorization__block'>
					<p className='autorization__nickname'>Никнейм:</p>
					<InputButton holder='Ваш никнейм'></InputButton>
					<ButtonTest ButtonType='button_autorization'>Регистрация</ButtonTest>
				</div>
			</form>
		</Layout>
	);
}
