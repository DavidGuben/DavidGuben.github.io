import React, {Component} from 'react'
import { Container, Carousel, CarouselCaption, CarouselControl, CarouselInner, CarouselItem } from 'mdbreact';
import './../App.css'


class Gallery extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
        this.state = {
          activeItem: 1,
          maxLength: 4
        };
      }

      next() {
        const nextItem = this.state.activeItem + 1;
        if(nextItem > this.state.maxLength) {
          this.setState({ activeItem: 1 });
        } else {
          this.setState({ activeItem: nextItem });
        }
      }

      prev() {
        const prevItem = this.state.activeItem - 1;
        if(prevItem < 1) {
          this.setState({ activeItem: this.state.maxLength });
        } else {
          this.setState({ activeItem: prevItem });
        }
      }

      goToIndex(item) {
        if (this.state.activeItem !== item) {
          this.setState({
            activeItem: item
          });
        }
      }
    render() {
        return(
            <Container>

                <h2 className="mb-5 font-weight-bold text-center">Gallery</h2>

                <div className="row wow fadeIn">

                <div className="col-md-7 mb-4">
                <Carousel
                  activeItem={this.state.activeItem}
                  next={this.next}
                  className="z-depth-1">
                  <CarouselInner>
                    <CarouselItem itemId="1">
                      <div className="view hm-black-light">
                        <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg" alt="First slide" />
                        <div className="mask waves-effect waves-light rgba-white-slight"></div>
                      </div>
                      <CarouselCaption>
                        <h3 className="h3-responsive">Light mask</h3>
                        <p>First text</p>
                      </CarouselCaption>
                    </CarouselItem>
                    <CarouselItem itemId="2">
                      <div className="view hm-black-strong">
                        <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(99).jpg" alt="First slide" />
                        <div className="mask"></div>
                      </div>
                      <CarouselCaption>
                        <h3 className="h3-responsive">Strong mask</h3>
                        <p>Second text</p>
                      </CarouselCaption>
                    </CarouselItem>
                    <CarouselItem itemId="3">
                      <div className="view hm-black-slight">
                        <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(17).jpg" alt="First slide" />
                        <div className="mask"></div>
                      </div>
                      <CarouselCaption>
                        <h3 className="h3-responsive">Slight mask</h3>
                        <p>Third text</p>
                      </CarouselCaption>
                    </CarouselItem>
                    <CarouselItem itemId="4">
                      <div className="view hm-black-light">
                        <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20%28143%29.jpg" alt="Mattonit's item" />
                        <div className="mask"></div>
                      </div>
                      <CarouselCaption>
                        <h3 className="h3-responsive">Sopot Beach</h3>
                        <p>Taken june 21th by @mattonit</p>
                      </CarouselCaption>
                    </CarouselItem>
                  </CarouselInner>
                  <CarouselControl direction="prev" role="button" onClick={() => { this.prev(); }} />
                  <CarouselControl direction="next" role="button" onClick={() => { this.next(); }} />
                </Carousel>
                </div>

                <div className="col-md-5">
                    <a href="" className="teal-text">
                    <h6 className="pb-1"><i className="fa fa-heart"></i><strong> Lifestyle</strong></h6>
                    </a>
                    <h4 className="mb-3"><strong>This is the title of the news</strong></h4>
                    <p>Text description</p>

                    <p>Second paragraph.</p>

                    <p>By <a><strong>David G.</strong></a>, 26/08/2016</p>
                    <a className="btn btn-primary btn-md">Read more</a>

                </div>

                </div>
              </Container>
        )
    }
}

export default Gallery
