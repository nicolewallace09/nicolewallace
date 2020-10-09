import React, { Component } from 'react';
// import Modal from 'react-modal';
import data from "../resumeData.json";

class Resume extends Component {
  render() {

    if(data){
      var skillmessage = data.resume.skillmessage;
      var education = data.resume.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p>{education.description}</p></div>
      })
      var work = data.resume.work.map(function(work){
        return <div key={work.company}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <p>{work.description}</p>
        </div>
      })
      var skills = data.resume.skills.map(function(skills){
        var className = 'bar-expand '+skills.name.toLowerCase();
        return <li key={skills.name}><span style={{width:skills.level}}className={className}></span><em>{skills.name}</em></li>
      })
      
      
    }

    return (
      <>
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>


      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
      </div>

      <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>

         <div className="nine columns main-col">

            <h1 className="text-center">{skillmessage}
            </h1>
          

            <div className="bars">
              <ul className="skills">
                {skills}
              </ul>
            </div>
          

            <div className="additional-skills text-center">
              <h1>Additional Skills:</h1><p>jQuery, Frameworks (Bootstrap, Materialize), Handlebars, Express, Inquirer, Restful API's, Git, Responsive Web Design, Recharts, GraphQL/Apollo</p>
            </div>
          
			</div>
  
      </div>
   </section>
   </>
    );
  }
}

export default Resume;
