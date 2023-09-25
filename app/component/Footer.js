import Image from "next/image"
import fb from '../assets/fb.svg';
import ig from '../assets/insta.svg';
import twitter from '../assets/twitter.svg';
import linked from '../assets/Linkedin.svg';

function Footer() {
  return (
    <div className="flex-col my-20 space-y-3">
      <div className="flex justify-center space-x-10">
        <Image src={fb} alt="logo" />
        <Image src={ig} alt="logo" />
        <Image src={twitter} alt="logo" />
        <Image src={linked} alt="logo" />
      </div>
      <div className="flex justify-center">
        <p className="text-sm text-headerBlack">Copyright &#169;2020 All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer
