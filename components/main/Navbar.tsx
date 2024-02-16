"use client";
import { Socials } from "@/constants";
import { Link, Element } from 'react-scroll'; // Import from react-scroll
import Image from "next/image";
// import Scrollbar from 'smooth-scrollbar';

// Scrollbar.initAll();
const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
        <span className="font-bold ml-[10px] hidden md:block text-gray-300" style={{ textDecoration: 'none' }}>
            Kapish Jain
          </span>
        </a>
        <div className="w-[28rem] ml-14 h-full flex flex-row items-center justify-between md:mr-30">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <Link to="about-me" smooth={true} className="cursor-pointer text-white focus:outline-none hover:text-gray-300" style={{ textDecoration: 'none' }}>
              About me
            </Link>
            <Link to="skills" smooth={true} className="cursor-pointer text-white focus:outline-none hover:text-gray-300" style={{ textDecoration: 'none' }}>
              Skills
            </Link>
            <Link to="projects" smooth={true} className="cursor-pointer text-white focus:outline-none hover:text-gray-300" style={{ textDecoration: 'none' }}>
              Projects
            </Link>
          </div>
        </div>

        <div className="flex flex-row gap-5">
          {Socials.map((social) => (
            <a
            key={social.name}
            href={social.link}
            target="_blank"  // Add this attribute to open the link in a new tab
            rel="noopener noreferrer"  // Use these attributes for security
            >
            <Image
              src={social.src}
              alt={social.name}
              key={social.name}
              width={social.width}
              height={social.height}
              style={{ marginTop: social.mar }}
            /></a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
