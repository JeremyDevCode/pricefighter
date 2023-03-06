import React from 'react'

function ToggleSwitch({active, handleClick}) {
  return (
    <button
        className={`relative flex items-center h-6 w-11 rounded-full transition-all duration-300 hover:cursor-pointer ${active ? 'bg-[#0085EE]' : 'bg-[#BBB]'}
        }`}
        onClick={handleClick}
    >
        <span className={`absolute w-5 h-5 transition bg-white ${active && 'left-5'} rounded-full left-1 all`}></span>
    </button>
  )
}

export { ToggleSwitch }