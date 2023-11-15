import Image from "next/image";

export default function Warehouse() {
  return (
    <div className="p-4 bg-[#EEF1FA] max-w-full">
      <div className="md:w-[95%] w-full">
        <h2 className='text-2xl text-center pt-12 pb-12 md:pb-32 '><span className='font-semibold service'>Warehouse </span> Onsite</h2>
        <div className="w-full">
          <Image
            src="/map.svg"
            alt="Hero"
            width={100}
            height={100}
            quality={100}
            style={{
              objectFit: 'contain',
            }}
            className=' w-[100%] scale-[1.1] md:scale-[1.6] h-[300px] object-cover'
          />
        </div>
        <div className=' justify-center flex gap-4 items-center mt-8 w-full md:w-[95%] mx-auto md:p-4'>
          <button className='bg-[#2C2D5B] text-white py-3 px-6 rounded-md'>Request Quote</button>
          <button className='bg-[#fff] text-[#2C2D5B] py-3 px-6 rounded-md'>Join Now</button>
        </div>
      </div>
    </div>
  )
}
