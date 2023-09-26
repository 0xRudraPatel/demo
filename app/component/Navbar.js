import Image from "next/image"
import moon from "../assets/vector.svg";
import menu from "../assets/menu.svg";

function Navbar() {
  return (
    <nav className="flex justify-between p-5 xl:px-60">
      <div>
        <Image src={moon} alt="logo" />
      </div>
      <div>
        <a href="#"><Image src={menu} alt="logo" className="flex xl:hidden" /></a>
        <div className="hidden xl:flex">
          <ul className="flex space-x-10 text-md font-bold">
            <a href="#"><li>Works</li></a>
            <a href="#"><li>Blog</li></a>
            <a href="#"><li>Contact</li></a>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
