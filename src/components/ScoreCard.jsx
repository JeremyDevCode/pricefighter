import React from 'react'

function ScoreCard({ top, name, score }) {
  return (
    <div className='flex items-center justify-between w-full p-5 mb-5 text-white bg-black rounded-2xl'>
        <div>
            <p>
            <span className='pr-5 text-gray-500'>
                { top }
            </span>
                { name }
            </p>
        </div>
        <p>{ score }</p>
    </div>
  )
}

export { ScoreCard }