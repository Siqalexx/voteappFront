import "./App.css";
import Autorization from "./Autorization/Autorization";
import Question from "./Question/Question";

function App() {
	return (
		<>
			<Question
				questionTitle={"React - Это?"}
				options={["dsa", "qwe", "iop"]}
			></Question>
			<Autorization></Autorization>
		</>
	);
}

export default App;
