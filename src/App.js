import React, { Component } from 'react';
import {Route, Redirect, BrowserRouter as Router} from 'react-router-dom'
import {connect} from 'react-redux'
import './App.css';
import Login from './components/Login'
import SelectDate from './components/SelectDate'
import Finished from './components/Finished'

class App extends Component {
  render() {

    return (
      <Router>
      <div className="App">
        <Route exact path="/" render={() => <Redirect to="/other" />} />
        <Route exact path="/:channel" component={Login} />

        <Route exact path="/:channel/calendar" component={SelectDate} />

        <Route exact path="/:channel/finished" component={Finished} />
      </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
})

export default connect(mapStateToProps)(App)
