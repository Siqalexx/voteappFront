import React from "react";

import "./App.css";
import Auth from "./Auth/Auth";
import Layout from "./Layout/Layout";
import Question from "./Question/Question";
import { Routes, Route } from "react-router-dom";
import AuthContext from "./AuthContext/AuthContext";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
import CreatePoll from "./CreatePoll/CreatePoll";
import Menu from "./Menu/Menu";
import NameTest from "./NameTest/NameTest";
import TestCard from "./TestCard/TestCard";
import Test from "./Test/Test";

function App() {
    return (
        <Layout>
            <AuthContext>
                <Routes>
                    <Route path="/login" element={<Auth />} />
                    <Route path="/" element={<Menu />} />
                    <Route path="test">
                        <Route path="create" element={<NameTest />} />
                        <Route path="create/:name" element={<CreatePoll />} />
                        <Route path=":id" element={<TestCard />} />
                        <Route path=":id/run" element={<Test />} />
                    </Route>
                </Routes>
            </AuthContext>
        </Layout>
    );
}

export default App;
