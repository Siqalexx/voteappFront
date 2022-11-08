import "./App.css";
import Auth from "./Auth/Auth";
import Layout from "./Layout/Layout";
import Question from "./Question/Question";

import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<Routes>
			<Route
				path='/'
				element={
					<Layout>
						<Auth />
					</Layout>
				}
			/>
			<Route
				path='/test'
				element={
					<Layout>
						<Question
							questionTitle='Реакт это?'
							options={["Библиотека", "Фреймворк", "Фреймвор0к"]}
						/>
					</Layout>
				}
			/>
		</Routes>
	);
}

export default App;
