import React from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  NavDropdown,
  Container,
  Row,
  Col,
  Image
} from "react-bootstrap";
import { Link } from "react-router-dom";

class Navigation extends React.Component {
  render() {
    return (
      <Container
        fluid
        style={{
          padding: "0",
          backgroundColor: this.props.backgroundColor || "#888888"
        }}
      >
        <div
          style={this.props.center ? "justify-content-md-center" : ""}
          style={{ padding: "0" }}
        >
          <Navbar>
            <Navbar.Brand>
              <Link to="/">
                <img
                  alt="Home"
                  src={require("../homepage/images/toolbar.png")}
                  height="50"
                  className="d-inline-block align-top"
                />
              </Link>
            </Navbar.Brand>
            <a style={{color: "#000000"}}href="mailto:truittdevelopment@gmail.com">Order Here</a>
          </Navbar>
        </div>
      </Container>
    );
  }
}

export default Navigation;
