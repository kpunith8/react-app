import React, { Component } from 'react';
import uuid from 'uuid';
import jquery from 'jquery';
import Projects from './components/Projects';
import AddProject from './components/AddProject';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            projects: [],
            todos: []
        }
    }

    getTodos() {
        jquery.ajax({
            url: 'https://jsonplaceholder.typicode.com/todos',
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.setState({
                    todos: data
                }, function(){
                    console.log(this.state.todos);
                });
            }.bind(this),
            error: function(xhr, status, err) {
                console.log(err);
            }
        });
    }

    getProjects() {
        this.setState({
            projects: [
                {
                    id: uuid.v4(),
                    title: 'Business Website',
                    category: 'Wed Design'
                },
                {
                    id: uuid.v4(),
                    title: 'Social App',
                    category: 'Mobile Development'
                },
                {
                    id: uuid.v4(),
                    title: 'E-Commerce Shopping Car',
                    category: 'Web Development'
                }
            ]
        });
    }

    componentWillMount() {
        this.getProjects();
        this.getTodos();
    }

    // componentDidMount() {
    //     this.getTodos();
    // }

    handleAddProject(project) {
        let projects = this.state.projects;
        
        projects.push(project);
        this.setState({
            projects: projects
        });
    }

    handleDeleteProject(projectID) {
        let projects = this.state.projects;
        let index = projects.findIndex(x => x.id === projectID);

        projects.splice(index, 1);
        this.setState({
            projects: projects
        });
    }

    // List todo items as listed using, Projects.js and ProjectItem.js
    render() {
        return (
        <div className="App">
            <AddProject addProject={this.handleAddProject.bind(this)} />
            <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)}/>
        </div>
        );
    }
}

export default App;
