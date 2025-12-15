import { useState, useEffect } from "react";

export default function App() {
    const [count, setCount] = useState(0);

    // Executa sempre que o componente renderiza
    useEffect(() => {
        document.title = `Contador: ${count}`;
    }, [count]); // dependência

    return (
        <div>
            <h1>Contador: {count}</h1>
            <button onClick={() => setCount(count + 1)}>
                Incrementar
            </button>
        </div>
    );
}
