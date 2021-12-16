import React, { Component } from 'react';
import './app.scss';
import { Content } from 'carbon-components-react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './content/LandingPage';
import RepoPage from './content/RepoPage';
import PracticePage1 from './content/PracticePage1';
import PracticePage2 from './content/PracticePage2';
import PracticePage3 from './content/PracticePage3';
import LoginPage from './content/LoginPage';
import PzHeader from './components/PzHeader';
import PzSidenav from './components/PzSidenav';


class App extends Component {
  render() {
    return (
      <div>
        <PzHeader />
        <PzSidenav />
        <Content>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/consult" component={RepoPage} />
            <Route path="/client" component={PracticePage1} />
            <Route path="/user" component={PracticePage2} />
            <Route path="/admin" component={PracticePage3} />
            <Route path="/login" component={LoginPage} />
          </Switch>
        </Content>
      </div>
    );
  }
}

export default App;