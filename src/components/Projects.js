import React, { Component } from 'react';
import ProjectItem from './ProjectItem.js';

class Projects extends Component {
  
  deleteProject(projectID) {
    this.props.onDelete(projectID);
  }

  render() {
    let projectItems;

    if(this.props.projects) {
      projectItems = this.props.projects.map(project => {
        return(
          <ProjectItem onDelete={this.deleteProject.bind(this)} key={project.id} project={project}/>
        );
      });
    }

    return (
      <div className="Projects">
          <h3> Latest Projects </h3>
          {projectItems}
      </div>
    );
  }
}

export default Projects;
