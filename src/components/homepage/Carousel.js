import React, { useState } from "react";
import { Carousel, Row, Container, Col, Image, Spinner } from "react-bootstrap";
import "./HomePage.scss";
import { Link } from "react-router-dom";

class CustomCarousel extends React.Component {
  state = { index: 0, testimonials: [], loading: true };

  componentDidMount = async () => {
    const testimonials = [{
      name: "St. Cloud ENT",
      quote: "Amazing Masks!",
      image: "scent.png"
    },
    {
      name: "Westminster",
      quote: "These people save lives.",
      image: "westminster.png"
    },
    {
      name: "Duray Family Dentistry",
      quote: "This has given my employees so much more security.",
      image: "duray.png"
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
          <Image
                fluid
                style={{ padding: 0 }}
                className="main-graphic"
                src={require("./images/" + testimonials.image)}
              />
          <h3 style={{padding: 50, width: "40%", float:"right"}}>"{testimonials.quote}"</h3>
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
