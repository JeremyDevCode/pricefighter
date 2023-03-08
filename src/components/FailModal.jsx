import React, { useEffect, useState } from 'react'
import { Play } from '../icons/Play'
import { ArrowRight } from '../icons/ArrowRight'
import Link from 'next/link'

export const FailModal = ({
  modalVisible,
  setModalVisible,
  currentScore = 0
}) => {
  const hideModal = () => setModalVisible(false)
  const reloadPage = () => {
    setModalVisible(false)
    window.location.reload(true)
  }

  const [randomMessage, setRandomMessage] = useState()

  const messages = [
    'Hasta hamburguesa hace más puntos.',
    '¿Ya perdiste? ¿Sigue un kukoro?',
    'Tal vez lo tuyo es el Kuroro.',
    'Toma un gracias por jugar.',
    'Tal vez la proxima vez harás que tus padres se sientan orgullosos.'  
  ]

  const selectedMessage = messages[Math.floor(Math.random() * messages.length)]

  useEffect(() => {
    setRandomMessage(selectedMessage)
  }, [modalVisible])

  return (
    <div
      data-visible={modalVisible}
      className="backdrop-blur-sm z-30 absolute top-0 left-0 w-full h-full hidden data-[visible=true]:flex items-center justify-center"
    >
      <div className="relative bg-[#191919] flex flex-col w-[30rem] text-white p-12 rounded-lg gap-4 text-center">

        <img
          className="rounded-2xl h-44 w-44 mx-auto"
          src="https://media.tenor.com/ZxO72WTtSqIAAAAd/applecat.gif"
        />
        <h1 className="font-bold text-[2.5rem]">Oops! Perdiste!</h1>
        
        <img
          className="rounded-lg"
          src="https://media.tenor.com/ZxO72WTtSqIAAAAd/applecat.gif"
        />
        <h1 className="font-bold text-[2.5rem]">HAHA</h1>

        <p className="text-[#aaa] mb-4">{randomMessage}</p>
        <span className="text-lg font-semibold mb-4">
          Your score: {currentScore}
        </span>
        <button
          onClick={reloadPage}
          className="flex items-center justify-center p-4 bg-yellowalt rounded-[32px] text-black gap-2 hover:scale-[1.04] transition-transform"
        >
          <Play size={22} />
          Play again
        </button>
        <Link
          onClick={hideModal}
          href="/"
          className="flex items-center justify-center p-4 bg-white rounded-[32px] text-black gap-2 hover:scale-[1.04] transition-transform"
        >
          <ArrowRight className="rotate-180" size={22} />
          Go home
        </Link>
      </div>
    </div>
  )
}
