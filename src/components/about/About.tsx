
import { motion } from "framer-motion";
import { styles } from "../../styles";
import { services } from "../../constans";
import { fadeIn, textVariant } from "../../utils/motions";
import SectionWrapper from "../../hoc/SectionWrapper";
import ServiceCard from "./ServiceCard";



const About = () => {
  return (
    <div id="about">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        className=" mt-4 text-secondary text-[17px] max-w-7xl leading-[30px] "
        variants={fadeIn("", "", 0.1, 1)}
      >
        I am a certified web developer specializing in the MERN stack (MongoDB, Express.js, React.js, and Node.js). With a strong foundation in modern web technologies, I have successfully built and deployed scalable, high-performance applications that prioritize both functionality and user experience.
        One of my key projects includes developing and launching the official website for A&O Autoservice, where I designed and implemented a fully functional, user-friendly, and secure platform tailored to the company's needs. This experience has strengthened my ability to create solutions that align with real-world business requirements while maintaining high standards in code quality, security, and performance optimization.
        I am passionate about continuous learning and staying ahead of the latest trends in web development. My goal is to contribute to innovative and impactful projects, collaborating with developers, designers, and product teams to build cutting-edge digital solutions.
        Lets connect and create something amazing together! 🚀
      </motion.p>
      <div className=" mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};



const aboutWrapper = SectionWrapper({ Component: About, IdName: "about" });
export default aboutWrapper


