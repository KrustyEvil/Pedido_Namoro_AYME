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

  // Solução melhorada para autoplay
  useEffect(() => {
    // Cria um handler de interação do usuário
    const handleUserInteraction = () => {
      if (!audioPlaying && audioRef.current) {
        audioRef.current.play()
          .then(() => {
            setAudioPlaying(true);
            document.removeEventListener('click', handleUserInteraction);
          })
          .catch(e => console.log("Erro ao tocar música:", e));
      }
    };

    // Adiciona listener para o primeiro clique em qualquer lugar da página
    document.addEventListener('click', handleUserInteraction);
    
    return () => {
      document.removeEventListener('click', handleUserInteraction);
    };
  }, [audioPlaying]);

  const handleSimClick = () => {
    // Efeitos visuais
    confetti({
      particleCount: 300,
      spread: 100,
      origin: { y: 0.6 }
    });
    
    setAceitou(true);
    
    // Força a reprodução ao clicar em SIM
    if (audioRef.current && !audioPlaying) {
      audioRef.current.play()
        .then(() => setAudioPlaying(true))
        .catch(e => console.log("Erro ao tocar:", e));
    }
  };

  return (
    <div className="app min-h-screen bg-gradient-to-b from-pink-50 to-rose-100 flex flex-col items-center justify-center p-4">
      {/* Player de áudio - corrigido o caminho */}
      <audio 
        ref={audioRef}
        loop
        src="musica.mp3"  // Atualizado para o nome correto do seu arquivo
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

      {/* Botão de fallback melhorado */}
      {!audioPlaying && (
        <button 
          onClick={() => {
            audioRef.current?.play()
              .then(() => setAudioPlaying(true))
              .catch(e => console.log("Erro ao tocar:", e));
          }}
          className="fixed bottom-4 right-4 bg-rose-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-rose-700 transition-colors animate-pulse"
        >
          🔈 Clique para ativar a música
        </button>
      )}
    </div>
  );
}

export default App;