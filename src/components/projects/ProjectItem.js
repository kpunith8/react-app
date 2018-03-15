import React, { Component } from 'react';

class ProjectItem extends Component {

  deleteProject(projectID) {
    this.props.onDelete(projectID);
  }

  render() {
    return (
      <li className="ProjectItem">
          {this.props.project.title} - {this.props.project.category} <a href="#" onClick={this.deleteProject.bind(this, this.props.project.id)}>Delete</a>
      </li>
    );
  }
}
/*
ProjectItem.propTypes = {
  project: React.PropTypes.object,
  onDelete: React.PropTypes.func
}
*/

export default ProjectItem;
