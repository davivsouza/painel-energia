"use client"

import { useState, useEffect } from "react"

export default function TempoEstelar() {
  const [tempo, setTempo] = useState(new Date())
  const [pausado, setPausado] = useState(false)

  useEffect(() => {
    let intervalo: NodeJS.Timeout | null = null

    if (!pausado) {
      intervalo = setInterval(() => {
        setTempo(new Date())
      }, 1000)
    }

    // Função de limpeza para evitar memory leaks
    return () => {
      if (intervalo) clearInterval(intervalo)
    }
  }, [pausado])

  const togglePausar = () => {
    setPausado((prev) => !prev)
  }

  // Formata o tempo estelar de forma futurística
  const formatarTempoEstelar = () => {
    const horas = tempo.getHours().toString().padStart(2, "0")
    const minutos = tempo.getMinutes().toString().padStart(2, "0")
    const segundos = tempo.getSeconds().toString().padStart(2, "0")

    return `${horas}:${minutos}:${segundos}`
  }

  // Calcula uma "data estelar" fictícia baseada na data atual
  const calcularDataEstelar = () => {
    const ano = tempo.getFullYear()
    const dia = tempo.getDate()
    const mes = tempo.getMonth() + 1

    return `${ano}.${mes}${dia}`
  }

  return (
    <div className="border rounded-lg p-4 bg-slate-800 text-white">
      <h2 className="text-xl font-bold mb-4">Tempo Estelar</h2>
      <div className="text-center mb-4">
        <div className="text-sm text-gray-400">Data Estelar</div>
        <div className="text-2xl font-mono">{calcularDataEstelar()}</div>
      </div>
      <div className="text-center mb-4">
        <div className="text-sm text-gray-400">Hora da Nave</div>
        <div className={`text-4xl font-mono ${pausado ? "text-red-500" : "text-blue-400"}`}>
          {formatarTempoEstelar()}
        </div>
      </div>
      <button
        onClick={togglePausar}
        className={`w-full py-2 rounded ${
          pausado ? "bg-green-600 hover:bg-green-700" : "bg-red-600 hover:bg-red-700"
        } text-white`}
      >
        {pausado ? "Retomar Relógio" : "Pausar Relógio"}
      </button>
    </div>
  )
}

