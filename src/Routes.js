import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from 'pages/Login';
import Main from 'pages/Main';
import Movies from 'pages/Movies';
import Theater from 'pages/Theater';
import KakaoRedirect from 'pages/KakaoRedirect';
import MoviesInfo from 'pages/Movies/MoviesInfo';
import Header from 'components/Header/Header';
import Footer from 'components/Footer';
import Tab from 'components/Tab/Tab';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/main" component={Main} />
          <Route exact path="/" component={Main} />
          <Route exact path="/movies" component={Movies} />
          <Route exact path="/theater/list" component={Theater} />
          <Route exact path="/oauth/kakao" component={KakaoRedirect} />
          <Route exact path="/info" component={MoviesInfo} />
          <Route exact path="/tab" component={Tab} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}
export default Routes;
