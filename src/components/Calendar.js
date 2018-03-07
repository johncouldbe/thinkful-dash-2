import React, { Component } from 'react';
import {connect} from 'react-redux'
import {sendScheduled} from '../actions'
import * as firebase from 'firebase';

import PropTypes from 'prop-types';

import './Calendar.css'

class Calendar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dates: [],
      selected: {
        parent: '',
        time: ''
      },
      isSelected: false
    }
    this.channel = this.props.channel
    this.dbRef = /la-/.test(this.channel)
      ? firebase.database().ref().child('shannon')
      : firebase.database().ref().child('aaron')
  }

  componentWillMount(){
    let database = []

    this.dbRef.on('value', snap => {
      database = snap.val();
      this.setState({dates: database})
    })
  }

  continue() {
    const allDates = this.state.dates
    const selected = this.state.selected

    if(window.confirm(`Are you sure you want to schedule your time for ${selected.parent} at ${selected.time}?`)){
      this.context.mixpanel.track(`${this.channel}_Scheduled`, {
                                                "Name": this.props.credentials.fullName,
                                                "Email": this.props.credentials.email,
                                                "Time": `${selected.parent}, ${selected.time}`
                                              })

      const dateToChange = allDates.filter( obj => {
        return obj.date == selected.parent;
      })

      dateToChange[0].times.map(time => {
        if(time.time === selected.time){
          time.scheduled = this.props.email
        }
      })

      allDates.forEach(obj => {
        if(obj.date === selected.parent) {
          obj = dateToChange[0]
        }
      })

      this.dbRef.set(
        allDates
      );
      this.props.dispatch(sendScheduled(this.props.credentials,
                                        this.state.selected,
                                        this.channel))
    }
  }

  chooseTime(e) {
    const date = e.currentTarget.getAttribute('data-date')
    const time = e.currentTarget.innerHTML
    this.setState({
      selected: {parent: date, time: time},
      isSelected: true})
  }

  btn() {
    const btn = this.state.isSelected ?
    <div className="navigation-buttons__call">
      <button className="button button__black continue" onClick={() => {this.continue()}}>Complete Enrollment</button>
    </div>
    : <div className="navigation-buttons__call">
      <button className="button continue button__disabled">Complete Enrollment</button>
    </div>

    return btn
  }

  dates(){
    return this.state.dates.map((date, index) => {

      const times = date.times.map((time, index) => {
        if(time.scheduled == false){
          return (
            <div key={index}>
            <button
              className="button button__mini time"
              data-date={date.date}
              onClick={(e) => {this.chooseTime(e)}}
            >{time.time}</button><br />
            </div>
          )
        } else {
          return (
            <div key={index}>
            <button
              className="button button__mini time button__disabled"
              data-date={date.date}
            >{time.time}</button><br />
            </div>
          )
        }

      })


      return (
        <div className="date-container" key={index}>
          <h4>{date.day}<br />{date.date}</h4>
          {times}
        </div>
      )
    })
  }

  render() {


    return (
      <div className="page-container page-container-calendar">
        <div className="onboarding-page onboarding-page__call">
          <div className="calendly-wrapper">
            <div className="calendar-container">
              {this.dates()}
            </div>
          </div>
          {this.btn()}
        </div>
      </div>
    );
  }
}

Calendar.contextTypes = {
    mixpanel: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  email: state.thinkfulDash.logInCredentials.email,
  credentials: state.thinkfulDash.logInCredentials
})

export default connect(mapStateToProps)(Calendar)
