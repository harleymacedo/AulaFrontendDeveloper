import './App.css';
import Conversor from './components/Conversor';

const App = () => {
	return (
		<div className="App">
			<Conversor moedaOrigem='USD' moedaDestino='BRL' cor='lightblue' />
			<Conversor moedaOrigem='CAD' moedaDestino='BRL' cor='yellow' />
			<Conversor moedaOrigem='EUR' moedaDestino='BRL' cor='lightgreen' />
		</div>
	);
}

export default App;
