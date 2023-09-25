import Image from "next/image"
import moon from "../assets/vector.svg";
import menu from "../assets/menu.svg";

function Navbar() {
  return (
    <nav className="flex justify-between p-5">
      <div>
        <Image src={moon} alt="logo" />
      </div>
      <div>
        <Image src={menu} alt="logo" />
        <div className="hidden">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Portfolio</li>
          <li>Contact</li>
        </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
