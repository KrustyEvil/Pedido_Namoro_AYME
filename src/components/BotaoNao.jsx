import { useEffect, useRef, useState } from 'react'

function aleatorioEntre(min, max) { return Math.random() * (max - min) + min }

export default function BotaoNao({ containerRef }) {
  const btnRef = useRef(null)
  const [pos, setPos] = useState({ top: 110, left: 40 })

  const fugir = () => {
    const container = containerRef.current
    const btn = btnRef.current
    if (!container || !btn) return

    const cRect = container.getBoundingClientRect()
    const bRect = btn.getBoundingClientRect()
    const padding = 8
    const maxLeft = cRect.width - bRect.width - padding
    const maxTop = cRect.height - bRect.height - padding

    const novoLeft = Math.max(padding, Math.min(maxLeft, aleatorioEntre(0, maxLeft)))
    const novoTop = Math.max(padding, Math.min(maxTop, aleatorioEntre(0, maxTop)))
    setPos({ top: novoTop, left: novoLeft })
  }

  useEffect(() => { fugir() }, [])

  return (
    <button
      ref={btnRef}
      onMouseEnter={fugir}
      onTouchStart={fugir}
      style={{ position: 'absolute', top: pos.top, left: pos.left }}
      className="px-4 py-2 rounded-2xl bg-gray-200 text-gray-700 shadow hover:bg-gray-300 transition select-none"
    >
      Não
    </button>
  )
}
