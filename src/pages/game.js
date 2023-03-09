/* eslint-disable space-before-function-paren */
/* eslint-disable multiline-ternary */
import { Navbar } from '../components/Navbar'
import { useState, useEffect, useRef } from 'react'
import { Settings } from '../components/Settings'
import { Versus } from '../components/Versus'
import { AuthWidget } from '../components/AuthWidget'
import { useAuth } from '../context/AuthContext'
import { ProductCard } from '../components/ProductCard'
import { useSoundEffects } from '../context/SoundEffectsContext'
import { FailModal } from '../components/FailModal'
import { WinModal } from '../components/WinModal'

function shuffleProducts(productsList) {
  let ctr = productsList.length
  let temp
  let index
  while (ctr > 0) {
    index = Math.floor(Math.random() * ctr)
    ctr--
    temp = productsList[ctr]
    productsList[ctr] = productsList[index]
    productsList[index] = temp
  }
  return productsList
}

export default function Home() {

  const [isLoading, setLoading] = useState(true)
  const [gameOver, setGameOver] = useState(false)
  const [productslist, setProductsList] = useState([])
  const dataFetchedRef = useRef(false)
  const { auth } = useAuth()
  const [score, setScore] = useState(0)
  const { play } = useSoundEffects()
  const carouselRef = useRef()
  const [fail, setFail] = useState(false)
  const [win, setWin] = useState(false)

  useEffect(() => {
    const postScore = async () => {
      try {
        if (auth && gameOver) {
          let response = await fetch(
            'https://hackafor-api.up.railway.app/user/game_played/',
            {
              method: 'POST',
              headers: {
                Authorization: `Bearer ${auth.accessToken}`,
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                score: score
              })
            }
          )
          console.log(await response.json())
        }
      } catch (error) {
        console.log(error)
      }
    }
    postScore()
  }, [gameOver])


  useEffect(() => {
    const getData = async () => {
      if (dataFetchedRef.current) return
      dataFetchedRef.current = true
      setLoading(true)
      try {
        const response = await fetch(
          'https://hackafor-api.up.railway.app/products/'
        )
        const data = await response.json()
        setProductsList(shuffleProducts(data))
      } catch (error) {
        console.log(error)
      }
      setGameOver(false)
      setLoading(false)
    }
    if (!gameOver) {
      play.Intro()
      getData()
    }
  }, [])

  useEffect(() => {
    if (score === productslist.length - 1) {
      setWin(true)
      setGameOver(true)
    }
    if (carouselRef.current) {
      const scrollDistance = carouselRef.current.getBoundingClientRect().width
      carouselRef.current.style.transform = `translateX( calc(${score} * -${Math.round(
        scrollDistance / 2
      )}px))`
    }
  }, [score])

  const validateResponse = (res) => {
    const prevProduct = productslist[score]
    const currentProduct = productslist[score + 1]
    const correctResponse = prevProduct.price - currentProduct.price > 0
    if (res === correctResponse) {
      setScore(score + 1)
      play.Ok()
    } else {
      play.Fail()
      setFail(true)
      setGameOver(true)
    }
  }

  return (
    <main className="flex items-center justify-center relative overflow-x-hidden h-screen w-screen">
      <Navbar />
      <div className="absolute bottom-0 right-0 flex items-center w-full pb-6 px-14 z-10">
        <a href="#" className="relative text-xl font-semibold text-white">
          Score: {score}
        </a>
      </div>
      {(isLoading) ? (
        <></>
      ) : (
        <>
          <Versus />
          <div className="carousel-container">
            <div className="carousel-viewport" ref={carouselRef}>
              {productslist.map(({ id, name, price, image }, index) => (
                <ProductCard
                  key={id}
                  name={name}
                  price={price}
                  image={image}
                  handleClick={validateResponse}
                  exposed={index <= score}
                />
              ))}
              <ProductCard displayButtons={false} />
            </div>
          </div>
          <FailModal
            modalVisible={fail}
            setModalVisible={(val) => setFail(val)}
            currentScore={score}
          />
          <WinModal
            modalVisible={win}
            setModalVisible={(val) => setWin(val)}
            currentScore={score}
          />
        </>
      )}
    </main>
  )
}
