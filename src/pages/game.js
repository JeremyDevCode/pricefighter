/* eslint-disable space-before-function-paren */
/* eslint-disable multiline-ternary */
import { useState, useEffect, useRef } from 'react'
import { Settings } from '../components/Settings'
import { Versus } from '../components/Versus'
import { AuthWidget } from '../components/AuthWidget'
import { useAuth } from '../context/AuthContext'
import { ProductCard } from '../components/ProductCard'
import { useSoundEffects } from '../context/SoundEffectsContext'
import { FailModal } from '../components/FailModal'
import { WinModal } from '../components/WinModal'

const responses = {
  CHEAP: true,
  EXPENSIVE: false
}

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
  const [productslist, setProductsList] = useState([])
  const { auth } = useAuth()
  const [score, setScore] = useState(0)
  const { play } = useSoundEffects()
  const carouselRef = useRef()
  const [fail, setFail] = useState(false)
  const [win, setWin] = useState(false)

  useEffect(() => {
    const getData = async () => {
      setLoading(true)
      try {
        const response = await fetch(
          'https://hackafor-api.up.railway.app/products/'
        )
        const data = await response.json()
        setProductsList(shuffleProducts(data))
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
    getData()
    play.Intro()
  }, [])

  useEffect(() => {
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
      if (score === productslist.length - 1) setWin(true)
      else setScore(score + 1)
      play.Ok()
    } else {
      setFail(true)
      play.Fail()
    }
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
      {isLoading ? (
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
              <ProductCard />
            </div>
          </div>
          <FailModal
            modalVisible={fail}
            setModalVisible={(val) => setFail(val)}
            currentScore={score}
          />
          <WinModal
            modalVisible={win}
            setModalVisible={score > 18 && setWin(true)}
            currentScore={score}
          />
        </>
      )}
    </main>
  )
}
