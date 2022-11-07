import "./InputButton.scss";
export default function InputButton({ holder }) {
	//добавить в пропс класс, для того,
	//чтобы можно было менять стили разных кнопок
	return <input className='inputButton' placeholder={holder}></input>;
}
