/* eslint-disable multiline-ternary */
import { Play } from '../icons/Play'

const responses = {
  CHEAP: true,
  EXPENSIVE: false
}

export const ProductCard = ({
  image = '/biblethump.png',
  name = 'Aqui iba mas info T_T',
  price = '',
  exposed = false,
  handleClick
}) => {
  if (exposed) {
    return (
      <div className="carousel-item flex-col items-center justify-center w-[50%] h-full gap-5 text-white overflow-hidden">
        <img className="w-full h-full object-cover" src={image} />
        <div className="absolute h-full w-full bg-[#0008] flex flex-col items-center justify-center gap-3">
          <h2 className="text-3xl font-bold">{name}</h2>
          {price && (
            <>
              <p className="font-extrabold text-6xl text-[#FFB800]">${price}</p>
              <small className="text-lg font-semibold text-gray-400">
                Average price
              </small>
            </>
          )}
        </div>
      </div>
    )
  } else {
    return (
      <div className="carousel-item  flex-col items-center justify-center w-[50%] h-full gap-5 text-white overflow-hidden">
        <img className="w-full h-full object-cover" src={image} />
        <div className="absolute h-full w-full bg-[#0008] flex flex-col items-center justify-center gap-3">
          <h2 className="text-3xl font-bold">{name}</h2>
          <small className="text-lg font-semibold text-gray-400 ">is</small>
          <div className="flex flex-col gap-6">
            <button
              onClick={() => handleClick(responses.EXPENSIVE)}
              className="py-5 px-11 flex items-center justify-center gap-2 bg-transparent border-white border-2 rounded-full text-white text-xl font-semibold hover:scale-[1.06] transition-all  hover:bg-white hover:text-black"
            >
              <Play className="-rotate-90 stroke-[2] fill-red-500 stroke-red-500" />
              Expensive
            </button>

            <button
              onClick={() => handleClick(responses.CHEAP)}
              className="py-5 px-11 flex items-center justify-center gap-2 bg-transparent border-2 border-white rounded-full text-white text-xl font-semibold hover:scale-[1.06] transition-all  hover:bg-white hover:text-black"
            >
              <Play className="rotate-90 stroke-[2] fill-green-500 stroke-green-500" />
              Cheap
            </button>
          </div>
          <small className="text-lg font-semibold text-gray-400">
            Compared to {name}
          </small>
        </div>
      </div>
    )
  }
}

/*

*/
