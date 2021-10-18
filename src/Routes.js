import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from 'pages/Login';
import Main from 'pages/Main';
import Movies from 'pages/Movies';
import Nav from 'components/Nav';
import Footer from 'components/Footer';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        {/* <Nav /> */}
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/main" component={Main} />
          <Route exact path="/movies" component={Movies} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}
export default Routes;
