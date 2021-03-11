import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './Home.js';
import About from './About.js';
import Profile from './Profile.js';

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
      </ul>
      <hr />
      <Route path="/" component={Home} exact />
      <Route path="/about" component={About} />
      <Route path="/profile/:username" component={Profile} />
    </div>
  );
}

export default App;