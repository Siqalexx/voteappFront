import React from "react";

export const authContext = React.createContext(null);

const { Provider: AuthProvider } = authContext;

export default function AuthContext({ children }) {
    const [user, setUser] = React.useState();

    React.useEffect(() => {
        const savedUser = localStorage.getItem("token");
        if (savedUser) {
            setUser(savedUser);
        }
    }, []);

    React.useEffect(() => {
        if (user) {
            window.localStorage.setItem("token", user);
        }
    }, [user]);

    return <AuthProvider value={[user, setUser]}>{children}</AuthProvider>;
}
