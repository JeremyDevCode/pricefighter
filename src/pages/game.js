import { Settings } from '../components/Settings'
import { Versus } from '../components/Versus'
import { Play } from '../icons/Play'

export default function Home() {
  function play() {
    const audio = document.getElementById('a1')
    audio.play()
  }
  return (
    <main className="relative flex items-center justify-between w-full overflow-x-hidden h-screen bg-[#000000]">
      <div className="absolute w-screen h-screen bg-[#000000] opacity-70 z-10" />
      <nav className="absolute top-0 z-20 flex items-center justify-between w-full pt-4 px-14">
        <a href="#" className="text-xl font-semibold text-white">
          Score: 10
        </a>
        <Settings />
      </nav>
      <Versus />
      <div className="flex flex-col items-center justify-center w-2/4 h-screen gap-5 text-white border-r-2 border-[#444444] bg-white">
        <img
          className="absolute h-2/4 rounded-3xl"
          src="/backgrounds/iphone.jpg"
        />
        <div className="z-10 flex flex-col items-center justify-center gap-3">
          <h2 className="text-3xl font-bold">iPhone 13 Pro Max</h2>
          <p className="font-extrabold text-6xl text-[#FFB800]">$2,000</p>
          <small className="text-lg font-semibold text-gray-400">
            Average price
          </small>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-2/4 h-screen gap-5 text-white border-l-2 border-[#444444] bg-white">
        <img
          className="absolute h-2/4 rounded-3xl"
          src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1665446481/Croma%20Assets/Entertainment/Speakers%20and%20Media%20Players/Images/214741_0_ayqzgw.png/mxw_640,f_auto"
        />
        <div className="z-10 flex flex-col items-center justify-center gap-3">
          <h2 className="text-3xl font-bold">Amazon Alexa Echo</h2>
          <small className="text-lg font-semibold text-gray-400 ">is</small>
          <div className="flex flex-col gap-6">
            <button
              className="py-5 px-11 flex items-center justify-center gap-2 bg-transparent border-white border-2 rounded-full text-white text-xl font-semibold hover:scale-[1.06] transition-all  hover:bg-white hover:text-black"
              onClick={play}
            >
              <Play className="-rotate-90 stroke-[2] fill-red-500 stroke-red-500" />
              Expensive
            </button>
            <audio id="a1" src="/successAnswer.wav">
              Your browser does not support the
              <code>audio</code> element.
            </audio>

            <button className="py-5 px-11 flex items-center justify-center gap-2 bg-transparent border-2 border-white rounded-full text-white text-xl font-semibold hover:scale-[1.06] transition-all  hover:bg-white hover:text-black">
              <Play className="rotate-90 stroke-[2] fill-green-500 stroke-green-500" />
              Cheap
            </button>
          </div>
          <small className="text-lg font-semibold text-gray-400">
            Compared to iPhone
          </small>
        </div>
      </div>
    </main>
  )
}
