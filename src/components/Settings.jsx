import { FullScreen } from '../icons/FullScreen'
import { ToggleSwitch } from './ToggleSwitch'
import { useSettings } from '../context/SettingsContext'
import { Minimize } from '../icons/Minimize'

function Settings() {
  const { soundEffects, streamerMode, setSoundEffects, setStreamerMode } =
    useSettings()

  function toggleFullScreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
    } else if (document.exitFullscreen) {
      document.exitFullscreen()
    }
  }

  return (
    <div className="w-[230px] bg-white absolute flex flex-col justify-center gap-5 right-0 top-10 p-5 rounded-xl z-10">
      {!document.fullscreenElement && (
        <button
          className="flex justify-between hover:bg-gray-100 group/fullscreen py-[6px] px-1 rounded-md text-[#111]"
          onClick={toggleFullScreen}
        >
          Full screen
          <FullScreen className="group-hover/fullscreen:stroke-[#111] stroke-[#999]" />
        </button>
      )}
      {document.fullscreenElement && (
        <button
          className="flex justify-between hover:bg-gray-100 group/fullscreen py-[6px] px-1 rounded-md text-[#111]"
          onClick={toggleFullScreen}
        >
          Minimize
          <Minimize className="group-hover/fullscreen:stroke-[#111] stroke-[#999]" />
        </button>
      )}
      <div className="flex justify-between m-1">
        <p>Sound effects</p>
        <ToggleSwitch
          active={soundEffects}
          handleClick={() => setSoundEffects(!soundEffects)}
        />
      </div>
      <div className="flex justify-between m-1">
        <p>Streamer mode</p>
        <ToggleSwitch
          active={streamerMode}
          handleClick={() => setStreamerMode(!streamerMode)}
        />
      </div>
    </div>
  )
}

export { Settings }
