import React from 'react';
// import data from "../resumeData.json";

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
         <div className="five columns">
            <img className="about-pic"  src='images/About_Me-removebg-preview.png' alt="aboutpic" />
         </div>
         <div className="seven columns main-col">
            <h2>Hello World, I'm Nicole!</h2>
            <p>I am Full Stack Software Engineer in the SF Bay Area with a Bachelor’s Degree and 2+ years professional experience in Business Administration combined with 3 Liberal Arts Associate’s Degrees in Arts and Sciences. I am a naturally curious person which makes me want to always learn new things, a problem-solver who questions everything, and a hard worker who doesn't take life too seriously and enjoys the little things.</p>
            <p>When I was younger I was exposed to coding for fun, but didn't know I could make a career out of it. Being from a small city across San Francisco, I wasn't exposed to all the opportunities I could make for myself. For years, I wanted to be a Software Engineer, but had self-doubt and did not know if I could achieve this. Then I decided to switch careers during the start of the global pandemic and quit my full time job to fulfill my dreams of learning how to code. </p>
            <p>I took this risk to challenge myself and to enter a career/industry that will always challenge me and allow me to learn. I wanted to be able to continuously grow within my career and to be hands on to make an impact. I graduated from UC Berkeley's Full Stack Coding Bootcamp in August 2020 and I'm glad I made the decision to finally make the jump. Now, I am looking for my first professional role as a Software Engineer and looking for a team to build with and learn from.</p>
            <div className="row">
           
               <div className="columns download">
                  <p>
                  <a href="https://www.dropbox.com/s/m8a0he8l09nwyq0/Nicole%20Wallace%20-%20Software%20Engineer%20Resume%20v2021.pdf?dl=0" download className="button">DOWNLOAD MY RESUME</a>
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


