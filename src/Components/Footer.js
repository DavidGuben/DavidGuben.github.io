import React, {Component} from 'react'

class Footer extends Component {
    render() {
        return (
            <footer className="page-footer unique-color-dark pt-0 wow fadeIn"> 
            <div className="primary-color">
                <div className="container">     
                    <div className="row py-4 d-flex align-items-center">
                        <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
                            <h6 className="mb-0 white-text">Connect with me on social media</h6>
                        </div>
                        <div className="col-md-6 col-lg-7 text-center text-md-right">
                            <a className="fb-ic ml-0">
                                <i className="fa fa-facebook white-text mr-4"> </i>
                            </a>
                            <a className="tw-ic">
                                <i className="fa fa-twitter white-text mr-4"> </i>
                            </a>
                            <a className="gplus-ic">
                                <i className="fa fa-google-plus white-text mr-4"> </i>
                            </a>
                            <a className="li-ic">
                                <i className="fa fa-linkedin white-text mr-4"> </i>
                            </a>
                            <a className="ins-ic">
                                <i className="fa fa-instagram white-text mr-lg-4"> </i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-5 mb-4 text-center text-md-left">
              <div className="row mt-3">

                <div className="col-md-3 col-lg-4 col-xl-3 mb-4">
                  <h6 className="text-uppercase font-weight-bold">
                    <strong>David Guben</strong>
                  </h6>
                  <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />
                  <p>Home</p>
                  <p>About</p>
                  <p>Portfolio</p>
                  <p>Contact</p>
                </div>

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase font-weight-bold">
                    <strong>Projects</strong>
                  </h6>
                  <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />
                  <p>
                    <a href="!#">MirrorlessShot.com</a>
                  </p>
                  <p>
                    <a href="!#">PawsNPoseCuttery.com</a>
                  </p>
                  <p>
                    <a href="!#">GeekyPupper.com</a>
                  </p>
                  <p>
                    <a href="!#">DavidGuben.tech</a>
                  </p>
                </div>
        
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase font-weight-bold">
                    <strong>Portfolio Links</strong>
                  </h6>
                  <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />
                  <p>
                    <a href="!#">LinkedIn</a>
                  </p>
                  <p>
                    <a href="!#">Behance</a>
                  </p>
                  <p>
                    <a href="!#">GitHub</a>
                  </p>
                </div>
        
                <div className="col-md-4 col-lg-3 col-xl-3">
        
                  <h6 className="text-uppercase font-weight-bold">
                    <strong>Contact</strong>
                  </h6>
                  <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />
                  <p>
                    <i className="fa fa-home mr-3"></i> New York, NY
                  </p>
                  <p>
                    <i className="fa fa-envelope mr-3"></i> <a href="#!">davidjg6@gmail.com</a>
                  </p>
                </div>
        
              </div>
            </div>
        
            <div className="footer-copyright py-3 text-center">
              2018 Copyright: <a href="https://davidguben.com">David G.</a>
            </div>
        
          </footer>
        )
    }
}

export default Footer