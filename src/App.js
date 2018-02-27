import React, { Component } from 'react';
import uuid from 'uuid';
import jquery from 'jquery';
import axios from 'axios';
import Projects from './components/Projects';
import AddProject from './components/AddProject';
import Home from './Home';
import './App.css';
import firebase from 'firebase';

firebase.initializeApp({
    apiKey: "AIzaSyDbbCShxmRhzRnlh47VTM0QEbtYki53K8E",
    authDomain: "sample-react-auth.firebaseapp.com",
    databaseURL: "https://sample-react-auth.firebaseio.com",
    projectId: "project-72400274528",
    storageBucket: "sample-react-auth.appspot.com",
    messagingSenderId: "72400274528"
});

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: [],
            todos: [],
            user: null
        };
    }

    getTodos() {
        jquery.ajax({
            url: 'https://jsonplaceholder.typicode.com/todos',
            dataType: 'json',
            cache: false,
            success: function (data) {
                this.setState({
                    projects: data
                }, function () {
                    console.log(this.state.todos);
                });
            }.bind(this),
            error: function (xhr, status, err) {
                console.log(err);
            }
        });
    }

    getBooks() {
        jquery.ajax({
            url: 'http://localhost:3000/api/books',
            dataType: 'json',
            cache: false,
            success: function (data) {
                console.log('Result: ' + JSON.stringify(data));
            }.bind(this),
            error: function (xhr, status, err) {
                console.log(err);
            }
        });
    }

    updateUser() {
        axios.post('http://localhost:3000/users', {
            name: 'K Punith',
            id: 1,
            age: 33,
            sex: 'Male'
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
        });
    }

   getUsers() {
        axios.get('http://localhost:3000/users')
            .then(function (response) {
                console.log('Response from GET request to axios:');
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
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
        //this.getProjects();
        //this.getTodos();
        this.getUsers();
        this.updateUser();
        //this.getBooks();
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({ user: user });
            }
            else {
                this.setState({ user: null });
            }
        });
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

    handleAuth() {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(result => console.log('User Email: ' + result.user.email))
            .catch(error => console.log('Error Code: ' + error.code + ' Message: ' + error.message));

    }

    handleLogout() {
        firebase.auth().signOut()
            .then(() => console.log('Logged out successfully'))
            .catch(error => console.log('Error Code: ' + error.code + ' Message: ' + error.message));
    }

    // List todo items as listed using, Projects.js and ProjectItem.js
    render() {
        return (
            <div>
                <Home
                    appName={'Sample Login using oAuth 2'}
                    user={this.state.user}
                    onAuth={this.handleAuth.bind(this)}
                    onLogout={this.handleLogout.bind(this)}
                />
            </div>
            // <div className="App">
            //     <AddProject addProject={this.handleAddProject.bind(this)} />
            //     <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)}/>
            // </div>
        );
    }
}

export default App;
