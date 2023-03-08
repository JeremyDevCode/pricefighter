import { useSoundEffects } from '../context/SoundEffectsContext'
import { Play } from '../icons/Play'

export const ProductCard = ({
  product = '/backgrounds/mac.jpg',
  exposed = false,
  handleClick
}) => {
  const { play } = useSoundEffects()

  const handleUserResponse = (event) => {
    handleClick(event)
    play.Ok()
  }

  if (exposed) {
    return (
      <div className="carousel-item flex-col items-center justify-center w-[50%] h-full gap-5 text-white overflow-hidden">
        <img className="w-full h-full object-cover" src={product} />
        <div className="absolute h-full w-full bg-[#0008] flex flex-col items-center justify-center gap-3">
          <h2 className="text-3xl font-bold">iPhone 13 Pro Max</h2>
          <p className="font-extrabold text-6xl text-[#FFB800]">$2,000</p>
          <small className="text-lg font-semibold text-gray-400">
            Average price
          </small>
        </div>
      </div>
    )
  } else {
    return (
      <div className="carousel-item  flex-col items-center justify-center w-[50%] h-full gap-5 text-white overflow-hidden">
        <img className="w-full h-full object-cover" src={product} />
        <div className="absolute h-full w-full bg-[#0008] flex flex-col items-center justify-center gap-3">
          <h2 className="text-3xl font-bold">Amazon Alexa Echo</h2>
          <small className="text-lg font-semibold text-gray-400 ">is</small>
          <div className="flex flex-col gap-6">
            <button
              onClick={handleUserResponse}
              className="py-5 px-11 flex items-center justify-center gap-2 bg-transparent border-white border-2 rounded-full text-white text-xl font-semibold hover:scale-[1.06] transition-all  hover:bg-white hover:text-black"
            >
              <Play className="-rotate-90 stroke-[2] fill-red-500 stroke-red-500" />
              Expensive
            </button>

            <button
              onClick={handleUserResponse}
              className="py-5 px-11 flex items-center justify-center gap-2 bg-transparent border-2 border-white rounded-full text-white text-xl font-semibold hover:scale-[1.06] transition-all  hover:bg-white hover:text-black"
            >
              <Play className="rotate-90 stroke-[2] fill-green-500 stroke-green-500" />
              Cheap
            </button>
          </div>
          <small className="text-lg font-semibold text-gray-400">
            Compared to iPhone
          </small>
        </div>
      </div>
    )
  }
}

/*

*/
