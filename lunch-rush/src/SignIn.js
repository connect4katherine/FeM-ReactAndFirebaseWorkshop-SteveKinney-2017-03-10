import React, { Component } from 'react';

// importing the pieces we need to provide authentication
import { auth, googleAuthProvider } from './firebase';

class SignIn extends Component {
  render() {
    return (
      <div className="SignIn">
        <button onClick={()=>auth.signInWithPopup(googleAuthProvider)}>
          sign IN!
        </button>
      </div>
    );
  }
}

export default SignIn;
