import "./Input.scss";
// PROPS REFACTOR
export default function Input(props) {
	// TODO:
	// добавить в пропс класс, для того,
	// чтобы можно было менять стили разных кнопок
	return <input {...props}></input>;
}
