import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import Footer from './Footer'
import Calendar from './Calendar'
//import aaron from '../images/aaronlamphere.png'

//Google Analytics
import { BrowserRouter } from 'react-g-analytics';

//Google Ad
import GoogleAd from 'react-google-ad'

//Facebook Pixels
import ReactPixel from 'react-facebook-pixel';
ReactPixel.init('412969795514711');

class SelectDate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected:false
    }
    this.channel = this.props.match.params.channel
  }

  componentWillMount(){
    //Facebook Pixels
    return ReactPixel.pageView();
  }

  render() {
    if(this.props.scheduled) {
      const url = `/${this.channel}/finished`
      return <Redirect to={url} />
    }

    return (
      <BrowserRouter id="UA-32959514-1">
      <div id="app">

        <GoogleAd client="1002750134" slot="eOYpCM2kinsQtoGT3gM" format="false" />

        <div className="app-container">
          <div className="page-container" id="calendar-container">
          <div className="onboarding-page-container">
            <h4>Schedule your onboarding call to complete enrollment and get access to Thinkful’s platform and curriculum.</h4>
            <Calendar channel={this.channel}/>
          </div>
          </div>
      </div>
      </div>
      </ BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({
  scheduled: state.thinkfulDash.scheduled,
})

export default connect(mapStateToProps)(SelectDate)
