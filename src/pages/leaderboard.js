import React from 'react'
import { Navbar } from '../components/Navbar'
import { ScoreCard } from '../components/ScoreCard'

function leaderboard() {
  return (
    <section className="flex flex-col items-center justify-center">
      <Navbar />
      <div className="flex flex-col items-center justify-center w-2/4 mt-24">
        <div className="flex items-center justify-between w-full py-5">
          <h2 className="text-2xl font-semibold text-white">You</h2>
          <small className="font-semibold text-gray-500 mr-6">Score</small>
        </div>
        <ScoreCard top={9} name={'Jeremy'} score={2348} />
        <div className="flex items-start justify-start w-full py-5">
          <h2 className="text-2xl font-semibold text-white">Leaderboard</h2>
        </div>
        <ScoreCard top={1} name={'DevEnApuros'} score={6348} />
        <ScoreCard top={2} name={'Example'} score={5324} />
        <ScoreCard top={3} name={'Example'} score={4212} />
        <ScoreCard top={4} name={'Example'} score={3645} />
        <ScoreCard top={5} name={'Example'} score={3213} />
      </div>
    </section>
  )
}

export default leaderboard
