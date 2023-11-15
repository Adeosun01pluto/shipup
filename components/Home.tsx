import Image from 'next/image'
import React from 'react'

export default function Home() {
  return (
    <div className='w-full relative'>
        <div className="flex-col md:flex-row gap-1 flex w-full md:w-[95%] pt-4 md:pt-12 mx-auto min-h-[400px]">
            <div className='flex-1 h-auto items-start justify-center flex gap-3 sm:gap-5 flex-col w-full px-4 sm:w-[85%] mx-auto md:w-full'>
                <h2 className='text-2xl md:text-3xl w-full md:w-[90%] leading-10'>Quick & Reliable <span className='text-[#F67366] text-3xl md:text-4xl font-semibold'>Warehousing and Logistics</span> solution</h2>
                <p className='text-[#333333] text-sm md:text-md w-full md:w-[90%]'>ShipUp delivers an unparalleled customer service through dedicated customer teams, engaged people working in an agile culture, and a global footprint</p>
                <div className='flex gap-3'>
                    <button className="bg-[#002E54] text-[#fff] py-3 px-5 text-sm rounded-md">Join Now</button>
                    <button className="flex gap-2 items-center font-semibold bg-[#fff] text-[#002E54] px-3 text-sm rounded-md">
                        <Image alt='plane' width={45} height={45} className='bg-white shadow-md p-2.5 rounded-full' src="/Video.svg"/>
                        <span>Play Demo</span>
                    </button>
                </div>
            </div>
            <div className='max-h-[350px] mx-auto w-full pt-4 px-2 md:p-0  flex-1'>
                <Image
                    src="/Hero.svg"
                    alt="Hero"
                    width={100}
                    height={100}
                    quality={100}
                    style={{
                        objectFit: 'contain',
                    }}
                    className=' w-full h-[350px] object-cover'
                />
            </div>
            <div className='md:block hidden border-2 border-[#BCBDED]/50 top-[-120px] rounded-full w-[600px] z-[-9] left-[-270px] h-[600px] absolute'>
                <Image alt='bus' width={35} height={35} className='bg-white shadow-md p-1.5 rounded-full absolute right-[35px] top-[17%]' src="/bus.svg"/>
                <Image alt='plane' width={35} height={35} className='bg-white shadow-md p-1.5 rounded-full absolute right-[240px] bottom-[-10px]' src="/plane.svg"/>
            </div>
        </div>
    </div>
  )
}
