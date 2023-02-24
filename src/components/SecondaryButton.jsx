import React from 'react'

function SecondaryButton({children}) {
  return (
    <button className='w-[220px] h-[60px] bg-[#303648] rounded-[30px]'>
        <h2 className='text-white text-[26px]'>
            {children}
        </h2>
    </button>
  )
}

export { SecondaryButton }