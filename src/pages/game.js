import { useState } from 'react'
import { Settings } from '../components/Settings'
import { Versus } from '../components/Versus'
import { Gear } from '../icons/Gear'
import { Play } from '../icons/Play'

export default function Home() {
  const [settings, setSettings] = useState(false)

  return (
    <main className="relative flex items-center justify-between w-full overflow-x-hidden h-screen bg-[#000000]">
      <div className="absolute w-screen h-screen bg-[#000000] opacity-70 z-10" />
      <nav className="absolute top-0 z-20 flex items-center justify-between w-full pt-6 px-14">
        <a href="#" className="text-white font-semibold text-xl">
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
      <div className="flex flex-col items-center justify-center w-2/4 h-screen gap-5 text-white border-r-2 border-[#444444] bg-white">
        <img
          className="absolute h-2/4 rounded-3xl"
          src="http://www.catalogo.claro.com.ec/uploads/imgs/productos/iphone-13-256gb/azul/zoom/01-iphone-13-256gb-azul-front.png"
        />
        <div className="z-10 flex flex-col gap-3 justify-center items-center">
          <h2 className="text-3xl font-bold">iPhone 13 Pro Max</h2>
          <p className="font-extrabold text-6xl text-[#FFB800]">$2,000</p>
          <small className="text-gray-400 text-lg font-semibold">
            Average price
          </small>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-2/4 h-screen gap-5 text-white border-l-2 border-[#444444] bg-white">
        <img
          className="absolute h-2/4 rounded-3xl"
          src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1665446481/Croma%20Assets/Entertainment/Speakers%20and%20Media%20Players/Images/214741_0_ayqzgw.png/mxw_640,f_auto"
        />
        <div className="z-10 flex flex-col gap-3 justify-center items-center">
          <h2 className="text-3xl font-bold">Amazon Alexa Echo</h2>
          <small className=" text-gray-400 text-lg font-semibold">is</small>
          <div className="flex flex-col gap-6">
            <button className="py-5 px-11 flex items-center justify-center gap-2 bg-white rounded-full text-[#D71C1C] text-xl font-semibold hover:scale-[1.06] transition-all hover:text-white hover:bg-[#D71C1C]">
              <Play className="-rotate-90 stroke-[2]" />
              Expensive
            </button>
            <button className="py-5 px-11 flex items-center justify-center gap-2 bg-white rounded-full text-[#29BB1E] text-xl font-semibold hover:scale-[1.06] transition-all hover:text-white hover:bg-[#29BB1E]">
              <Play className="rotate-90 stroke-[2]" />
              Cheap
            </button>
          </div>
          <small className="text-gray-400 text-lg font-semibold">
            Compared to iPhone
          </small>
        </div>
      </div>
    </main>
  )
}
