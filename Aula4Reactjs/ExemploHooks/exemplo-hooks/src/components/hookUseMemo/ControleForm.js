import { useMemo, useState } from 'react'

const ControleForm = () => {

    const [password, setPassword] = useState('');
    const [showErrors, setShowErrors] = useState(false);

    const checkPassword = event => {
        const { value } = event.target;
        setShowErrors(value.length < 8);
        setPassword(value);
    };

    const rules = [
        '8 caracteres',
        'letra minúscula',
        'letra maiúscula',
    ];

    // Lista de erros
    const Errors = ({ active }) => {
        return active && (
            <ul>
                {rules.map((value, index) => (
                    <li key={index}>{value} {console.log('Verificou novamente')} </li>
                    
                ))}
            </ul>
        );
    }

    const memoizedErrors = useMemo(() => <Errors active={showErrors} />, [showErrors]);

    return (
        <form>
            <h1>Login</h1>
            <input placeholder="Email" />
            <input type="password" placeholder="Password" value={password} onChange={checkPassword} />
            {memoizedErrors}
        </form>
    );
};

export default ControleForm