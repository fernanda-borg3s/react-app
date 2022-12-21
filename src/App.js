import logo from './ball.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Bem-vindo ao React!!!</h1>
        <h2>Meu primeiro app com React</h2>
        <p>Olá, eu sou a Fernanda</p>
        <a className="App-link" href="https://fernandaborges-portifolio.netlify.app/" target="_blank">Confira meu portifólio</a>
      </header>
    </div>
  );
}

export default App;
