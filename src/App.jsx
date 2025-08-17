import { useState, useEffect, useRef } from 'react';
import BotaoNao from './components/BotaoNao';
import BotaoSim from './components/BotaoSim';
import Galeria from './components/Galeria';
import confetti from 'canvas-confetti';
import './App.css';

function App() {
  const [aceitou, setAceitou] = useState(false);
  const [audioPlaying, setAudioPlaying] = useState(false);
  const audioRef = useRef(null);

  // Efeito para tentar reproduzir a música automaticamente
  useEffect(() => {
    const playAudio = async () => {
      try {
        await audioRef.current?.play();
        setAudioPlaying(true);
      } catch (err) {
        console.log("Reprodução automática bloqueada:", err);
      }
    };
    playAudio();
  }, []);

  const handleSimClick = () => {
    confetti({
      particleCount: 300,
      spread: 100,
      origin: { y: 0.6 }
    });
    setAceitou(true);
    
    // Toca a música novamente ao aceitar (caso tenha sido bloqueada)
    if (!audioPlaying) {
      audioRef.current?.play();
      setAudioPlaying(true);
    }
  };

  return (
    <div className="app min-h-screen bg-gradient-to-b from-pink-50 to-rose-100 flex flex-col items-center justify-center p-4">
      {/* Player de áudio oculto */}
      <audio 
        ref={audioRef} 
        loop
        src="/musica.mp3"  // Use o nome exato do seu arquivo
        className="hidden"
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

      {/* Botão de controle de áudio (só aparece se a música não tocar sozinha) */}
      {!audioPlaying && (
        <button 
          onClick={() => {
            audioRef.current?.play();
            setAudioPlaying(true);
          }}
          className="fixed bottom-4 right-4 bg-rose-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-rose-700 transition-colors"
        >
          🔈 Tocar música
        </button>
      )}
    </div>
  );
}

export default App;