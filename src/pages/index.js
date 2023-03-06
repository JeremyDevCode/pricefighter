import { ArrowRight } from '../icons/ArrowRight'
import { Play } from '../icons/Play'
import { useModal } from '../context/ModalContext'
import { Navbar } from '../components/Navbar'

export default function Home() {
  const { setModalVisible } = useModal()
  return (
    <>
      <Navbar />
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
          className="flex items-center text-gray-400 gap-2 text-[0.91rem] hover:text-gray-200 transition-colors"
        >
          How to play
          <ArrowRight size={18} />
        </a>
      </main>
    </>
  )
}
