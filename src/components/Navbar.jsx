import React, {useState} from 'react'
import { Gear } from '../icons/Gear'
import { Settings } from './Settings'

function Navbar() {

    const [settings, setSettings] = useState(false);

  return (
    <nav className="absolute top-0 flex items-center justify-between w-full pt-6 px-14">
      <a href="#" className="text-white font-semibold text-[1.1rem]">
        Leaderboard
      </a>
      <div className='relative'>
      <button className="text-white"
        onClick={() => setSettings(!settings)}
      >
        <Gear />
      </button>
        {settings && (
            <Settings/>
        )}
      </div>
    </nav>
  )
}

export { Navbar }
