import { Settings } from './Settings'

function Navbar() {
  return (
    <nav className="absolute top-0 flex items-center justify-between w-full pt-6 px-14">
      <a href="#" className="text-white font-semibold text-[1.1rem]">
        Leaderboard
      </a>
      <Settings />
    </nav>
  )
}

export { Navbar }
