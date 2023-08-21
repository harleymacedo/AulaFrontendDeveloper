//Importar o css e os componentes agregados
import './App.css';
import Busca from './components/Busca';

const App = () => {

  return (
    <div className="App">
      <Busca tema="temaDark" />
      <p>Teste</p>
    </div>
    
  );
}

export default App;
