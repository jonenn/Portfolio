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
               <h3 className="project__year">year</h3>
               <h4 className="project__title">{project.title}</h4>
               <p className="project__content">{project.description}</p>
               <div className="project__buttons">
                  <button className="project__button"></button>
                  <button className="project__button"></button>
               </div>
               <div className="project__techstack">
                  <div className="project__tech"></div>
               </div>
               <div className="project__labels">
                  <div className="project__caption">Labels:</div>
                  <div className="project__label">{project.label1}</div>
                  <div className="project__label">{project.label2}</div>
               </div>
            </div>
         </div>
      )
   );
};

export { Project };
