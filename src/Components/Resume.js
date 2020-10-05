import React, { Component } from 'react';
import Modal from 'react-modal';
import data from "../resumeData1.json";

class Resume extends Component {
  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p>{education.description}</p></div>
      })
      var work = this.props.data.work.map(function(work){
        return <div key={work.company}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <p>{work.description}</p>
        </div>
      })
      var skills = this.props.data.skills.map(function(skills){
        var className = 'bar-expand '+skills.name.toLowerCase();
        return <li key={skills.name}><span style={{width:skills.level}}className={className}></span><em>{skills.name}</em></li>
      })

      var certificates = this.props.data.certificates.map(function(certificates){
        var certImage = 'images/portfolio/'+certificates.image;
        return <div key={certificates.title} className="columns portfolio-item">
           <div className="item-wrap">
            {/* <a href={certificates.url} title={certificates.title} onClick={Modal}> */}
               <img alt={certificates.title} src={certImage} onClick={Modal}/>
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>{certificates.title}</h5>
                     <p>{certificates.description}</p>
                  </div>
                </div>
              {/* <div className="link-icon"><i className="fa fa-link"></i></div> 
            </a> */}
          </div>
        </div>
      
      })
    }

    return (
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
      
      <div className="row certificates">

        <div className="three columns header-col">
          <h1><span>CERTIFICATES</span></h1>
        </div>

   
        <div className="nine columns main-col border-1px bgrid-quarters s-bgrid-thirds cf" id="portfolio-wrapper">
        {certificates}
        </div>
     
      </div>


      </div>
   </section>
    );
  }
}

export default Resume;
