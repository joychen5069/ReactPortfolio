import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if(this.props.data){
      // var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p>{education.description}</p></div>
      })
      var work = this.props.data.work.map(function(work){
        return <div key={work.company}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
      <a className="projectLinks" href={work.github}>GitHub: {work.github}</a><br></br>
      <a className="projectLinks" href={work.url}>Demo: {work.url}</a>
            <p>{work.description}</p>
        </div>
      })
      var skills = this.props.data.skills.map(function(skills){
        // var className = ''+
        skills.name.toLowerCase();
        return <div className="skills"><i className={skills.link}><em> {skills.name}</em></i></div>
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
            <h1><span>Projects</span></h1>
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

            <p>
            

				
				   <ul className="skills">
					  {skills}
					</ul>
          </p>
			</div>
      </div>
   </section>
    );
  }
}

export default Resume;
