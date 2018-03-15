import React, { Component } from 'react';
import axios from 'axios';
import UserHome from './components/UserHome';
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

/**
 * Firebase authentication using gmail
*/
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null
        };
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
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    componentWillMount() {
        this.getUsers();
        this.updateUser();
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({ user: user });
            }
            else {
                this.setState({ user: null });
            }
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

    render() {
        return (
            <div>
                <UserHome
                    appName={'Sample Login using oAuth 2'}
                    user={this.state.user}
                    onAuth={this.handleAuth.bind(this)}
                    onLogout={this.handleLogout.bind(this)}
                />
            </div>
        );
    }
}

export default App;
