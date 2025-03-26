"use client"

import { useState } from "react"

export default function Energia() {
  const [energia, setEnergia] = useState(100)

  const reduzirEnergia = () => {
    setEnergia((prev) => Math.max(0, prev - 10))
  }

  const recarregar = () => {
    setEnergia(100)
  }

  // Determina a cor baseada no nível de energia
  const getCorEnergia = () => {
    if (energia < 30) return "text-red-500"
    if (energia < 60) return "text-yellow-500"
    return "text-green-500"
  }

  return (
    <div className="border rounded-lg p-4 bg-slate-800 text-white">
      <h2 className="text-xl font-bold mb-4">Medidor de Energia</h2>
      <div className="mb-4">
        <div className="w-full bg-gray-700 rounded-full h-4 mb-2">
          <div
            className={`h-4 rounded-full ${energia < 30 ? "bg-red-500" : "bg-green-500"}`}
            style={{ width: `${energia}%` }}
          ></div>
        </div>
        <p className={`text-center font-bold ${getCorEnergia()}`}>{energia}%</p>
      </div>
      <div className="flex justify-between">
        <button
          onClick={reduzirEnergia}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
          disabled={energia === 0}
        >
          Consumir 10%
        </button>
        <button
          onClick={recarregar}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
          disabled={energia === 100}
        >
          Recarregar
        </button>
      </div>
    </div>
  )
}

