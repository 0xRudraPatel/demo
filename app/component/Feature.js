import Image from "next/image"
import work from '../assets/featured.svg'
import work1 from '../assets/featured1.svg'
import work2 from '../assets/featured2.svg'

function Feature() {
  return (
    <div className="py-5 mb-10 flex justify-center">
      <center className="space-y-5">
        <center>
            <p className="text-headerBlack">Featured Works</p>
        </center>
        <div className="xl:flex xl:space-x-5">
        <div className="flex justify-center">
            <Image src={work} alt="logo" />
        </div>
        <div className="space-y-5 pt-5 xl:pt-0">
            <p className="text-headerBlack font-bold text-xl text-start">Designing Dashboards</p>
            <div className="flex space-x-16">
                <div className="w-fit bg-headerBlack text-textWhite px-3 text-base rounded-full">
                    <p>2020</p>
                </div>
                <p className="text-base text-headerBlack">Dashboard</p>
            </div>
            <p className='text-sm text-start text-headerBlack'>Amet minim mollit non deserunt ullamco est<br></br>sit aliqua dolor do amet sint. Velit officia<br></br>consequat duis enim velit mollit. Exercitation<br></br>veniam consequat sunt nostrud amet.</p>
        </div>
        </div>
        <div className="hidden xl:flex xl:space-x-5">
        <div className="flex justify-center">
            <Image src={work2} alt="logo" />
        </div>
        <div className="space-y-5">
            <p className="text-headerBlack font-bold text-xl text-start">Vibrant Portraits of 2020</p>
            <div className="flex space-x-16">
                <div className="w-fit bg-headerBlack text-textWhite px-3 text-base rounded-full">
                    <p>2018</p>
                </div>
                <p className="text-base text-headerBlack">Illustration</p>
            </div>
            <p className='text-sm text-start text-headerBlack'>Amet minim mollit non deserunt ullamco est<br></br>sit aliqua dolor do amet sint. Velit officia<br></br>consequat duis enim velit mollit. Exercitation<br></br>veniam consequat sunt nostrud amet.</p>
        </div>
        </div>
        <div className="hidden xl:flex xl:space-x-5">
        <div className="flex justify-center">
            <Image src={work1} alt="logo" />
        </div>
        <div className="space-y-5">
            <p className="text-headerBlack font-bold text-xl text-start">36 Days of Malayalam type</p>
            <div className="flex space-x-16">
                <div className="w-fit bg-headerBlack text-textWhite px-3 text-base rounded-full">
                    <p>2018</p>
                </div>
                <p className="text-base text-headerBlack">Typography</p>
            </div>
            <p className='text-sm text-start text-headerBlack'>Amet minim mollit non deserunt ullamco est<br></br>sit aliqua dolor do amet sint. Velit officia<br></br>consequat duis enim velit mollit. Exercitation<br></br>veniam consequat sunt nostrud amet.</p>
        </div>
        </div>
      </center>
    </div>
  )
}

export default Feature
