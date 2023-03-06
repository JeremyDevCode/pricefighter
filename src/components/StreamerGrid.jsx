import React from 'react'
import { Camera } from '../icons/Camera'
import { Chat } from '../icons/Chat'
import { useSettings } from '../context/SettingsContext'

export const StreamerGrid = ({ children }) => {
  const { streamerMode } = useSettings()
  return (
    <div
      data-streamermode={streamerMode}
      className="grid grid-cols-1 data-[streamermode=true]:grid-cols-streamerMode"
    >
      <div
        data-visible={streamerMode}
        className="bg-[#151515] h-screen hidden flex-col max-h-screen data-[visible=true]:flex"
      >
        <div className=" min-h-0 flex flex-col gap-1 aspect-video border-b-[1px] border-b-[#333] items-center justify-center text-[#999] font-semibold text-md">
          <Camera size={32} />
          <h2>Camera here</h2>
        </div>
        <div className="flex gap-1 flex-col justify-center items-center h-[70%] min-h-0 text-[#999] font-semibold text-md">
          <Chat size={32} />
          <h2>Chat here</h2>
        </div>
      </div>
      {children}
    </div>
  )
}
