import Image from 'next/image';
import photo from '../assets/Header_Photo.svg';

function Header() {
  return (
    <div className='flex flex-col'>
      <div className='flex justify-center p-7'>
        <Image src={photo} alt="logo" />
      </div>
      <div className='flex-col'>
            <center>
            <p className='text-3xl text-center text-headerBlack w-52 font-bold'>Hi, I am John, Creative Technologist</p>
            </center>
            <p className='text-sm text-center text-headerBlack pt-5'>Amet minim mollit non deserunt ullamco est<br></br>sit aliqua dolor do amet sint. Velit officia<br></br>consequat duis enim velit mollit. Exercitation<br></br>veniam consequat sunt nostrud amet.</p>
      </div>
      <div className='flex justify-center my-5'>
        <button className='w-44 bg-buttonRed text-textWhite py-1'>Download Resume</button>
      </div>
    </div>
  )
}

export default Header
