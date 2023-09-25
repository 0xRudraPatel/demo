import Image from "next/image"
import work from '../assets/featured.svg'

function Feature() {
  return (
    <div className="py-5 mb-10 flex justify-center">
      <center className="space-y-5">
        <center>
            <p className="text-headerBlack">Featured Works</p>
        </center>
        <div className="flex justify-center">
            <Image src={work} alt="logo" />
        </div>
        <div className="space-y-5">
            <p className="text-headerBlack font-bold text-xl text-start">Designing Dashboards</p>
            <div className="flex space-x-16">
                <div className="w-fit bg-headerBlack text-textWhite px-3 text-base rounded-full">
                    <p>2020</p>
                </div>
                <p className="text-base text-headerBlack">Dashboard</p>
            </div>
            <p className='text-sm text-start text-headerBlack'>Amet minim mollit non deserunt ullamco est<br></br>sit aliqua dolor do amet sint. Velit officia<br></br>consequat duis enim velit mollit. Exercitation<br></br>veniam consequat sunt nostrud amet.</p>
        </div>
      </center>
    </div>
  )
}

export default Feature
