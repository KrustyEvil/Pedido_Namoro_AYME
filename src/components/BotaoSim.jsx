const BotaoSim = ({ onClick }) => (
  <button
    onClick={onClick}
    className="px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white text-2xl font-bold rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105 active:scale-95"
  >
    💖 SIM! 💖
  </button>
);

export default BotaoSim;