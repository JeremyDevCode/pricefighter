import Link from 'next/link'
import { Settings } from './Settings'
import { AuthWidget } from './AuthWidget'

function Navbar() {
  return (
    <nav className="absolute top-0 flex items-center justify-between w-full pt-6 px-14">
      <Link
        href="/leaderboard"
        className="py-2 px-5 rounded-2xl transition-colors text-white font-semibold text-[1.1rem] hover:bg-[#fff1]"
      >
        Leaderboard
      </Link>
      <div className="flex items-center gap-4">
        <AuthWidget />
        <Settings />
      </div>
    </nav>
  )
}

export { Navbar }
