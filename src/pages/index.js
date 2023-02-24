import { Navbar } from "../common/Navbar";
import { PrimaryButton } from "../components/PrimaryButton";
import { SecondaryButton } from "../components/SecondaryButton";

export default function Home() {
  return (
    <div className='flex bg-[#E8E8E8] w-screen h-screen'>
      <Navbar/>
      {/* <PrimaryButton>
        Join
      </PrimaryButton>
      <SecondaryButton>
        Guest
      </SecondaryButton> */}
    </div>
  )
}
