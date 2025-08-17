import { motion } from 'framer-motion'

export default function BotaoSim({ onClick }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="px-7 py-3 rounded-2xl bg-rose-600 text-white font-semibold shadow-lg hover:bg-rose-700"
    >
      Sim 💘
    </motion.button>
  )
}
