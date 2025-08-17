import { useState, useRef } from 'react';
import BotaoNao from './components/BotaoNao.jsx';
import BotaoSim from './components/BotaoSim.jsx';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const containerRef = useRef(null);

  const handleSimClick = () => {
    alert('Você clicou em Sim 💘!');
  };

  return (
    <div className="app" ref={containerRef}>
      <h1>Meu Projeto</h1>
      
      <div className="card">
        <div className="buttons-container">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          
          <BotaoSim onClick={handleSimClick} />
          <BotaoNao containerRef={containerRef} />
        </div>
      </div>
    </div>
  );
}



export default App;
