import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {loggedIn} from '../actions'
import mazeLogo from '../images/maze_logo_28px.svg'

import './Login.css'
import PropTypes from 'prop-types';

//Facebook Pixels
import ReactPixel from 'react-facebook-pixel';
ReactPixel.init('412969795514711');

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fullName: '',
      email: '',
      phone: '',
      location: '',
      locationErr: false
    }
    this.channel = this.props.match.params.channel
    this.handleChange = this.handleChange.bind(this)
  }

  componentWillMount(){
    //this.context.mixpanel.track(`${this.channel}_Page loaded`)
    //Facebook Pixels
    ReactPixel.pageView();
  }

  login(e){
    e.preventDefault()
    const state = this.state

    this.context.mixpanel.track(`${this.channel}_Enrolled`, {
                                              "Name": state.fullName,
                                              "Email": state.email
                                            })

    if(this.state.location == "") {
      return this.setState({locationErr: true})
    }

    return this.props.dispatch(loggedIn(
                                state.fullName,
                                state.email,
                                state.phone,
                                state.location,
                                this.channel))
  }

  handleChange(e, input) {
    if(input === 'fullName'){
      this.setState({fullName: e.target.value});
    }
    else if(input === 'email'){
      this.setState({email: e.target.value});
    }
    else if(input === 'phone'){
      this.setState({phone: e.target.value});
    }
    else if(input === 'location'){
      this.setState({location: e.target.value});
    }
  }

  locationErr(){
    if(this.state.locationErr) {
      return (
        <div>
          <span style={{fontSize: '.8em', color: 'red'}}>You must select a location.</span>
        </div>
      )
    }
  }

  render() {
    if(this.props.loggedIn) {
      const url = `/${this.channel}/calendar`
      return <Redirect to={url} />
    }

    return (
      <div id="app">

        <header>
          <div className="page-container header-page-container">
            <a href="//www.thinkful.com">
              <img
                  className="tf-logo"
                  src={mazeLogo}
                  alt="Thinkful Logo" />
            </a>
            <h1 className="header-h1" style={{color: "#ffffff"}}>Free Web Development Course</h1>

            <div className="award-callout">
              <img src="https://tf-assets-prod.s3.amazonaws.com/splash/homepage_Aug2015/medal.svg" alt="Gold ribbon" />
              <p>Rated #1 Coding Bootcamp<br/>by Course Report</p>
            </div>
          </div>
        </header>

        <form
            className="page-container user-form"
            action="https://www.thinkful.com/pysplash/api/checkout/user"
            onSubmit={e => {this.login(e)}} >

            <h4 className="form-heading">What do I get with Thinkful’s free trial?</h4>
            <p>You’ll get full access to Thinkful’s web fundamentals curriculum for two weeks with unlimited mentor support. To complete your enrollment, make sure to schedule your onboarding call on the next page. <strong>You must schedule an onboarding session to complete enrollment</strong>.</p>

          <div className="half-input-wrapper">
            <div className="half-input">
              <label htmlFor="full_name">Full name</label>
              <input
                  type="text"
                  id="full_name"
                  name="full_name"
                  className="input__half"
                  placeholder="Thaddeus Think"
                  required
                  onChange={(e) => this.handleChange(e, 'fullName')}/>
            </div>

            <div className="half-input">
              <label htmlFor="phone number">Phone Number</label>
              <input
              type="tel"
              id="phone"
                  name="phone"
                  className="input__half"
                  name="tf_login"
                  placeholder="555-555-5555"
                  required
                  onChange={(e) => this.handleChange(e, 'phone')}/>
            </div>
          </div>

          <label htmlFor="email">Email address</label>
          <input
              type="email"
              id="email"
              name="tf_login"
              placeholder="you@example.com"
              required
              onChange={(e) => this.handleChange(e, 'email')}/>

          <label htmlFor="located">Where are you located?
            {this.locationErr()}
          </label>
            <div className="select-container">
              <span aria-hidden="true" className="tui-icon icon-navigatedown"></span>
              <select
                className=""
                required
                defaultValue=""
                onChange={(e) => this.handleChange(e, 'location')}>
                <option value="-1" disabled="">Select one</option>
                <option value="Atlanta, GA">Atlanta, GA</option>
                <option value="Los Angeles, CA">Los Angeles, CA</option>
                <option value="Phoenix, AZ">Phoenix, AZ</option>
                <option value="Portland, OR">Portland, OR</option>
                <option value="San Diego, CA">San Diego, CA</option>
                <option value="Washington, D.C.">Washington, D.C.</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <br/>


          <button className="button button__black" type="submit">
            Continue
            <span className="icon-navigateright button-right-icon" aria-hidden="true"></span>
          </button>
        </form>



    <div className="footer login-footer">
      <div className="page-container">

        <div className="footer-copy">
          <p>
            If you have questions, email Aaron at&nbsp;
            <a href="mailto:aaron.lamphere@thinkful.com">aaron.lamphere@thinkful.com</a>.
          </p>

        </div>
      </div>
    </div>

  </div>
    );
  }
}

Login.contextTypes = {
    mixpanel: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  loggedIn: state.thinkfulDash.logInCredentials.logged,
})

export default connect(mapStateToProps)(Login)
