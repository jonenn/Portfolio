import React from 'react';

const Project = () => {
   return (
      <div className="project__container">
         <div className="project__screens"></div>
         <div className="project__description">
            <h3 className="project__year">year</h3>
            <h4 className="project__title"></h4>
            <p className="project__content"></p>
            <div className="project__buttons">
               <button className="project__button"></button>
               <button className="project__button"></button>
            </div>
            <div className="project__techstack">
               <div className="project__tech"></div>
            </div>
            <div className="project__labels">
               <div className="project__caption"></div>
               <div className="project__label"></div>
               <div className="project__label"></div>
            </div>
         </div>
      </div>
   );
};

export { Project };
