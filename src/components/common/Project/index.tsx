import Image from 'next/image';
import './Project.scss';
import background from '../../../assets/ProjectBG.svg';

type ProjectTypes = {
   id: number;
   screenshot: string;
   year: string;
   title: string;
   description: string;
   deploymentLink: string;
   designLink: string;
   label1: string;
   label2: string;
};

type PortfolioTypes = {
   project: ProjectTypes;
};

const Project = ({ project }: PortfolioTypes) => {
   return (
      project && (
         <div className="project__container">
            <div className="project__subcontainer">
               <Image
                  src={background}
                  className="project__background"
                  alt="Project background"
               />
               <div className="project__window">
                  <div className="project__header">
                     <div className="project__controller">
                        <div className="project__button project__button--close"></div>
                        <div className="project__button project__button--minimize"></div>
                        <div className="project__button project__button--maximize"></div>
                     </div>
                     <div className="project__title"></div>
                  </div>
                  <Image
                     src={project?.screenshot}
                     className="project__screens"
                     alt="Project Screenshot"
                     width="666"
                     height="400"
                  />
               </div>
            </div>
            <div className="project__description">
               <h3 className="description__item description__item--year">
                  {project.year}
               </h3>
               <h4 className="description__item description__item--title">
                  {project.title}
               </h4>
               <p className="description__item description__item--content">
                  {project.description}
               </p>
               <div className="description__item--buttons">
                  <button className="description__item description__item--button">
                     View Design
                  </button>
                  <button className="description__item description__item--button">
                     View Deployment
                  </button>
               </div>
               <div className="stack__list">
                  <h4 className="description__item--title">Tech Stack</h4>
                  <div className="description__item description__item--tech">
                     React
                  </div>
               </div>
               <div className="description__item--labels">
                  <div className="description__item--caption">Labels:</div>
                  <div className="description__item description__item--label">
                     {project.label1}
                  </div>
                  <div className="description__item description__item--label">
                     {project.label2}
                  </div>
               </div>
            </div>
         </div>
      )
   );
};

export { Project };
