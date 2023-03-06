import React from 'react'
import { Close } from '../icons/Close'
import { useModal } from '../context/ModalContext'

export const Modal = () => {
  const { modalVisible, setModalVisible } = useModal()
  return (
    <div
      data-visible={modalVisible}
      className="backdrop-blur-sm z-10 absolute top-0 left-0 w-full h-full hidden data-[visible=true]:flex items-center justify-center"
    >
      <div className="relative bg-[#191919] flex flex-col w-[30rem] text-white p-12 rounded-lg gap-4 text-center">
        <button
          onClick={() => setModalVisible(false)}
          className="p-1 absolute top-6 right-6 text-[#666] hover:bg-[#fff1] rounded-md transition-colors hover:text-gray-300"
        >
          <Close size={20} />
        </button>
        <h1 className="font-bold text-[2rem]">Join and enjoy</h1>
        <small className="text-[#aaa] mb-4">
          Join and compete with players around the world. Your score will be
          reflected on the leaderboard.
        </small>
        <div className="flex flex-col gap-6">
          <button className="flex items-center justify-center p-4 bg-white rounded-[32px] text-black">
            Join with Github
          </button>
          <button className="flex items-center justify-center p-4 bg-white rounded-[32px] text-black">
            Join with Google
          </button>
        </div>
        <span className="border-b-[1px] border-[#ffffff20] my-3" />
        <button className="flex items-center justify-center p-4 bg-white rounded-[32px] text-black">
          Play as Guest
        </button>
        <small className="text-[#888]">Your score will not be saved</small>
      </div>
    </div>
  )
}
