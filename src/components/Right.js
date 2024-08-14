import React from "react"
import Introduction from "./Introduction";
import Skills from "./Skills";
import Education from "./Education";
import Experience from "./Experience";
import Projects from "./Projects";
//import Workshops from "./Workshops";
import Workshops from "./Workshops";
import Githubcontri from "./Githubcontri";

function Right() {
    return(
        <div className="right">
            <div className="right-inner">
              <Introduction/>
              <Skills/>
              <Education/>
              <Experience/>
              <Githubcontri/>
              <Projects/>
              <Workshops/>
              <a className="resume" href="https://www.linkedin.com/in/nandkk05/" target="_blank" rel="noopener noreferrer"><div className="resume-link">Contact me on linkedin</div></a>
            </div>
          </div>
    )
}

export default Right;