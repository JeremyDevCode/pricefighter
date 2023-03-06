import React, {useState} from 'react'
import { FullScreen } from '../icons/FullScreen'
import { Gear } from '../icons/Gear'
import { ToggleSwitch } from './ToggleSwitch';

function Settings() {

    const [sound, setSound] = useState(false);
    const [streamerMode, setStreamerMode] = useState(false);

  return (
    <div className='w-[250px] bg-white absolute flex flex-col justify-center gap-5 right-0 top-10 p-5 rounded-xl'>
        <div className='flex justify-between'>
            <p>Full screen</p>
            <FullScreen/>
        </div>
        <div className='flex justify-between'>
            <p>Sound effects</p>
            <ToggleSwitch active={sound} handleClick={() => setSound(!sound)}/>
        </div>
        <div className='flex justify-between'>
            <p>Streamer mode</p>
            <ToggleSwitch active={streamerMode} handleClick={() => setStreamerMode(!streamerMode)}/>
        </div>
    </div>
  )
}

export { Settings }