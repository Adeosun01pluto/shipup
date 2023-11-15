import Image from "next/image";
import Link from "next/link";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";

export default function Header() {
  return (
    <div className="w-full h-24">
        <div className="w-full px-4 lg:px-0 md:w-[95%] flex justify-between items-center mx-auto h-full">
            <Link href="/" className="">
                <Image
                    src="/ShipUp.svg"
                    alt="logo"
                    width={60}
                    height={60} 
                />
            </Link>
            <ul className="hidden lg:flex text-sm items-center text-[#9593A0] lg:gap-2">
                <li className="py-1 px-2">Company</li>
                <li className="py-1 px-2">Services</li>
                <li className="py-1 px-2">Solutions</li>
                <li className="py-1 px-2">Industries</li>
                <li className="py-1 px-2">Insights</li>
                <li className="py-1 px-2">News and Media</li>
            </ul>
            <div className="flex items-center gap-3">
                <div className="hidden md:flex items-center gap-3">
                    <button className="border-[#002E54] text-[#002E54] py-2 px-3 text-sm rounded-md border-2">Request Quote</button>
                    <button className="bg-[#002E54] text-[#fff] py-2 px-3 text-sm rounded-md">Join Now</button>
                </div>
                <div className="lg:hidden block"><HiOutlineBars3CenterLeft size={25} color="#F67366"/></div>
            </div>
        </div>
    </div>
  )
}
