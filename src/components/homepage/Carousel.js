import React, { useState } from "react";
import { Carousel, Row, Container, Col, Spinner } from "react-bootstrap";
import "./HomePage.scss";
import { Link } from "react-router-dom";

class CustomCarousel extends React.Component {
  state = { index: 0, testimonials: [], loading: true };

  componentDidMount = async () => {
    const testimonials = [{
      name: "St. Cloud ENT",
      quote: "Amazing Masks!"
    },
    {
      name: "Westminster",
      quote: "These people save lives."
    },
    {
      name: "Duray Family Dentistry",
      quote: "This has given my employees so much more security."
    }]

    this.setState({ testimonials: testimonials, loading: false });
  };

  handleSelect = (selectedIndex, e) => {
    this.setState({ index: selectedIndex });
  };

  render() {
    const slides = this.state.testimonials.map((testimonials, index) => (
      <Carousel.Item key={index}>
        <Container>
          <Row>
            <h3>
              <a target="_blank" href={testimonials.webLink} className="carouselLink">
                {testimonials.name}
              </a>
            </h3>
          </Row>
          <Row>
          
          <p>{testimonials.quote}</p>
          </Row>
        </Container>
      </Carousel.Item>
    ));

    return (
      <Container
        fluid
        style={{
          width: "100%",
          justifyContent: "center",
          alignItems: "middle"
        }}
      >
        <center>
          {this.state.loading ? (
            <Spinner animation="grow" size="lg" style={{ margin: "2rem" }} />
          ) : (
            <Carousel
              activeIndex={this.state.index}
              onSelect={this.handleSelect}
              style={{ alignItems: "top" }}
            >
              {slides}
            </Carousel>
          )}
        </center>
      </Container>
    );
  }
}

export default CustomCarousel;
