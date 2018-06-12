import React, {Component} from 'react'
import {Container} from 'mdbreact'

import ProjectCard from './ProjectCard'

class Portfolio extends Component {
    render() {
        return (
            <Container>
                <h2 style={{ marginBottom: '50px' }}>Portfolio</h2>

                <div className="row text-center wow fadeInUp">
                
                  <ProjectCard
                    image="https://mdbootstrap.com/img/Photos/Others/images/48.jpg"
                    heading="MirrorlessShot.com"
                    description="Camera Blog with a focus on Mirrorless Cameras.">
                    Website
                  </ProjectCard>

                  <ProjectCard
                    image="https://mdbootstrap.com/img/Photos/Others/images/49.jpg"
                    heading="PawsNPoseCuttery.com"
                    description="Mobile dog grooming company based in New Jersey.">
                    Website
                  </ProjectCard>

                  <ProjectCard
                    image="https://mdbootstrap.com/img/Photos/Others/images/50.jpg"
                    heading="GeekyPupper.com"
                    description="Small game company.">
                    Website
                  </ProjectCard>
                  
                  <ProjectCard
                    image="https://mdbootstrap.com/img/Photos/Others/images/55.jpg"
                    heading="RituChopra.com"
                    description="Motivational speaker.">
                    Website
                  </ProjectCard>

                  <ProjectCard
                    image="https://mdbootstrap.com/img/Photos/Others/images/56.jpg"
                    heading="Conjure"
                    description="Wiccan calendar app.">
                    App
                  </ProjectCard>
                  
                  <ProjectCard
                    image="https://mdbootstrap.com/img/Photos/Others/images/56.jpg"
                    heading="Conjure"
                    description="Wiccan calendar app.">
                    App
                  </ProjectCard>

                </div>

          </Container>
        )
    }
}

export default Portfolio
