import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import AbstractCanvas from "./canvas/Abstract";

const Hero = ({ isMobile }) => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#00c45c]' />
          <div className='w-1 sm:h-80 h-40 green-gradient' />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#00c45c]'>Chris</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white`}>
            I develop just about everything. <br className='sm:block hidden' />{" "}
            I am always looking for new challenges and experiences.
          </p>
        </div>
      </div>
      <AbstractCanvas isMobile={isMobile} />
      {isMobile && (
        <div className='relative xs:bottom-5 bottom-40 w-full flex justify-center items-center'>
          <a href='#about'>
            <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
              <motion.div
                animate={{ y: [0, 24, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className='w-3 h-3 rounded-full bg-secondary mb-1'
              />
            </div>
          </a>
        </div>
      )}
    </section>
  );
};

export default Hero;
