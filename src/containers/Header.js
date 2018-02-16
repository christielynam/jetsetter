import React, { Component } from 'react';
import firebase from 'firebase';
import '../utils/firebase';
import { connect } from 'react-redux';
import { storeUser, removeUser } from '../actions';

class Header extends Component {
  constructor() {
    super()
    this.state = {
      accouuntStatus: ''
    }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const name = user.displayName;
        const email = user.email;
        this.props.storeUser(name, email);
        this.setState({ accountStatus: 'Log Out' });
      } else {
        this.setState({ accountStatus: 'Sign In with Google' });
      }
    })
  }

  signIn = () => {
    const auth = firebase.auth();
    const googleProvider = new firebase.auth.GoogleAuthProvider();

    auth.signInWithPopup(googleProvider)
      .then(result => {
        const name = result.user.displayName;
        const email = result.user.email;
        this.props.storeUser(name, email);
        this.setState({ accountStatus: 'LOG OUT' });
      })
      .catch(error => console.log({ error }));
  }

  signOut = () => {
    const auth = firebase.auth();
    auth.signOut();
    this.props.removeUser();
    this.setState({ accountStatus: 'Sign in with Google' });
  }

  toggleAccountStatus = () => {
    const user = firebase.auth().currentUser;
    user ? this.signOut() : this.signIn()
  }

  render() {
    const { accountStatus } = this.state
    return (
      <header className='app-header'>
        <h1 className='app-title'>Jetsetter</h1>
        <p
          className='account-status'
          onClick={this.toggleAccountStatus}>
          {accountStatus}
        </p>
      </header>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.user
})

const mapDispatchToProps = (dispatch) => ({
  storeUser: (name, email) => dispatch(storeUser(name, email)),
  removeUser: () => dispatch(removeUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
