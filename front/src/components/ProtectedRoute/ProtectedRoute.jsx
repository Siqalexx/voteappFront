import React from "react";
import { Navigate } from "react-router-dom";
import { authContext } from "../AuthContext/AuthContext";

export default function ProtectedRoute({ children }) {
    const [user] = React.useContext(authContext);

    if (!user) {
        return <Navigate to="/login" />;
    }

    return children;
}
