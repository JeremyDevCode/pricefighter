import { ArrowRight } from '../icons/ArrowRight'
import { Play } from '../icons/Play'
import { useModal } from '../context/ModalContext'
import { Navbar } from '../components/Navbar'
import Link from 'next/link'
import { Background } from '../components/Background'
import { useAuth } from '../context/AuthContext'
import { useRouter } from 'next/router'
import Footer from '../components/Footer'
import Head from 'next/head'

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
      <Head>
        <title>{'Price Fighter'}</title>
        <meta name="og:site_name" content="Jeremy Mosquera" />
        <meta
          name="description"
          content='The project consisted of creating a web minigame similar to "The Higher Lower Game" but we decided to compare product prices instead of visits!'
        ></meta>

        <meta itemProp="name" content="Price Fighter" />
        <meta
          itemProp="description"
          content='The project consisted of creating a web minigame similar to "The Higher Lower Game" but we decided to compare product prices instead of visits!'
        />
        <meta
          itemProp="image"
          content="https://res.cloudinary.com/deohsoirn/image/upload/v1680331123/Portfolio/additionalImages/priceFighter_bai58b.png"
        />

        <meta property="og:url" content="https://pricefighter.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Price Fighter" />
        <meta
          name="og:description"
          content='The project consisted of creating a web minigame similar to "The Higher Lower Game" but we decided to compare product prices instead of visits!'
        ></meta>
        <meta
          property="og:image"
          content="https://res.cloudinary.com/deohsoirn/image/upload/v1680331123/Portfolio/additionalImages/priceFighter_bai58b.png"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1224" />
        <meta property="og:image:height" content="930" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Price Fighter" />
        <meta
          name="twitter:description"
          content='The project consisted of creating a web minigame similar to "The Higher Lower Game" but we decided to compare product prices instead of visits!'
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/deohsoirn/image/upload/v1680331123/Portfolio/additionalImages/priceFighter_bai58b.png"
        />
      </Head>
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
      <Footer />
    </>
  )
}
