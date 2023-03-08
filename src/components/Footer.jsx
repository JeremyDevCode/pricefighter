function Developer({ children, username, work = '' }) {
  let githubLink = ''
  let avatarLink =
    'https://www.mindbreeze.com/sites/default/files/imagepicker/981/code10.png'
  if (username !== undefined) {
    githubLink = `https://www.github.com/${username}`
    avatarLink = `${githubLink}.png`
  }
  return (
    <a
      href={githubLink}
      className="flex items-center justify-center gap-2 rounded-xl"
    >
      <img
        className="bg-white h-[42px] object-contain rounded-full w-[42px]"
        src={avatarLink}
        alt={username}
      />
      <div className="flex flex-col items-start">
        <p className="text-[#fff] text-[0.91rem] -mb-1">{children}</p>
        <small className="text-gray-400">{work}</small>
      </div>
    </a>
  )
}

export default function Footer() {
  return (
    <footer className="absolute bottom-3 w-full flex flex-col justify-center items-center text-center gap-3">
      <small className="text-gray-300">Made by:</small>
      <div className="flex flex-wrap gap-10 items-center justify-center z-20">
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
      </div>
    </footer>
  )
}
