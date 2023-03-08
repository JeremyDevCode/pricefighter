import React from 'react'
import { Close } from '../icons/Close'
import { Play } from '../icons/Play'
import { ArrowRight } from '../icons/ArrowRight'
import Link from 'next/link'
import { useRouter } from 'next/router'


export const FailModal = ({
  modalVisible,
  setModalVisible,
  currentScore = 0
}) => {
  const hideModal = () => setModalVisible(false)
  const reloadPage = () => {
    setModalVisible(false)
    window.location.reload(true)
  }
  return (
    <div
      data-visible={modalVisible}
      className="backdrop-blur-sm z-30 absolute top-0 left-0 w-full h-full hidden data-[visible=true]:flex items-center justify-center"
    >
      <div className="relative bg-[#191919] flex flex-col w-[30rem] text-white p-12 rounded-lg gap-4 text-center">
        {/* <button
          onClick={hideModal}
          className="p-1 absolute top-6 right-6 text-[#666] hover:bg-[#fff1] rounded-md transition-colors hover:text-gray-300"
        >
          <Close size={20} />
        </button> */}
        <h1 className="font-bold text-[2.5rem]">Oops! you failed</h1>
        <p className="text-[#aaa] mb-4">
          Maybe next time you will make your parents proud.
        </p>
        <span className="text-lg font-semibold mb-4">
          Your score: {currentScore}
        </span>
        <button
          onClick={reloadPage}
          className="flex items-center justify-center p-4 bg-yellowalt rounded-[32px] text-black gap-2 hover:scale-[1.04] transition-transform"
        >
          <Play size={22} />
          Play again
        </button>
        <Link
          onClick={hideModal}
          href="/"
          className="flex items-center justify-center p-4 bg-white rounded-[32px] text-black gap-2 hover:scale-[1.04] transition-transform"
        >
          <ArrowRight className="rotate-180" size={22} />
          Go home
        </Link>
      </div>
    </div>
  )
}
