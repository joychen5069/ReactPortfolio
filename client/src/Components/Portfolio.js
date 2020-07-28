import React, { Component } from 'react';

class Portfolio extends Component {
  render() {

    if(this.props.data){
      var projects = this.props.data.projects.map(function(projects){
        var projectImage = 'images/portfolio/'+projects.image;
        return <div key={projects.title} className="columns portfolio-item">
           <div className="item-wrap">
            <a href={projects.url} title={projects.title}>
               <img alt={projects.title} src={projectImage} />
               
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
            <h5 className="projects">
              {projects.title}
            </h5>
            <p className="projects">{projects.category}</p>
            <a className="projects" href={projects.url}>Live Demo</a>
            <a className="projects" href={projects.github}>Visit the Github page here</a>
          </div>
        </div>
      })
    }

    return (
      <section id="portfolio">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>Check Out More of My Works.</h1>

            <div id="portfolio-wrapper" className="bgrid-halves s-bgrid-thirds cf">
                {projects}
            </div>
          </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;
