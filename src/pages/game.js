import { useState } from 'react'
import { Settings } from '../components/Settings'
import { Versus } from '../components/Versus'
import { Gear } from '../icons/Gear'
import { Play } from '../icons/Play'

export default function Home() {
  const [settings, setSettings] = useState(false)

  return (
    <main className="relative flex items-center justify-between w-full overflow-x-hidden h-screen bg-[#000000]">
      <div className="absolute w-screen h-screen bg-[#000000] opacity-70 z-10"></div>
      <nav className="absolute top-0 z-20 flex items-center justify-between w-full pt-6 px-14">
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
      <div className="flex flex-col items-center justify-center w-2/4 h-screen gap-5 text-white border-r-2 border-[#444444] bg-white">
        <img
          className="absolute h-2/4 rounded-3xl"
          src="http://www.catalogo.claro.com.ec/uploads/imgs/productos/iphone-13-256gb/azul/zoom/01-iphone-13-256gb-azul-front.png"
        />
        <h2 className="z-20 text-5xl font-bold">iPhone 13 Pro Max</h2>
        <p className="z-20 font-extrabold text-8xl text-[#FFB800]">$2000</p>
        <small className="z-20 text-[#CCCCCC] text-2xl font-semibold">
          Average price
        </small>
      </div>

      <div className="flex flex-col items-center justify-center w-2/4 h-screen gap-5 text-white border-l-2 border-[#444444] bg-white">
        <img
          className="absolute h-2/4 rounded-3xl"
          src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1665446481/Croma%20Assets/Entertainment/Speakers%20and%20Media%20Players/Images/214741_0_ayqzgw.png/mxw_640,f_auto"
        />
        <h2 className="z-20 text-5xl font-bold">Amazon Alexa Echo</h2>
        <small className="text-[#CCCCCC] text-2xl font-semibold z-20">is</small>
        <div className="z-20 flex flex-col gap-5">
          <button className=" flex items-center justify-center gap-2 w-[265px] h-[100px] bg-white rounded-full text-[#D71C1C] text-[32px] font-semibold hover:scale-[1.06] transition-all hover:text-white hover:bg-[#D71C1C]">
            Expensive <Play className="-rotate-90 stroke-[3]" size="30" />
          </button>
          <button className="flex items-center justify-center gap-2 w-[265px] h-[100px] bg-white rounded-full text-[#29BB1E] text-[32px] font-semibold hover:scale-[1.06] transition-all hover:text-white hover:bg-[#29BB1E]">
            Cheap <Play className="rotate-90 stroke-[3]" size="30" />
          </button>
        </div>
        <small className="text-[#CCCCCC] text-2xl font-semibold z-20">
          than iPhone
        </small>
      </div>
    </main>
  )
}
