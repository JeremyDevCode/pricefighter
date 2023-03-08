import React, { useEffect, useState } from 'react'
import { Navbar } from '../components/Navbar'
import { ScoreCard } from '../components/ScoreCard'

function leaderboard() {
  const [boardlist, setBoardlist] = useState([])

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          'https://hackafor-api.up.railway.app/ranking/'
        )
        const data = await response.json()
        setBoardlist(data)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [])

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
        {boardlist &&
          boardlist.length > 0 &&
          boardlist.map((item) => (
            <ScoreCard
              key={item.id}
              top={item.rank}
              name={item.username}
              score={item.score}
            />
          ))}
      </div>
    </section>
  )
}

export default leaderboard
