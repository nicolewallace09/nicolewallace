import React, { Component } from 'react';
import Typical from 'react-typical';
import data from "../resumeData.json";

class Header extends Component {
  render() {

    if(data){
      var profilepic= "images/"+data.main.image;
      var networks= data.main.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <>
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
	         <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#portfolio">Portfolio</a></li>
            {/* <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li> */}
            {/* <li><a className="smoothscroll" href="#contact">Contact</a></li> */}
         </ul>

      </nav>

      <div className="row banner">
      <div className="twelve columns">
            <img className="profile-pic" src={profilepic} alt="Profile Pic" />
         </div>
         <div className="banner-text">
            <h1 className="responsive-headline">{data.main.name}</h1>
            
            <Typical
            loop={Infinity}
            wrapper="h2"
            steps={[
            'Full Stack Software Engineer', 1000
            ]}
            />
          
            <hr/>
            <ul className="social">
               {networks}
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
   </>
    );
  }
}

export default Header;
