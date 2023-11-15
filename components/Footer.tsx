import Image from "next/image";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaInstagram } from "react-icons/fa6";

export default function Footer() {
  return (
    <div>
      <div className="bg-[#2C2D5B] w-full min-h-64">
        <div className="pb-12 text-white text-sm pt-4 gap-2 w-[80%] mx-auto grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 ">
          <div className="w-[95%]">
            <h2 className="text-lg font-semibold py-4">ShipUp</h2>
            <p className="">ShipUp delivers an unparalleled customer service through dedicated customer teams, engaged people working in an agile culture, and a global footprint</p>
          </div>
          <div className="w-full md:w-[70%] mx-auto">
            <h2 className="text-lg font-semibold py-4">Explore</h2>
            <ul>
              <li>About Us</li>
              <li>Our Warehouses</li>
              <li>Blog</li>
              <li>News and Media</li>
            </ul>
          </div>
          <div className="w-full md:w-[70%] mx-auto">
            <h2 className="text-lg font-semibold py-4">Legal</h2>
            <ul>
              <li>Term</li>
              <li>Privacy</li>
            </ul>
          </div>
          <div className="w-full md:w-[70%] mx-auto">
            <h2 className="text-lg font-semibold py-4">Social Media</h2>
            <ul className="flex gap-2 items-center">
              <span className="bg-white rounded-full p-3"><FaFacebookF color="#2C2D5B" size={15} /></span>
              <span className="bg-white rounded-full p-3"><FaTwitter color="#2C2D5B" size={15} /></span>
              <span className="bg-white rounded-full p-3"><IoLogoWhatsapp color="#2C2D5B" size={15} /></span>
              <span className="bg-white rounded-full p-3"><FaInstagram color="#2C2D5B" size={15} /></span>
            </ul>
          </div>
        </div>

        <div className="py-4 w-[80%] flex flex-col items-center  mx-auto">
          <div className="w-full h-[1.5px] my-4 bg-[#E5E5E5]/50 " />
          <Link href="/" className="">
            <Image
                src="/ShipUp.ng.svg"
                alt="logo"
                width={90}
                height={90} 
              />
            </Link>
        </div>
      </div>
    </div>
  )
}
