import { useState, useEffect, useRef } from 'react';
import BotaoNao from './components/BotaoNao';
import BotaoSim from './components/BotaoSim';
import Galeria from './components/Galeria';
import confetti from 'canvas-confetti';
import './App.css';

function App() {
  const [aceitou, setAceitou] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);
  const audioRef = useRef(null);

  // Contorna bloqueio de autoplay
  useEffect(() => {
    const handleInteraction = () => {
      if (!userInteracted && audioRef.current) {
        audioRef.current.play()
          .then(() => {
            setUserInteracted(true);
            document.removeEventListener('click', handleInteraction);
          })
          .catch(e => console.log("Autoplay bloqueado:", e));
      }
    };

    document.addEventListener('click', handleInteraction);
    return () => document.removeEventListener('click', handleInteraction);
  }, [userInteracted]);

  const handleSimClick = () => {
    // Ativa a música se ainda não tiver iniciado
    if (!userInteracted) {
      audioRef.current.play()
        .then(() => setUserInteracted(true))
        .catch(e => console.log("Erro ao tocar:", e));
    }

    // Efeitos visuais
    confetti({
      particleCount: 300,
      spread: 100,
      origin: { y: 0.6 }
    });
    setAceitou(true);
  };

  return (
    <div className="app min-h-screen bg-gradient-to-b from-pink-50 to-rose-100 flex flex-col items-center justify-center p-4">
      {/* Player de áudio com caminho dinâmico */}
      <audio 
        ref={audioRef}
        loop
        src={`${import.meta.env.BASE_URL || ''}musica.mp3`} // Nome CORRETO do seu arquivo
        className="hidden"
        muted={!userInteracted} // Importante para contornar bloqueios
      />
      
      {!aceitou ? (
        <>
          <h1 className="text-4xl md:text-5xl font-bold text-rose-600 mb-8 text-center animate-pulse">
            Quer namorar comigo? 💘
          </h1>
          <div className="flex gap-4 mb-8">
            <BotaoSim onClick={handleSimClick} />
            <BotaoNao />
          </div>
          <p className="text-gray-600 text-sm">* Passe o mouse sobre os corações</p>
        </>
      ) : (
        <div className="text-center animate-bounce">
          <h2 className="text-5xl font-bold text-rose-600 mb-6">Ebaaa! Você disse SIM! 🎉</h2>
          <p className="text-xl mb-8">Você acabou de fazer meu dia perfeito! 💖</p>
          <Galeria />
        </div>
      )}

      {/* Fallback visível apenas se necessário */}
      {!userInteracted && (
        <button 
          onClick={() => {
            audioRef.current.play()
              .then(() => setUserInteracted(true))
              .catch(e => console.log("Erro ao ativar:", e));
          }}
          className="fixed bottom-4 right-4 bg-rose-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-rose-700 transition-colors animate-pulse"
        >
          🔈 Ativar música
        </button>
      )}
    </div>
  );
}

export default App;