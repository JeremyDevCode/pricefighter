import React from 'react'

function Navbar() {

    const navElements = ['Leaderboard', 'About', 'Github', 'Join']

  return (
    <nav className='w-screen h-[100px] flex items-center justify-between mx-20'>
        <img/>
        <ul className='flex items-end justify-center gap-10 text-[#303648] text-xl'>
            {navElements.map((element) => (
                <li key={element}>
                    {element}
                </li>
            ))}
        </ul>
    </nav>
  )
}

export { Navbar }