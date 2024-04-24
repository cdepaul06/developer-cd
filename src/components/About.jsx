import React, { useCallback } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I have been developing professionally for around two years. This
        portfolio will showcase projects I have worked on during my time at Iron
        Mountain, Kent State University, and Allstate Insurance Company. There
        are also some personal projects I have worked on in my free time.
        <br /> <br />I am a skilled developer that likes to build new and
        exciting things. As a Full Stack Developer, I am able to design frontend
        applications with good UI/UX practices as well as the coinciding logic
        in the backend API. The main languages and libraries I use are React.js
        and C#, but I challenge myself frequently to learn new technologies,
        libraries, and languages. I am also well versed in Java, VB, .NET, and
        Redux. I also have experience with content creation using Adobe
        Photoshop and Blender 3D. My current work is developing an internal
        warehouse management system called PLWTO, which uses React, Redux, and a
        backend C# API. I also enjoy freelance work, so if you're looking for a
        developer, feel free to contact me and we will create something amazing!
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
