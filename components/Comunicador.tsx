"use client"

import type React from "react"

import { useState } from "react"

export default function Comunicador() {
  const [mensagem, setMensagem] = useState("")
  const [historico, setHistorico] = useState<{ texto: string; origem: "nave" | "terra"; timestamp: string }[]>([])

  const enviarMensagem = () => {
    if (mensagem.trim() === "") return

    const novaMensagem = {
      texto: mensagem,
      origem: "nave" as const,
      timestamp: new Date().toLocaleTimeString(),
    }

    setHistorico((prev) => [...prev, novaMensagem])
    setMensagem("")

    // Resposta automática da Terra após 2 segundos
    setTimeout(() => {
      const respostaTerra = {
        texto: `Recebido: "${mensagem}". Continuem a missão.`,
        origem: "terra" as const,
        timestamp: new Date().toLocaleTimeString(),
      }
      setHistorico((prev) => [...prev, respostaTerra])
    }, 2000)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      enviarMensagem()
    }
  }

  return (
    <div className="border rounded-lg p-4 bg-slate-800 text-white">
      <h2 className="text-xl font-bold mb-4">Sistema de Comunicação</h2>
      <div className="flex mb-4">
        <input
          type="text"
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Digite sua mensagem..."
          className="flex-1 px-3 py-2 bg-gray-700 text-white rounded-l focus:outline-none"
        />
        <button onClick={enviarMensagem} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r">
          Enviar
        </button>
      </div>
      <div className="bg-gray-900 rounded p-2 h-64 overflow-y-auto">
        <h3 className="text-sm text-gray-400 mb-2">Histórico de Comunicações:</h3>
        {historico.length === 0 ? (
          <p className="text-gray-500 text-center italic">Nenhuma comunicação registrada</p>
        ) : (
          <div className="space-y-2">
            {historico.map((msg, index) => (
              <div
                key={index}
                className={`p-2 rounded ${msg.origem === "nave" ? "bg-blue-900 ml-4" : "bg-green-900 mr-4"}`}
              >
                <div className="flex justify-between text-xs text-gray-400 mb-1">
                  <span>{msg.origem === "nave" ? "Nave" : "Terra"}</span>
                  <span>{msg.timestamp}</span>
                </div>
                <p>{msg.texto}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

