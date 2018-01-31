import React, { Component } from 'react';

class Tutorials extends Component {
  constructor() {
    super();
    this.state = {
      currentIdx: 0
    };

    this.changeTutorial = this.changeTutorial.bind(this);
  }

  changeTutorial(idx) {
    this.setState({
      currentIdx: idx
    });
  }

  render() {
    const { currentIdx } = this.state;

    return (
    <div className="tutorials text-left">
      <h2>Get Started</h2>
      <p>These tutorials will help you get the most out of Datawire applications.</p>
      <div className="tutorial-content">
        <ul className="options">
          <li onClick={() => this.changeTutorial(0)}>Make a code change. Blackbird makes it easy for developers to quickly code and test changes in Kubernetes.</li>
          <li onClick={() => this.changeTutorial(1)}>Canary test your change. Once you've tested your code change in dev, it's time to deploy as a canary. Blackbird makes this easy.</li>
          <li onClick={() => this.changeTutorial(2)}>Code locally. While Blackbird makes it easy to quickly make changes, sometimes you want real-time feedback. Telepresence lets you code locally against a remote Kubernetes cluster.</li>
        </ul>
        <div className="content">
          { currentIdx === 0 &&
            <div className="tutorial">
             <p>
             Blackbird integrates <a href="https://forge.sh"><code>Forge</code></a> to make it easy to deploy your service from source to Kubernetes. You've already used Forge to deploy this application, which consists of multiple services. In this tutorial, we'll make a code change to a single service, and push that change to a development environment.
             </p>
              <ol>
                <li>
                  Create a Git branch with a prefix of <code>dev</code>: <p><code>git checkout -b dev/my-first-change</code></p>
                </li>
                <li>
                  Make a change to your microservice.
                  <ul>
                   <li>If you prefer editing Python:
                     <ul>
                     <li>Open <code>python-api/App.py</code>.</li>
                     <li>Uncomment the line <code>environment="TEST"</code>.</li>
                     </ul>
                   </li>
                   <li>If you prefer editing Java:
                     <ul>
                     <li>Open <code>HelloController.java</code> in the <code>java-spring-api</code> service.</li>
                     <li>Uncomment the line <code>environment="TEST"</code>.</li>
                     </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  Run <code>forge deploy</code> on the command line. Forge will detect that these changes were made on a development branch (hence the <code>dev</code>) prefix, and deploy the changes to your development preview environment. Under the hood, Forge uses the <code>Dockerfile</code>, a templated Kubernetes manifest, and metadata in a <code>service.yaml</code> file to build and deploy your service into Kubernetes.
                </li>
                <li>
                  View the changes by clicking on the appropriate branch name in the developer console.
                </li>
              </ol>
              <p>Further reading</p>
              <ul>
              <li><a href="https://www.datawire.io/faster/dev-workflow-intro/">A development workflow for Kubernetes services</a></li>
              <li><a href="https://www.datawire.io/faster/shared-dev/">Shared development models and multi-service applications</a></li>
              </ul>
            </div>
          }
          { currentIdx === 1 &&
            <div className="tutorial">
              We've made a change on a development branch, and now it's time to roll it out to users. We can do this with a canary test.
              <ol>
                <li>
                  We've defined a <i>profile</i> for canary testing that specifies that 50% of the traffic will be routed to a canary service. On your development branch, let's use this profile to deploy the same code as a canary.
                  <p><code>forge --profile canary deploy</code></p>
                </li>
                <li>
                  Step 5
                </li>
                <li>
                  Step 6
                </li>
              </ol>
            </div>
          }
          { currentIdx === 2 &&
            <div className="tutorial">
              <ol>
                <li>
                  Step 7
                </li>
                <li>
                  Step 8
                </li>
                <li>
                  Step 9
                </li>
              </ol>
            </div>
          }
        </div>
      </div>
    </div>);
  }
}

export default Tutorials;