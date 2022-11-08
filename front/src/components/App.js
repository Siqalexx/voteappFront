import "./App.css";
import Layout from "./Layout/Layout";
import Question from "./Question/Question";

function App() {
    return (
        <Layout>
            <Question
                questionTitle="Реакт это?"
                options={["Библиотека", "Фреймворк", "Фреймворк"]}
            />
        </Layout>
    );
}

export default App;
