import React from 'react'

function ScoreCard({ top, name, score, avatar }) {
  return (
    <div className="flex items-center justify-between w-full py-4 px-5 mb-5 text-white bg-[#151515] rounded-2xl">
      <div className="flex items-center gap-2">
        <span className="pr-4 text-gray-500">{top}</span>
        <div className="w-[40px] h-[40px] rounded-full bg-[#fff2]">
          <img className="h-full w-full rounded-full text-[0.7rem] text-[#555] flex items-center justify-center overflow-hidden" src={avatar} alt={name} />
        </div>
        {name}
      </div>
      <p>{score}</p>
    </div>
  )
}

export { ScoreCard }
