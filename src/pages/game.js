export default function Home() {
  return (
    <main className="flex items-center justify-between w-screen h-screen">
      <div className="flex flex-col items-center justify-center w-2/4 h-screen gap-5 text-white border-r-2 border-gray-500">
        <img className="bg-white w-[400px] h-[400px] rounded-3xl" src="https://img.freepik.com/foto-gratis/resumen-superficie-texturas-muro-piedra-hormigon-blanco_74190-8189.jpg?w=360"/>
        <h2 className="text-5xl font-bold">iPhone 13 Pro Max</h2>
        <p className="font-extrabold text-8xl text-[#FFB800]">
          $2000
        </p>
        <small className="text-[#CCCCCC] text-2xl font-semibold">Average price</small>
      </div>
      
      <div className="flex flex-col items-center justify-center w-2/4 h-screen gap-5 text-white border-l-2 border-gray-500">
        <img className="bg-white w-[400px] h-[400px] rounded-3xl" src="https://img.freepik.com/foto-gratis/resumen-superficie-texturas-muro-piedra-hormigon-blanco_74190-8189.jpg?w=360"/>
        <h2 className="text-5xl font-bold">Amazon Alexa Echo</h2>
        <div className="flex gap-5">
          <button className="w-[265px] h-[100px] bg-white rounded-full text-[#D71C1C] text-[32px] font-semibold">
            Expensive △
          </button>
          <button className="w-[265px] h-[100px] bg-white rounded-full text-[#29BB1E] text-[32px] font-semibold">
            Cheap ▽
          </button>
        </div>
        <small className="text-[#CCCCCC] text-2xl font-semibold">Compared to the iPhone</small>
      </div>
      
    </main>
  )
}
