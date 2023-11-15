import Image from 'next/image'
import React from 'react'

export default function Service() {
  return (
    <div>
      <div className="min-h-[500px] w-full bg-[#F4F6F9] p-4 ">
        <div className='flex justify-between items-center w-full md:w-[95%] mx-auto md:p-4'>
          <div>
            <h2 className=' service text-2xl '><span className='font-semibold'>Services</span> We Offer</h2>
          </div>
          <div>
            <Image alt="service" className='hidden md:block' width={200} height={200} src="/service_bus.svg" />
          </div>
        </div>
        <div className='grid py-4 md:grid-cols-3 justify-between gap-3 items-center md:w-[95%] mx-auto md:p-4'>
          <div className='w-[95%] lg:w-[90%] flex flex-col min-h-[200px] md:shadow-none shadow-lg rounded-md p-3'>
            <div className='p-2 bg-white rounded-full w-12'>
              <Image alt="service" width={50} height={50} src="/bus.svg" />
            </div>
            <h2 className='text-lg font-semibold py-3 text-[#32C2D5B]'>Warehousing Services</h2>
            <p className='text-sm text-[#4F4F4F] flex-1'>A pay as-you-go solution for: pallet storage, inventory management, fulfillment(e.g. pick and pack), in/out-bound solutions, and more.</p>
          </div>
          <div className='w-[95%] lg:w-[90%] flex flex-col min-h-[200px] md:shadow-none shadow-lg rounded-md p-3'>
            <div className='p-2 bg-white rounded-full w-12'>
              <Image alt="service" width={50} height={50} src="/plane.svg" />
            </div>
            <h2 className='text-lg font-semibold py-3 text-[#32C2D5B]'>Global Freight</h2>
            <p className='text-sm text-[#4F4F4F] flex-1'>Search and compare the best shipping rates among dozens of trusted logistic partners for the last mile delivery and freight.</p>
          </div>
          <div className='w-[95%] lg:w-[90%] flex flex-col min-h-[200px] md:shadow-none shadow-lg rounded-md p-3'>
            <div className='p-2 bg-white rounded-full w-12'>
              <Image alt="service" width={50} height={50} src="/plane.svg" />
            </div>
            <h2 className='text-lg font-semibold py-3 text-[#32C2D5B]'>PACKAGING SOLUTIONS</h2>
            <p className='text-sm text-[#4F4F4F] flex-1'>Our packaging solutions are optimized for each individual customer and are selected </p>
          </div>
        </div>
        <div className=' justify-center flex gap-4 items-center w-full md:w-[95%] mx-auto md:p-4'>
          <button className='bg-[#2C2D5B] text-white py-3 px-6 rounded-md'>Request Quote</button>
          <button className='bg-[#fff] text-[#2C2D5B] py-3 px-6 rounded-md'>Join Now</button>
        </div>
      </div>
    </div>
  )
}
