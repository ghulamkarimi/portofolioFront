import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
const Hero = () => {
  return (
    <section className=" relative w-full h-screen mx-auto m">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className=" flex flex-col justify-center items-center mt-5">
          <div className=" w-5 h-5 rounded-full bg-[#915eff]" />
          <div className=" w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
         <div className=" flex gap-2 items-center"> <span>  Hi</span> <img className=" w-20 h-20 rounded-full" src="./ghulam.png" alt="" />,</div> 
         I'm <span className=" text-[#915eff]">Ghulam Karimi</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop , user
            <br className=" sm:block hidden" /> interfaces and web application.
          </p>
        </div>
      </div>
     <div className=" w-full  h-full absolute top-32 ">
         
     <ComputersCanvas />
     </div>

      <div className=" absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a  href="#about">
          <div className=" w-[35] h-[64] rounded-3xl border-4 border-secondary flex items-start justify-center p-2 ">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className=" w-3 h-4 rounded-full bg-secondary mb-5"
            ></motion.div>
          </div>
        </a>
      </div>
    </section>
  );
};
 
export default Hero;
