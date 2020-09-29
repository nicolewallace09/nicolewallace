import React, { Component } from 'react';

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

class About extends Component {
  render() {

    if(this.props.data){
      // var name = this.props.data.name;
      // var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      // var street = this.props.data.address.street;
      // var city = this.props.data.address.city;
      // var state = this.props.data.address.state;
      // var zip = this.props.data.address.zip;
      // var phone= this.props.data.phone;
      // var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
      <div className="row">
         {/* <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="Profile Pic" />
         </div> */}
         <div className="tweleve columns main-col">
            <h2>ABOUT ME</h2>

            <p>{bio}</p>
            <div className="row">
           
               <div className="columns download">
                  <p>
                     <a href={resumeDownload} className="button">DOWNLOAD MY RESUME</a>
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;


