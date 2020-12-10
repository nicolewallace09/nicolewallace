import React, { Component } from 'react';
import data from "../resumeData.json";

class Portfolio extends Component {
  render() {

    if(data){
      var projects = data.portfolio.projects.map(function(projects){
        var projectImage = 'images/portfolio/'+projects.image;
        var projectUrl = projects.url;
        var projectGit = projects.github; 
        return <div key={projects.title} className="columns portfolio-item">
           <div className="item-wrap">
            <a href={projectUrl} key={projects.id}>
               <img alt={projects.title} src={projectImage} />
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>{projects.title}</h5>
                     <p>{projects.category}</p>
                  </div>
                </div>
                </a>
          </div>
          <a href={projectUrl} target="_blank" rel="noopener noreferrer" className="deploy"><button type="button" className="repo"><i class="fa fa-link"></i></button></a>
          <a href={projectGit} target="_blank" rel="noopener noreferrer" className="repo"><button type="button" className="deploy"><i class="fa fa-github"></i></button></a>
        </div>
      })
      
      var certificates = data.resume.certificates.map(function(certificates){
        var certImage = 'images/portfolio/'+certificates.image;
        return <div key={certificates.title} className="columns portfolio-item">
           <div className="item-wrap">
        
               <img alt={certificates.title} src={certImage} />
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>{certificates.title}</h5>
                     <p>{certificates.description}</p>
                  </div>
                </div>
           
          </div>
        </div>

        
      })
    }

    return (
     <>
      <section id="portfolio">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>Full Stack Projects</h1>
           
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {projects}
            </div>
           

            <div className="github text-center">View additional projects <a href="https://github.com/nicolewallace09">here</a></div>
          </div>
      </div>

      <div className="row">
      <hr></hr>
      </div>

        
      <div className="row certificates">

        <div className="twelve columns collapsed">
          <h1>CERTIFICATES</h1>
        </div>

   
        <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
        {certificates}
        </div>
     
      </div>
   </section>
   </>
    );
  }
}

export default Portfolio;
