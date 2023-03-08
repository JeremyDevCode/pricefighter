import React from 'react'
export const Background = () => {
  return (
    <div className="grid grid-cols-background gap-6 absolute -top-32 -left-4 h-fit w-[125vw] overflow-hidden z-[-1] opacity-25 -rotate-6">
      <div className="flex flex-col gap-6 overflow-hidden">
        <img className="rounded-md" src="/backgrounds/mac.jpg" alt="" />
        <img className="rounded-md" src="/backgrounds/ropa.jpg" alt="" />
        <img className="rounded-md" src="/backgrounds/microfono.jpg" alt="" />
        <img className="rounded-md" src="/backgrounds/supreme.jpg" alt="" />
      </div>
      <div className="flex flex-col gap-6">
        <img className="rounded-md" src="/backgrounds/patinete.jpg" alt="" />
        <img className="rounded-md" src="/backgrounds/playstation.jpg" alt="" />
        <img className="rounded-md" src="/backgrounds/tesla.jpeg" alt="" />
        <img className="rounded-md" src="/backgrounds/xbox.jpg" alt="" />
      </div>
      <div className="flex flex-col gap-6">
        <img className="rounded-md" src="/backgrounds/nike.webp" alt="" />
        <img className="rounded-md" src="/backgrounds/laptop.webp" alt="" />
        <img className="rounded-md" src="/backgrounds/xbox.webp" alt="" />
        <img className="rounded-md" src="/backgrounds/guitarra.jpg" alt="" />
      </div>
      <div className="flex flex-col gap-6">
        <img className="rounded-md" src="/backgrounds/ikea.jpg" alt="" />
        <img className="rounded-md" src="/backgrounds/teclado.webp" alt="" />
        <img className="rounded-md" src="/backgrounds/iphone.jpg" alt="" />
        <img className="rounded-md" src="/backgrounds/microfono.jpg" alt="" />
      </div>
      <div className="flex flex-col gap-6 overflow-hidden">
        <img className="rounded-md" src="/backgrounds/nike.webp" alt="" />
        <img className="rounded-md" src="/backgrounds/tesla.jpeg" alt="" />
        <img className="rounded-md" src="/backgrounds/iphone.jpg" alt="" />
      </div>
    </div>
  )
}
