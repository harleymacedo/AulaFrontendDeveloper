import { useState, useMemo } from "react";


export default function App() {
    const [count, setCount] = useState(0);
    const [outroValor, setOutroValor] = useState(0);

    function calcularDobro(numero) {
        console.log("Calculando...");
        // simula um cálculo pesado
        for (let i = 0; i < 500000; i++) { }
        return numero * 2;
    }

    const dobro = useMemo(() => {
        return calcularDobro(count);
    }, [count]); // só recalcula quando count mudar

    //const dobro = calcularDobro(count);

    return (
        <div>
            <h1>Dobro: {dobro}</h1>

            <button onClick={() => setCount(count + 1)}>
                Incrementar count
            </button>

            <button onClick={() => setOutroValor(outroValor + 1)}>
                Alterar outro valor
            </button>
        </div>
    );
}

