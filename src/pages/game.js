import { useState, useEffect, useRef } from 'react'
import { Settings } from '../components/Settings'
import { Versus } from '../components/Versus'
import { AuthWidget } from '../components/AuthWidget'
import { useAuth } from '../context/AuthContext'
import { ProductCard } from '../components/ProductCard'
import { useSoundEffects } from '../context/SoundEffectsContext'
import { FailModal } from '../components/FailModal'

export default function Home() {
  const { auth } = useAuth()
  const [score, setScore] = useState(0)
  const { play } = useSoundEffects()
  const carouselRef = useRef()
  const [fail, setFail] = useState(false)

  useEffect(() => {
    play.Intro()
  }, [])

  const scrollAnimation = () => {
    const scrollDistance = carouselRef.current.getBoundingClientRect().width
    carouselRef.current.style.transform = `translateX( calc(${
      score + 1
    } * -${Math.round(scrollDistance / 2)}px))`
    setScore(score + 1)
  }

  return (
    <main className="flex items-center justify-center relative overflow-x-hidden h-screen w-screen">
      <nav className="absolute top-0 flex items-center justify-between w-full pt-6 px-14 z-10">
        <a href="#" className="text-xl font-semibold text-white">
          Score: {score}
        </a>
        <div className="flex items-center gap-4">
          {auth && <AuthWidget />}
          <Settings />
        </div>
      </nav>
      <Versus />
      <div className="carousel-container">
        <div className="carousel-viewport" ref={carouselRef}>
          <ProductCard />
          <ProductCard handleClick={scrollAnimation} />
          <ProductCard handleClick={scrollAnimation} />
          <ProductCard handleClick={scrollAnimation} />
          <ProductCard handleClick={scrollAnimation} />
          <ProductCard handleClick={scrollAnimation} />
        </div>
      </div>
      <FailModal modalVisible={fail} setModalVisible={(val) => setFail(val)} />
    </main>
  )
}
