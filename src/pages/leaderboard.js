/* eslint-disable space-before-function-paren */
/* eslint-disable multiline-ternary */
import React, { useEffect, useState } from 'react'
import { Navbar } from '../components/Navbar'
import { ScoreCard } from '../components/ScoreCard'
import { useAuth } from '../context/AuthContext'

function leaderboard() {
  const [boardlist, setBoardlist] = useState([])
  const [gameMissing, setGameMissing] = useState(false)
  const [currentRanking, setCurrentRanking] = useState(null)
  const { auth } = useAuth()

  useEffect(() => {
    const getData = async () => {
      try {
        let response = await fetch(
          'https://hackafor-api.up.railway.app/ranking/'
        )
        const data = await response.json()
        setBoardlist(data)
        if (auth) {
          response = await fetch(
            'https://hackafor-api.up.railway.app/user/ranking/',
            {
              headers: {
                Authorization: `Bearer ${auth.accessToken}`
              }
            }
          )
          const data = await response.json()
          console.log(data)
          if (data.score || data.rank) {
            setCurrentRanking({ score: data.score, rank: data.rank })
            setGameMissing(false)
          } else setGameMissing(true)
        }
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [])

  return (
    <section className="flex flex-col items-center justify-center w-full">
      <Navbar />
      <div className="flex flex-col items-center justify-center w-2/4 mt-24">
        <div className="flex items-center justify-between w-full py-5">
          <h2 className="text-2xl font-semibold text-white">You</h2>
          <small className="font-semibold text-gray-500 mr-6">Score</small>
        </div>
        {auth && currentRanking ? (
          <ScoreCard
            top={currentRanking.rank}
            name={auth?.userName}
            avatar={auth?.userAvatar}
            score={currentRanking.score}
          />
        ) : gameMissing ? (
          <h1 className="text-gray-500 font-semibold my-6">
            Please play a game to see your score
          </h1>
        ) : (
          <h1 className="text-gray-500 font-semibold my-6">
            Please login to view your ranking
          </h1>
        )}
        <div className="flex items-start justify-start w-full py-5">
          <h2 className="text-2xl font-semibold text-white">Leaderboard</h2>
        </div>
        {boardlist &&
          boardlist.length > 0 &&
          boardlist.map((item) => (
            <ScoreCard
              key={item.id}
              top={item.rank}
              name={item.data?.user_metadata?.user_name}
              avatar={item.data?.user_metadata?.avatar_url}
              score={item.score}
            />
          ))}
        {(!boardlist || boardlist.length === 0) && (
          <div>
            <h1 className="text-gray-500 font-semibold">
              No hay usuarios para mostrar
            </h1>
          </div>
        )}
      </div>
    </section>
  )
}

export default leaderboard
