
import { motion } from "framer-motion";
import { styles } from "../../styles";
import { projects } from "../../constans";
import { fadeIn, textVariant } from "../../utils/motions";
import SectionWrapper from "../../hoc/SectionWrapper";
import ProjectCard from "./ProjectCard";



  const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionHeadText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>
      <div className=" w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className=" mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>
      <div className=" mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id} 
            project={project}
            index={index}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper({ Component: Works, IdName: "work" });

