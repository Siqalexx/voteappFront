import React from "react";

import "./App.css";
import Auth from "./Auth/Auth";
import Layout from "./Layout/Layout";
import Question from "./Question/Question";
import { Routes, Route } from "react-router-dom";
import AuthContext from "./AuthContext/AuthContext";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";

function App() {
    return (
        <Layout>
            <AuthContext>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <ProtectedRoute>
                                <h1>Protected</h1>
                            </ProtectedRoute>
                        }
                    />
                    <Route path="/login" element={<Auth />} />
                    <Route
                        path="/test"
                        element={
                            <Question
                                questionTitle="Реакт это?"
                                options={[
                                    "Библиотека",
                                    "Фреймворк",
                                    "Фреймвор0к",
                                ]}
                            />
                        }
                    />
                </Routes>
            </AuthContext>
        </Layout>
    );
}

export default App;
