import React from 'react'

function ScoreCard({ top, name, score }) {
  return (
    <div className="flex items-center justify-between w-full py-4 px-5 mb-5 text-white bg-[#151515] rounded-2xl">
      <div className="flex items-center gap-2">
        <span className="pr-4 text-gray-500">{top}</span>
        <div className="w-[40px] h-[40px] rounded-full bg-[#fff2]"></div>
        {name}
      </div>
      <p>{score}</p>
    </div>
  )
}

export { ScoreCard }
