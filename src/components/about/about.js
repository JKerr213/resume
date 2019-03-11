import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
  <div className="row">
    <div className="three columns">
      <img className="profile-pic" src="images/profilepic.jpg" alt />
    </div>
    <div className="nine columns main-col">
      <h2>About Me</h2>
      <p>{
                 resumeData.aboutme
               }
      </p>
      <div className="row">
        <div className="columns download">
          <p>
            <a href="images/Jacob_M_Kerr Resume_Sept_2018.pdf" className="button"><i className="fa fa-download" />Download Resume</a>
          </p>
        </div>
      </div> {/* end row */}
    </div> {/* end .main-col */}
  </div>
</section>
    );
  }
}
