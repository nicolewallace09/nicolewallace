import React from 'react';
import data from "../resumeData.json";

   // if i want to add back contact details
   //  <div className="columns contact-details">
   //                <h2>Contact Me </h2>
   //                <p className="address">
	// 					   {/* <span>{name}</span><br /> */}
	// 					   <span>{street}<br />
	// 					         {city} {state}
   //                 </span><br />
	// 					   <span>{phone}</span><br />
   //                   <span>{email}</span>
	// 				   </p>
   //             </div> 

function About() {
    return (
      <>
      <section id="about">
      <div className="row">
         {/* <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="Profile Pic" />
         </div> */}
         <div className="tweleve columns main-col">
            <h2>ABOUT ME</h2>

            <p>{data.main.bio}</p>
            <div className="row">
           
               <div className="columns download">
                  <p>
                  <a href="https://www.dropbox.com/s/ahbf0lizg0rghlh/Nicole%20Wallace%20-%20Resume%20%282021%29.pdf?dl=0" download className="button">DOWNLOAD MY RESUME</a>
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
   </>
    );
  }

export default About;


