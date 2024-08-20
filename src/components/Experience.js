import React from 'react'

export default function Experience() {
    return (
        <div className="experience">
        <h4>Experience</h4>
        <div className="content">
          <div className="exp-item">
            <div className="job">
              <a className="company" href="https://kenstates.netlify.app" target="_blank" rel="noopener noreferrer">Kenstate LLC</a>
              <div className="duration">Aug 2024 &mdash; Current</div>
            </div>
            <div className="title">Full Stack Developer</div>
            <ul className="description">
              <li>Developed responsive scalable web applications</li>
              <li>Integrated third-party APIs </li>
              <li>Optimized MySQL querries to reduce latency</li>
              <li>Automated end-to-end testing</li>
              <li>Docker deployment and software maintenace</li>
              </ul>
          </div>
          <div className="exp-item">
            <div className="job">
              <a className="company" href="https://spot.ampath.or.ke/p" target="_blank" rel="noopener noreferrer">Ampath Healthcare</a>
              <div className="duration">Jan 2020 &mdash; July 2024</div>
            </div>
            <div className="title">Software Developer</div>
            <ul className="description">
              <li>Developed software application POC using Angular JS &amp; MySQL</li>                  
              <li>Part of team that developed SPOT, an application that hosted other mini applications
                that were used routinely by the organization </li>
              <li>Worked on a full life cycle conversion, Angular healthcare management application into 
                  React JS SPA architecture. Used GIT for version controls and updates</li>
                  Used Jira for Agile process, test management and collaboration
              <li>Developed an Machine Language model for calculating probability on patient appointment defaulting </li> 
             <li>Day to day maintenance of data communication (HMIS) channels between facilities and national data warehouse </li>
            </ul>
          </div>
          <div className="exp-item">
            <div className="job">
              <a className="company" href="https://kemri-wellcome.org/" target="_blank" rel="noopener noreferrer">Kenya Medical Research Institute</a>
              <div className="duration">Jan 2015 &mdash; Dec 2019</div>
            </div>
            <div className="title">Software Developer</div>
            <ul className="description">
              <li>Maintained systems that allowed for real-time integration and processing of health data from various sources.</li>
              <li>Applications included KenyaEMR, IQCare & Ipad</li>
              <li>Worked alongside clinicians, nurses, administrators, to ensure their software healthcare needs were met </li>
              <li>Designed, coded and fully tested Android front-end applications </li>
            </ul>
          </div>
          <div className="exp-item">
            <div className="job">
              <a className="company" href="https://kenstates.netlify.app" target="_blank" rel="noopener noreferrer">BlackBaud Software Systems</a>
              <div className="duration">July 2010 &mdash; Dec 2014</div>
            </div>
            <div className="title">Software Developer</div>
            <ul className="description">
              <li>Client requirements analysis, Software applications design, development and integration</li>
              <li>Developed & customized applications that managed donor relationships, tracked donations, and generated reports</li>
            <li> Blackbaud application that used data analytics to track donor behaviour & optimize fundraising strategies </li>
            <li>Integrated accounting applications for grants and donations</li>
            </ul>
          </div>
          <div className="exp-item">
            <div className="job">
              <a className="company" href="https://kenstates.netlify.app" target="_blank" rel="noopener noreferrer">Verizon Wireless</a>
              <div className="duration"> July 2006&mdash; Dec 2010</div>
            </div>
            <div className="title">Test Engineer</div>
            <ul className="description">
              <li>Developed test scenarios, test cases and test scripts.
                  Performed functional, GUI and regression testing for version compatibility</li>
              <li>Verification and database testing of legacy application conversions.
                  Planned and performed User Acceptance testing</li>
              <li>Facilitated field training for new software users</li>
            </ul>
          </div>
          <div className="exp-item">
            <div className="job">
              <a className="company" href="https://kenstates.netlify.app" target="_blank" rel="noopener noreferrer">Vartec Telecom</a>
              <div className="duration">Jan 2002 &mdash; Dec 2005</div>
            </div>
            <div className="title">Automation Test Engineer</div>
            <ul className="description">
              <li>Planned development and testing on provisioning & billing software applications </li>
              <li>Planned and implemented testing on Customer Relationship Management Modules</li>
              <li>Testing using Mercury's automation tools, Load Runner & WinRunner</li>
              <li>Reports testing of company wide applications developed using crystal reports</li>
            </ul>
          </div>
        </div>
      </div>
    )
}
