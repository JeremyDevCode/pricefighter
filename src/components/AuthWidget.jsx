import { useRef, useState } from 'react'
import { useOutsideClickListener } from '../hooks/useClickOutsideListener'
import { Logout } from '../icons/Logout'
import { useAuth } from '../context/AuthContext'

export const AuthWidget = () => {
  const menuRef = useRef()
  const { auth, signOut } = useAuth()
  const [menuVisible, setMenuVisible] = useState(false)
  useOutsideClickListener(menuRef, () => setMenuVisible(false))

  return (
    <div className="relative" ref={menuRef}>
      <button
        data-active={menuVisible}
        className="p-[5px] text-white hover:bg-[#fff2] data-[active=true]:bg-[#fff2] rounded-full transition-colors"
        onClick={() => setMenuVisible(!menuVisible)}
      >
        <div className="w-[32px] h-[32px] rounded-full bg-[#fff2]">
          <img
            className="h-full w-full rounded-full"
            src={auth?.userAvatar}
            alt={auth?.userName}
          />
        </div>
      </button>
      <div
        data-visible={menuVisible}
        className="w-[230px] bg-white absolute hidden flex-col justify-center gap-3 right-0 top-14 py-2 px-2 rounded-lg z-10 data-[visible=true]:flex"
      >
        <button
          onClick={signOut}
          className="flex justify-between items-center group/fullscreen py-[6px] px-2 rounded-md text-[#111] transition-colors hover:bg-red-100 hover:text-red-600"
        >
          Logout
          <Logout size={18} />
        </button>
      </div>
    </div>
  )
}
