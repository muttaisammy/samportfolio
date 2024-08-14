import React from "react"
import Introduction from "./Introduction";
import Skills from "./Skills";
import Education from "./Education";
import Experience from "./Experience";
import Projects from "./Projects";
import Workshops from "./Workshops";


function Right() {
    return(
        <div className="right">
            <div className="right-inner">
              <Introduction/>
              <Skills/>
              <Education/>
              <Experience/>
              <Projects/>
              <Workshops/>
              <a className="resume" href="https://kenstates.netlify.app" target="_blank" rel="noopener noreferrer"><div className="resume-link">Contact me on linkedin</div></a>
            </div>
          </div>
    )
}

export default Right;