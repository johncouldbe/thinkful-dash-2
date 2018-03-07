import React, { Component } from 'react';
import {connect} from 'react-redux'
import Footer from './Footer'

//Google Ad
import GoogleAd from 'react-google-ad'

//Google Analytics
import { BrowserRouter } from 'react-g-analytics';

//Facebook Pixels
import ReactPixel from 'react-facebook-pixel';
ReactPixel.init('412969795514711');

class Finished extends Component {

  componentWillMount(){
    //Facebook Pixels
    ReactPixel.pageView();
  }

  render() {

    return (
      <BrowserRouter id="UA-32959514-1">

      <GoogleAd client="1002750134" slot="eOYpCM2kinsQtoGT3gM" format="false" />

      <div id="app">
        <div className="app-container" >
          <div className="onboarding-page-container">
            <header className="header-container">
              <div className="header-page-container">

                <div className="header-copy">
                  <div>
                    <h4>Thanks for enrolling!</h4>
                    <p style={{color: 'black'}}>Aaron will be reaching out to confirm your onboarding and give you access to Thinkful’s platform and curriculum.</p>
                  </div>
                </div>
              </div>
            </header>
          </div>

          <Footer />
        </div>
      </div>
      </ BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({
})

export default connect(mapStateToProps)(Finished)
