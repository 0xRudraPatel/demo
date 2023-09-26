import Image from 'next/image';
import photo from '../assets/Header_Photo.svg';

function Header() {
  return (
    <div className='flex flex-col xl:flex-row xl:justify-between xl:px-96 xl:py-20'>
      <div className='flex xl:w-1/2 justify-center p-7 xl:hidden'>
        <Image src={photo} alt="logo"/>
      </div>
      <div className='xl:w-1/2'>
      <div className='flex-col'>
            <div className='flex justify-center xl:justify-normal'>
            <p className='w-52 xl:w-96 text-3xl xl:text-5xl text-center xl:text-start text-headerBlack font-bold'>Hi, I am John, Creative Technologist</p>
            </div>
            <p className='text-sm text-center xl:text-start text-headerBlack pt-5'>Amet minim mollit non deserunt ullamco est<br></br>sit aliqua dolor do amet sint. Velit officia<br></br>consequat duis enim velit mollit. Exercitation<br></br>veniam consequat sunt nostrud amet.</p>
      </div>
      <div className='flex justify-center xl:justify-start my-5'>
        <button className='w-44 xl:w-56 bg-buttonRed text-textWhite py-1'>Download Resume</button>
      </div>
      </div>
      <div className='hidden xl:flex xl:justify-center p-7'>
        <Image src={photo} alt="logo" />
      </div>
    </div>
  )
}

export default Header
