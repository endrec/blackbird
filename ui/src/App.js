import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';

import Poller from './components/Poller';
import Tutorials from './components/Tutorials';

const App = () =>
  <div className="app">
    <div className="container">
      <div className="diagnostics">
        <a href="/ambassador/" className="blue-button">Diagnostics</a>
      </div>
      <h4 className="label">Demo Microservices</h4>
      <div className="module">
        <div className="module-header">
          <h1 className="text-left">Demo App</h1>
          <span className="env active">Prod</span>
          <span className="env">Dev</span>
        </div>
        <div className="pollers">
          <Poller endpoint="python-api"/>
          <Poller endpoint="java-spring-api"/>
          <Poller endpoint="python-api"/>
        </div>
      </div>
      <h4 className="label">Get Started</h4>
      <Tutorials />
    </div>
  </div>;

export default App;
