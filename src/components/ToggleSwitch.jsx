import React from 'react'

function ToggleSwitch({ active, handleClick }) {
  return (
    <button
      className={`relative flex items-center h-[24px] w-[44px] rounded-full transition-all duration-300 hover:cursor-pointer ${
        active ? 'bg-[#0085EE]' : 'bg-[#BBB]'
      }
        }`}
      onClick={handleClick}
    >
      <span
        className={`absolute w-[20px] h-[20px] transition-all bg-white ${
          active && 'left-[22px]'
        } rounded-full left-[2px] all`}
      ></span>
    </button>
  )
}

export { ToggleSwitch }
