import { ArrowRight } from '../icons/ArrowRight'
import { Play } from '../icons/Play'
import { Gear } from '../icons/Gear'
import { useModal } from '../context/ModalContext'

export default function Home() {
  const { setModalVisible } = useModal()
  return (
    <>
      <nav className="absolute top-0 flex items-center justify-between w-full px-14 pt-6">
        <a href="#" className="text-white font-semibold text-[1.1rem]">
          Leaderboard
        </a>
        <button className="text-white">
          <Gear />
        </button>
      </nav>
      <main className="flex flex-col items-center justify-center w-full h-screen gap-12">
        <h1 className="text-[6rem] leading-none font-extrabold text-center text-white">
          Price
          <br />
          Fighter
        </h1>
        <button
          onClick={() => setModalVisible(true)}
          className="text-black w-[15rem] items-center justify-center flex gap-2 p-5 bg-white rounded-[2rem] font-semibold hover:scale-[1.06] transition-transform"
        >
          Let&apos;s play
          <Play size={22} />
        </button>
        <a
          href=""
          className="flex items-center text-gray-400 gap-2 text-[0.91rem]"
        >
          How to play
          <ArrowRight size={18} />
        </a>
      </main>
    </>
  )
}
