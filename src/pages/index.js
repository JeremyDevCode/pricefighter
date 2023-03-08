import { ArrowRight } from '../icons/ArrowRight'
import { Play } from '../icons/Play'
import { useModal } from '../context/ModalContext'
import { Navbar } from '../components/Navbar'
import Link from 'next/link'
import { Background } from '../components/Background'
import { useAuth } from '../context/AuthContext'
import { useRouter } from 'next/router'

export default function Home() {
  const { setModalVisible } = useModal()
  const router = useRouter()
  const { auth } = useAuth()

  const handlePLaying = () => {
    if (auth) router.push('/game')
    else setModalVisible(true)
  }

  return (
    <>
      <Navbar />
      <Background />
      <main className="z-10 flex flex-col items-center justify-center w-full min-h-screen gap-12">
        <h1 className="text-[7rem] leading-none font-extrabold text-center text-white">
          <span className="green-gradient">Price</span>
          <br />
          <span className="red-gradient">Fighter</span>
        </h1>
        <button
          onClick={handlePLaying}
          className="text-[#111] w-[15rem] items-center justify-center flex gap-2 p-5 bg-white rounded-[2rem] font-semibold text-[1.1rem] hover:scale-[1.06] transition-transform"
        >
          <Play size={24} className="fill-yellowalt stroke-yellowalt" />
          Let&apos;s play
        </button>
        <Link
          href="/how-to-play"
          className="flex items-center gap-2 text-gray-200 transition-colors peer hover:underline hover:underline-offset-4"
        >
          How to play
          <ArrowRight size={20} />
        </Link>
      </main>
    </>
  )
}
