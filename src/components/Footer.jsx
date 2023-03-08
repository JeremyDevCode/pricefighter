function Developer({ children, username, work = '' }) {
  let githubLink = ''
  let avatarLink =
    'https://www.mindbreeze.com/sites/default/files/imagepicker/981/code10.png'
  console.log(username)
  if (username !== undefined) {
    githubLink = `https://www.github.com/${username}`
    avatarLink = `${githubLink}.png`
  }
  return (
    <a
      href={githubLink}
      className="flex items-center justify-center pt-2 pb-2 pr-3 pl-3 gap-2 rounded-xl"
    >
      <img
        className="bg-white h-[50px] w-full object-contain rounded-full max-w-[50px]"
        src={avatarLink}
        alt=""
      />
      <div className="flex flex-col">
        <h2 className="text-[#fff]">{children}</h2>
        <small className="text-[#fff]">{work}</small>
      </div>
    </a>
  )
}

export default function Footer() {
  return (
    <footer className="absolute bottom-0 flex flex-wrap items-center justify-center w-full pt-6 px-14 z-20 mb-5">
      <Developer username="devenapuros" work="Frontend">
        DevEnApuros
      </Developer>
      <Developer username="JeremyDevCode" work="Frontend">
        Jeremy
      </Developer>
      <Developer username="chermdev" work="Backend">
        Charlyy
      </Developer>
      <Developer work="Design">Lorem29</Developer>
      <Developer work="Backend">toni0215</Developer>
    </footer>
  )
}
