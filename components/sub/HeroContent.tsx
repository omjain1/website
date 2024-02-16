"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
// import Typed from 'react-typed';
const HeroContent: React.FC = () => {
  const [showTyped, setShowTyped] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowTyped(true);
      
    }, 1000); 

    return () => clearTimeout(timeout);
  }, []);
  return (
    
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-sm pointer-events-none" style={{ userSelect: 'none' }}>
          Some Things Happen Because We Make Them Happen.
          </h1>
        </motion.div>
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-5 mt-2 text-5xl font-bold text-white max-w-[600px] w-auto h-auto"
          style={{ userSelect: 'none' }}
        > 
          <span>
            I&apos;m
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 pointer-events-none" style={{ userSelect: 'none' }}>
              {" "}
              Kapish Jain{" "}
            </span>
          </span>
        </motion.div>
        

        <TypeAnimation
        cursor={true}
        sequence={[
          500,
          'A Coder.',
          1000,
          'A Front End Developer.',
          1000,
          'A problem solver.',
          1000,
          'A....',
          1000,
          'A.... cool guy?',
          1000,
          "Ok...",
          1000,
          "Ok...  I'm running out of ideas...",
          1000,
          "Uhh...",
          1000,
          "Uhh... you can scroll down to see my projects now...",
          300,
          1000,
          "You're uh...",
          1000,
          "You're uh... still here?",
          1000,
          "Ok, this has been fun, but I'm gonna restart the loop now...",
          1000,
          "See ya! :)",
          500, 
        ]}
        speed={50}
        deletionSpeed={65}
        wrapper="h3"
        repeat={Infinity}
        className="text-3xl text-gray-400 mt-0 max-w-[600px] pointer-events-none"
        style={{ userSelect: 'none' }}
      />
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
          href="https://drive.google.com/file/d/1SqDnovf5Vt5LKYAYIX26kvYT_lczx5PR/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none' }}
        >
        Resume
        </motion.a>
      </div>
      
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/394189_code_github_repository_icon.svg"
          alt="work icons"
          height={450}
          width={450}
          style={{ userSelect: 'none', pointerEvents: 'none' }}
        />
      </motion.div>
    
      <motion.div
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
        <span>

        </span>
      </motion.div>
      
    </motion.div>
    
  );
};

export default HeroContent;
