import React from 'react'
import { Play } from '../icons/Play'

export default function howToPlay() {
  return (
    <div
      id="HowToPlay"
      className="w-full h-screen flex flex-col items-center justify-center"
    >
      <h1 className=" text-white text-8xl text-center">
        You must guess if the price of the objects is higher or lower with the
        buttons
      </h1>
      <div className="flex justify-center items-center">
        <button className="py-5 px-11 flex items-center justify-center gap-2 bg-transparent border-white border-2 rounded-full text-white text-xl font-semibold hover:scale-[1.06] transition-all  hover:bg-white hover:text-black">
          <Play className="-rotate-90 stroke-[2] fill-red-500 stroke-red-500" />
          Expensive
        </button>
        <img className="w-1/3" src="/biblethump.png"></img>

        <button className="py-5 px-11 flex items-center justify-center gap-2 bg-transparent border-2 border-white rounded-full text-white text-xl font-semibold hover:scale-[1.06] transition-all  hover:bg-white hover:text-black">
          <Play className="rotate-90 stroke-[2] fill-green-500 stroke-green-500" />
          Cheap
        </button>
      </div>
    </div>
  )
}
