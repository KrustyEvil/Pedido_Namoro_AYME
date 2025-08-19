import { useState, useRef } from 'react';
import BotaoNao from './components/BotaoNao';
import BotaoSim from './components/BotaoSim';
import Galeria from './components/Galeria';
import confetti from 'canvas-confetti';
import './App.css';

function App() {
  const [aceitou, setAceitou] = useState(false);
  const audioRef = useRef(null);

  const handleSimClick = () => {
    // Toca a música apenas quando clicar no Sim
    if (audioRef.current) {
      audioRef.current.play().catch(e => console.log("Erro ao tocar música:", e));
    }

    // Efeitos de confete
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ff1493', '#ff69b4', '#db2777']
    });
    
    setAceitou(true);
  };

  return (
    <div className="app-container">
      {/* Elemento de áudio oculto */}
      <audio 
        ref={audioRef}
        loop
        src={`${import.meta.env.BASE_URL || ''}musica.mp3`}
        className="hidden"
      />
      
      {!aceitou ? (
        <>
          <h1 className="main-title animate-fade-in">
            Quer namorar comigo? 💘
          </h1>
          
          <div className="button-group">
            <BotaoSim onClick={handleSimClick} />
            <BotaoNao />
          </div>
          
          <p className="text-gray-600 text-sm">* Não aceitar é crime!!!</p>
        </>
      ) : (
        <div className="acceptance-message animate-fade-in">
          <h2 className="acceptance-title">Ebaaa! Você disse SIM! 🎉</h2>
          <p className="acceptance-text">Você acabou de fazer meu dia perfeito! 💖</p>
          <Galeria />
        </div>
      )}
    </div>
  );
}

export default App;