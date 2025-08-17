import { useState } from 'react';

function BotaoNao() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hoverCount, setHoverCount] = useState(0);

  const fugirDoMouse = (e) => {
    const x = Math.random() * window.innerWidth * 0.7;
    const y = Math.random() * window.innerHeight * 0.7;
    setPosition({ x, y });
    setHoverCount(prev => prev + 1);
  };

  const mensagens = [
    "Tem certeza?",
    "Pense bem!",
    "Eu mereço uma chance!",
    "Clique no SIM!",
    "Última chance!"
  ];

  return (
    <button
      style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      onMouseEnter={fugirDoMouse}
      className="px-8 py-4 bg-gray-200 text-gray-700 text-xl font-semibold rounded-full absolute transition-all duration-300 hover:bg-gray-300"
    >
      {hoverCount < mensagens.length ? mensagens[hoverCount] : "Ok, vou pro SIM!"}
    </button>
  );
}

export default BotaoNao;