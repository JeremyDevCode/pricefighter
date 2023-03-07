/* eslint-disable multiline-ternary */
import { useState, useRef } from 'react'
import { Gear } from '../icons/Gear'
import { useSettings } from '../context/SettingsContext'
import { FullScreen } from '../icons/FullScreen'
import { Minimize } from '../icons/Minimize'
import { ToggleSwitch } from './ToggleSwitch'
import { useOutsideClickListener } from '../hooks/useClickOutsideListener'
import { useFullScreenListener } from '../hooks/useFullScreenListener'

export const Settings = () => {
  const menuRef = useRef()
  const [menuVisible, setMenuVisible] = useState(false)
  useOutsideClickListener(menuRef, () => setMenuVisible(false))
  const { fullscreen, toggleFullscreen } = useFullScreenListener()
  const { soundEffects, streamerMode, setSoundEffects, setStreamerMode } =
    useSettings()

  return (
    <div className="relative" ref={menuRef}>
      <button
        data-active={menuVisible}
        className="p-[7px] text-white data-[active=true]:bg-[#fff2] rounded-md"
        onClick={() => setMenuVisible(!menuVisible)}
      >
        <Gear size={23} />
      </button>
      <div
        data-visible={menuVisible}
        className="w-[230px] bg-white absolute hidden flex-col justify-center gap-3 right-0 top-11 py-5 px-4 rounded-lg z-10 data-[visible=true]:flex"
      >
        <button
          className="flex justify-between hover:bg-gray-100 group/fullscreen py-[6px] px-2 rounded-md text-[#111] transition-colors"
          onClick={toggleFullscreen}
        >
          {fullscreen ? (
            <>
              Minimize
              <Minimize className="group-hover/fullscreen:stroke-[#111] stroke-[#999]" />
            </>
          ) : (
            <>
              Fullscreen
              <FullScreen className="group-hover/fullscreen:stroke-[#111] stroke-[#999] transition-colors" />
            </>
          )}
        </button>
        <span className="border-b-[1px] border-b-gray-100 mx-2" />
        {/* {document.fullscreenElement && (
          <button
            className="flex justify-between hover:bg-gray-100 group/fullscreen py-[6px] px-1 rounded-md text-[#111]"
            onClick={toggleFullScreen}
          >

          </button>
        )} */}
        <div className="flex justify-between mx-2 mb-1">
          <p>Sound effects</p>
          <ToggleSwitch
            active={soundEffects}
            handleClick={() => setSoundEffects(!soundEffects)}
          />
        </div>
        <div className="flex justify-between mx-2">
          <p>Streamer mode</p>
          <ToggleSwitch
            active={streamerMode}
            handleClick={() => setStreamerMode(!streamerMode)}
          />
        </div>
      </div>
    </div>
  )
}
