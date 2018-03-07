import React, { Component } from 'react';
import {connect} from 'react-redux'

class Footer extends Component {

  render() {
    return (
      <div className="footer-container">
        <footer className="footer">
          <div className="timezone timezone__mobile"><span>All times are in </span><span>America/New_York</span></div>
          <div className="site-links">
            <div className="social-mobile"><a className="footer-link icon" href="https://www.facebook.com/thinkfulschool"><span aria-hidden="true" className="tui-icon icon-facebook "></span></a><a className="footer-link icon" href="https://twitter.com/thinkful"
              ><span aria-hidden="true" className="tui-icon icon-twitter "></span></a></div>
            <div className="footer-column">
              <h4 className="footer-heading">Courses</h4><a className="footer-link mobileHidden" href="//www.thinkful.com/bootcamp/web-development/flexible/">Flexible Bootcamp</a><a className="footer-link mobileHidden" href="//www.thinkful.com/bootcamp/web-development/full-time/"
              >Full Time Bootcamp</a><a className="footer-link" href="//www.thinkful.com/courses/">Explore all courses</a><a className="footer-link" href="//www.thinkful.com/training-for-teams/"
              >Corporate training</a><a className="footer-link mobileHidden" href="//www.thinkful.com/bootcamp-prep/">Bootcamp prep</a><a className="footer-link" href="//www.thinkful.com/pricing/"
              >Pricing</a></div>
            <div className="footer-column">
              <h4 className="footer-heading">Education</h4><a className="footer-link mobileHidden" href="//www.thinkful.com/mentorship/">1-on-1 mentorship</a><a className="footer-link" href="//www.thinkful.com/bootcamps/">Bootcamp Finder</a>
              <a
                className="footer-link mobileHidden" href="//www.thinkful.com/career-prep/">Career prep</a><a className="footer-link mobileHidden" href="//www.thinkful.com/career-path-job-guarantee/">Job guarantee</a><a className="footer-link mobileHidden" href="//www.thinkful.com/learn/">Learning resources</a>
                <a
                  className="footer-link mobileHidden" href="//www.thinkful.com/bootcamp-jobs-stats/">Student outcomes</a>
            </div>
            <div className="footer-column">
              <h4 className="footer-heading">About</h4><a className="footer-link" href="http://blog.thinkful.com">Blog</a><a className="footer-link mobileHidden" href="//www.thinkful.com/about/#opportunities">Careers</a><a className="footer-link mobileHidden"
                href="//www.thinkful.com/mentors/">Mentors</a><a className="footer-link" href="//www.thinkful.com/about/">Our mission</a><a className="footer-link" href="//www.thinkful.com/hire-developers/"
              >Hiring network</a><a className="footer-link icon mobileHidden" href="https://www.facebook.com/thinkfulschool"><span aria-hidden="true" className="tui-icon icon-facebook "></span></a>
              <a
                className="footer-link icon mobileHidden" href="https://twitter.com/thinkful"><span aria-hidden="true" className="tui-icon icon-twitter "></span></a>
            </div><a className="footer-link support-mobile" href="//www.thinkful.com/support">Support</a></div>
          <div className="timezone"><span>All times are in </span><span>America/New_York</span><span>&nbsp;&nbsp;</span><a href="//settings.thinkful.com/profile">Change</a></div>
          <div
            className="legal-links"><span className="margin-span copyright"><span>© </span><span>2017</span><span> Thinkful, Inc.</span></span><span className="margin-span middot-desktop"
            >·</span><a className="footer-link margin-span" href="//www.thinkful.com/terms-of-service/">Terms of use</a><span className="margin-span">·</span><a className="footer-link margin-span"
              href="//www.thinkful.com/privacy-policy/">Privacy policy</a><span className="middot-desktop margin-span">·</span><a className="footer-link support-desktop margin-span mobileHidden" href="//www.thinkful.com/support/"
            >Support</a><span className="middot-desktop margin-span">·</span><a className="footer-link margin-span" href="//www.thinkful.com/responsible-disclosure/">Responsible disclosure</a></div>
      </footer>
    </div>
    );
  }
}

export default connect()(Footer)
