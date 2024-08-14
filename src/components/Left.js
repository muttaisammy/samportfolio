import React from "react"


function Left(){
    return(
        <div className="left">
            <div className="bg-img"></div>
            <div className="left-inner">
              <div className="info">
                <h2 className="name">Sam Muttai</h2>
                <div className="subtext">Full Stack Developer</div>
                <div className="left-college">Kenstate LLC</div>
                <div className="social-links">
                  <a href="https://kenstates.netlify.app" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter"></i></a>
                  <a href="https://kenstates.netlify.app" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a>
                  <a href="https://github.com/KenstateAllied" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a>
                  <a href="https://kenstates.netlify.app"  target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>
    )
}

export default Left;
