import React, { Component } from 'react';
import uuid from 'uuid';

class AddProject extends Component {
  constructor() {
    super();
    this.state = {
      newProject: {}
    }
  }

  static defaultProps = {
    categories: ['Web Design', 'Web Developemnt', 'Mobile Development']
  }

  handleSubmit(e) {
    if(this.refs.title.value === '') {
      alert('Title is required!');
    } else {
      this.setState({
        newProject: {
          id: uuid.v4(),
          title: this.refs.title.value,
          category: this.refs.category.value
        }
      }, function() {
        this.props.addProject(this.state.newProject); // Add addProject call in calling component so that it gets the prop from here, and bind it in App to use it
      });
    }
    e.preventDefault();
  }
  render() {
    let categoryOptions = this.props.categories.map(category => {
      return <option key={category} value={category}> {category} </option>
    });

    return (
      <div className="AddProject">
          <h3>Add Project</h3>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <div>
              <label>Title</label><br />
              <input type="text" ref="title" />
              </div>
              <div>
              <br />
              <label>Category</label><br />
              <select ref="category">
                {categoryOptions}
              </select>
              </div>
              <br />
              <input type="submit" value="Submit" />
              <br />
          </form>
      </div>
    );
  }
}

export default AddProject;
