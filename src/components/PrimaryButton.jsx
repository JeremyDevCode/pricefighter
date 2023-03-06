import React from 'react'

function PrimaryButton({ children }) {
  return (
    <button className="w-[220px] h-[60px] bg-[#14FF00] rounded-[30px]">
      <h2 className="text-white text-[26px]">{children}</h2>
    </button>
  )
}

export { PrimaryButton }
