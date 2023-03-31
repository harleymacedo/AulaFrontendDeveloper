import './App.css';

function App() {

  const buscarProfessores = async () => {
    const url = 'https://node-express-api-rest-mock.vercel.app/professor/todos';
    const result = await fetch(url);
    const dados = await result.json();
    let divResultado = document.getElementById('divResultado');
    // dados.forEach( (dadoAtual) => {
    //     divResultado.innerHTML += `<div class="divCard">${dadoAtual.nome}</div>`;
    // });
  }

  return (
    <div className="App">
      <button onClick={buscarProfessores}>Buscar professores</button>
    </div>
  );
}

export default App;
