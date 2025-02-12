
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motions";
import gitHupIcon from "../../assets/github.png";
import { IProject } from "../../interface";
import { NavLink } from "react-router-dom";


interface IProjectsCardProps {
  project: IProject;
  index: number;
}

const ProjectCard: React.FC<IProjectsCardProps> = ({ project, index }: IProjectsCardProps) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <NavLink to={project.link} target="_blank" rel="noopener noreferrer">
        <div
          
          className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
        >
          <div className="relative w-full h-[230px] cursor-pointer overflow-hidden">
            <img
              className="w-full h-full object-cover rounded-2xl hover:scale-110 hover:brightness-50 duration-500"
              src={project.image}
              alt={project.name}
            />
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                onClick={() => window.open(project.source_code_link, "_blank")}
              >
                <img className="w-1/2 h-1/2 object-contain" src={gitHupIcon} alt="gitHupIcon" />
              </div>
            </div>
          </div>
          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">{project.name}</h3>
            <p className="mt-2 text-secondary text-[14px]">{project.description}</p>
            
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <p className={`text-[14px] ${tag.color}`} key={tag.id}>
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </NavLink>
    </motion.div>
  );
};

export default ProjectCard;
