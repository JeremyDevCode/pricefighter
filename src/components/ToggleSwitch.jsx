import React from 'react'

function ToggleSwitch({ active, handleClick }) {
  return (
    <button
      data-active={active}
      className="peer relative flex items-center h-[24px] w-[44px] rounded-full transition-all duration-300 hover:cursor-pointer bg-[#BBB] data-[active=true]:bg-yellowalt"
      onClick={handleClick}
    >
      <span
        data-active={active}
        className="absolute w-[20px] h-[20px] bg-white data-[active=true]:left-[22px] rounded-full left-[2px] transition-all"
      ></span>
    </button>
  )
}

export { ToggleSwitch }
