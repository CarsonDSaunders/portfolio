export function Header() {
  return (
    <header className="text-center">
      <h1 className="text-5xl text-center">Carson Saunders DEV</h1>
      <Nav />
    </header>
  );
}

function Nav() {
  return (
    <nav className="w-3/6 my-5 mx-auto">
      <ul className="flex space-x-5 w-full text-2xl grow flex-row content-between align-baseline">
        <li className="basis-1/3 text-center">
          <button className="border-none ">Home</button>
        </li>
        <li className="basis-1/3">About Me</li>
        <li className="basis-1/3">Projects</li>
      </ul>
    </nav>
  );
}
