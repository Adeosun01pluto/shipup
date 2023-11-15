import Image from "next/image";

export default function Operation() {
  return (
    <div>
      <div className="md:w-[95%] mx-auto relative min-h-[600px] mb-12">
        <Image alt="service" className="absolute top-[80px] left-12" width={200} height={200} src="/service_bus.svg" />
        <h2 className='text-2xl text-center pt-48 pb-24 '><span className='font-semibold service'>Operation </span> Mode</h2>
        <div className="w-[80%] flex flex-col gap-5 mx-auto">
          <div className="flex items-center md:flex-row flex-col">
            <div className="flex-1">
              <div className="flex items-center pb-6 gap-3">
                <span className="bg-[#230B34] text-white p-2 px-3 flex w-[40px] h-[40px] items-center justify-center text-center rounded-full">1</span> <span className="text-2xl font-semibold text-[#F67366]">Connect</span>
              </div>
              <p className="text-sm w-[70%]">Youre currently running your store on Shopify, WooCommerce, or any other platform. As a first step, youll connect your store with our platform.</p>
            </div>
            <div className='max-h-[300px] mx-auto w-full md:p-0  flex-1'>
                <Image
                    src="/operation1.svg"
                    alt="Hero"
                    width={100}
                    height={100}
                    quality={100}
                    style={{
                        objectFit: 'contain',
                    }}
                    className=' w-full h-[300px] object-cover'
                />
            </div>
          </div>
          {/*  */}
          <div className=" relative flex items-center md:flex-row flex-col-reverse">
            <div className='max-h-[300px] mx-auto w-full md:p-0  flex-1'>
                <Image
                  src="/operation2.svg"
                  alt="Hero"
                  width={100}
                  height={100}
                  quality={100}
                  style={{
                      objectFit: 'contain',
                  }}
                  className=' w-full h-[300px] object-cover'
                />
            </div>
            <div className="flex-1">
              <div className="flex items-center pb-6 gap-3">
                <span className="bg-[#230B34] text-white p-2 px-3 flex w-[40px] h-[40px] items-center justify-center text-center rounded-full">2</span> <span className="text-2xl font-semibold text-[#F67366]">Store</span>
              </div>
              <p className="text-sm w-[70%]">Then, you can send us your inventory and the fun begins. Well choose a delivery day together so your fulfilment is not interrupted.</p>
            </div>
            <Image
              src="/operation_line.svg"
              alt="Hero"
              width={100}
              height={100}
              quality={100}
              style={{
                objectFit: 'contain',
              }}
              className=' w-full absolute left-[-70px] top-[-30px] z-[-9] hidden md:block h-[300px] object-cover'
            />
          </div>
          {/*  */}
          <div className="flex items-center md:flex-row flex-col">
            
            <div className="flex-1">
              <div className="flex items-center pb-6 gap-3">
                <span className="bg-[#230B34] text-white p-2 px-3 flex w-[40px] h-[40px] items-center justify-center text-center rounded-full">3</span> <span className="text-2xl font-semibold text-[#F67366]">Ship</span>
              </div>
              <p className="text-sm w-[70%]">We pick, pack and ship all incoming orders directly from our own warehouse until 12pm on the same day,</p>
            </div>
            <div className='max-h-[300px] mx-auto w-full md:p-0  flex-1'>
                <Image
                  src="/hero.svg"
                  alt="Hero"
                  width={100}
                  height={100}
                  quality={100}
                  style={{
                      objectFit: 'contain',
                  }}
                  className=' w-full h-[300px] object-cover'
                />
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}
