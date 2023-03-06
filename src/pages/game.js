import { useState } from 'react'
import { Settings } from '../components/Settings'
import { Versus } from '../components/Versus'
import { Gear } from '../icons/Gear'
import { Play } from '../icons/Play'

export default function Home() {
  const [settings, setSettings] = useState(false)

  return (
    <main className="relative flex items-center justify-between w-screen h-screen">
      <nav className="absolute top-0 flex items-center justify-between w-full pt-6 px-14">
        <a href="#" className="text-white font-semibold text-[38px]">
          Score: 10
        </a>
        <div className="relative">
          <button className="text-white" onClick={() => setSettings(!settings)}>
            <Gear />
          </button>
          {settings && <Settings />}
        </div>
      </nav>
      <Versus />
      <div className="flex flex-col items-center justify-center w-2/4 h-screen gap-5 text-white border-r-2 border-[#444444]">
        <img
          className="w-2/4 bg-white h-1/3 rounded-3xl"
          src="https://img.freepik.com/foto-gratis/resumen-superficie-texturas-muro-piedra-hormigon-blanco_74190-8189.jpg?w=360"
        />
        <h2 className="text-5xl font-bold">iPhone 13 Pro Max</h2>
        <p className="font-extrabold text-8xl text-[#FFB800]">$2000</p>
        <small className="text-[#CCCCCC] text-2xl font-semibold">
          Average price
        </small>
      </div>

      <div className="flex flex-col items-center justify-center w-2/4 h-screen gap-5 text-white border-l-2 border-[#444444]">
        <img
          className="w-2/4 bg-white h-1/3 rounded-3xl"
          src="https://img.freepik.com/foto-gratis/resumen-superficie-texturas-muro-piedra-hormigon-blanco_74190-8189.jpg?w=360"
        />
        <h2 className="text-5xl font-bold">Amazon Alexa Echo</h2>
        <div className="flex gap-5">
          <button className="flex items-center justify-center gap-2 w-[265px] h-[100px] bg-white rounded-full text-[#D71C1C] text-[32px] font-semibold">
            Expensive <Play className="-rotate-90 stroke-[3]" size="30" />
          </button>
          <button className="flex items-center justify-center gap-2 w-[265px] h-[100px] bg-white rounded-full text-[#29BB1E] text-[32px] font-semibold">
            Cheap <Play className="rotate-90 stroke-[3]" size="30" />
          </button>
        </div>
        <small className="text-[#CCCCCC] text-2xl font-semibold">
          Compared to the iPhone
        </small>
      </div>
    </main>
  )
}
