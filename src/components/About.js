import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">
            <div className="three columns">

               <img className="profile-pic"  src="images/profilepic.jpg" alt="" />

            </div>

            <div className="nine columns main-col">

               <h2>Sobre mim</h2>
               <p>
               {
                 resumeData.aboutme
               }
                </p>
                <p style={{ fontWeight: "bold", color: "#11ABB0", fontSize: "2rem"}}>
                   {
                      resumeData.newOportunity
                   }
                </p>

               <div className="row">

                  <div className="columns contact-details">

                  <h2>{resumeData.name}</h2>
                  <h3>{resumeData.number}</h3>
                  <h3>{resumeData.email}</h3>
                  <p className="address">
       					<span>
                     {resumeData.address}
                    </span>
       				</p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}