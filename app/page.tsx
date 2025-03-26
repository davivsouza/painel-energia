import Energia from "@/components/Energia"
import Comunicador from "@/components/Comunicador"
import TempoEstelar from "@/components/TempoEstelar"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 p-4">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-white mb-2">Painel de Controle da Nave</h1>
        <p className="text-gray-400">Cabine do Comandante - Sistemas Vitais</p>
      </header>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <Energia />
        <Comunicador />
        <TempoEstelar />
      </div>

      <footer className="mt-8 text-center text-gray-500 text-sm">
        <p>Sistema de Controle v1.0 - Missão Espacial 2025</p>
      </footer>
    </div>
  )
}

