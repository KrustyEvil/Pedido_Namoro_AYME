import { useState, useRef } from 'react';

const BotaoNao = () => {
  const [hoverCount, setHoverCount] = useState(0);
  const buttonRef = useRef(null);

  const handleInteraction = () => {
    setHoverCount(prev => prev + 1);
    const button = buttonRef.current;
    
    if (button) {
      const maxX = window.innerWidth - button.offsetWidth - 20;
      const maxY = window.innerHeight - button.offsetHeight - 20;
      
      const randomX = Math.max(10, Math.random() * maxX);
      const randomY = Math.max(10, Math.random() * maxY);
      
      button.style.position = 'absolute';
      button.style.left = `${randomX}px`;
      button.style.top = `${randomY}px`;
      button.style.transition = 'left 0.3s ease-out, top 0.3s ease-out';
    }
  };

  return (
    <button
      ref={buttonRef}
      onMouseEnter={handleInteraction}
      onTouchStart={handleInteraction}
      className={`button-no ${hoverCount > 2 ? 'animate-pulse' : ''}`}
    >
      {hoverCount > 3 ? 'Talvez...' : hoverCount > 1 ? 'Quer mesmo?' : 'Não'}
    </button>
  );
};

export default BotaoNao;