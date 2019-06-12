import './App.css';

import React from 'react';

import authenticate from './components/Authentication/authenticate';
import LoginPage from './components/Login/Login';
import PostPage from './components/PostSection/PostPage';





class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="post-container">
        <PostPage />
      </div>
    )
  }
}

export default authenticate(App)(LoginPage);