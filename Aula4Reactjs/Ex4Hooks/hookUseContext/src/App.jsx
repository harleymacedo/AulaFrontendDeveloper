// App.jsx
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function App() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div
            style={{
                background: theme === "light" ? "#fff" : "#222",
                color: theme === "light" ? "#000" : "#fff",
                padding: "20px",
            }}
        >
            <h1>Tema atual: {theme}</h1>
            <button onClick={toggleTheme}>
                Alternar Tema
            </button>
        </div>
    );
}
