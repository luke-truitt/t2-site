import React from "react";
import {
  Container,
  Jumbotron,
  Button,
  Row,
  Col,
  Image,
  Card,
  Carousel
} from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import AnimationWrapper from "./AnimationWrapper.js";
import Canvas from "../canvas/Canvas";
import Animation from "../canvas/Animation";
import Footer from "../tools/Footer";
import Navigation from "../tools/Navigation";
import ThemeCard from "./ThemeCard";
import "./HomePage.scss";
import Person from "./Person"; 

class HomePage extends React.Component {
  state = { redirect: false };


  handleProjectsClick = () => {
    this.setState({ redirect: true });
  };

  componentDidMount() {
    this.setState({ redirect: false });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect push to="/projects" />;
    }

    return (
      <div>
        {/**INTRODUCTION SECTION */}
        <Container fluid style={{ padding: 0 }}>
          <center>
            <Navigation center={true} />
          </center>

          <AnimationWrapper>
            <Col
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100vh" 
              }}
            >
              {/**Icon */}
              {/* PUT THE ANIMATION REF(IN CONSTRUCTOR) HERE*/}
              <Image
                fluid
                style={{ padding: 0, height: 300 }}
                className="main-graphic"
                src={require("./images/light-logo.png")}
              />
            </Col>
          </AnimationWrapper>
        </Container>

        {/**ABOUT SECTION */}
        <Container
          fluid
          className="boxShadowed"
          style={{ backgroundColor: "#202020", color: "#dddddd" }}
        >
          <Container>
            <Row
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <h3 className="homepageTitle" style={{ marginBottom: "20px" }}>
                What we do
              </h3>
            </Row>
            <Row>
              <Col
                md={6}
                sm={12}
                style={{
                  fontFamily: "Lora",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign:"center",
                }}
              >
              T2 Development provides PPE for clinics, hospitals, nursing homes, businesses and individuals. By exclusively partnering with a manufacturer in Shanghai, China, T2 brings the Chinese expertise in working with the coronavirus to the United States. Our primary product is the highly sought after KN-95 mask, shown to the right. We are selling these at $3.50 per mask for orders above 5 masks. All equipment is stored in the United States, allowing for quick delivery.
              </Col>
              <Col md={6} sm={12}
              style={{
                  fontFamily: "Lora",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign:"center",
                }}>
              <Image
                fluid
                style={{ padding: 0 }}
                className="dash-graphic"
                src={require("./images/mask.JPG")}
              />
              </Col>
            </Row>
          </Container>
        </Container>
        {/**MASKS SECTION */}
        <Container
          fluid
          className="boxShadowed"
          style={{ backgroundColor: "#202020", color: "#dddddd" }}
        >
          <Container>
            <Row
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <h3 className="homepageTitle" style={{ marginBottom: "20px" }}>
                KN-95 Masks
              </h3>
            </Row>
            <Row>
            <Col
                md={6}
                sm={12}
                style={{
                  fontFamily: "Lora",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign:"center",
                }}
              >
              Packaging
              </Col>
              <Col
                md={6}
                sm={12}
                style={{
                  fontFamily: "Lora",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign:"center",
                }}
              >
              Features
              </Col>
            </Row>
            <Row>
              <Col md={6} sm={12}
              style={{
                  fontFamily: "Lora",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign:"center",
                }}>
              <Image
                fluid
                style={{ padding: 0 }}
                className="dash-graphic"
                src={require("./images/packaging.JPG")}
              />
              </Col>
              <Col md={6} sm={12}
              style={{
                  fontFamily: "Lora",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign:"center",
                }}>
              <Image
                fluid
                style={{ padding: 0 }}
                className="dash-graphic"
                src={require("./images/mask_advantages.JPG")}
              />
              </Col>
            </Row>
          </Container>
        </Container>
        <Container fluid className="boxShadowed"  style={{ backgroundColor: "#222222", color: "#dddddd" }}>
          <Container>
            <Row
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <h3 className="homepageTitle" style={{ marginBottom: "10px" }}>
                Our Team 
              </h3>
            </Row>
            <Row>
            <Col
                md={6}
                sm={12}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
              <Person
                  name="Luke Truitt" 
                  title="Co-Founder, CEO"
                  img="luke"
                  onClick="mailto:luke@t2ppe.com"
              />
              </Col>
              <Col
                lg={6}
                md={12}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Person
                  name="Peyton Truitt" 
                  title="Co-Founder, COO"
                  img="peyton"
                  onClick="mailto:peyton@t2ppe.com"
              />
              </Col>
            </Row>
            <Row>
            <Col
                md={6}
                sm={12}
                className="description"
                style={{
                  fontFamily: "Lora",
                  display: "flex-inline",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign:"center",
                  padding: "2%"
                }}
              >
              Luke is a recent graduate of Duke University, who has working in several technical roles as well as sales and business development roles. Through stints with General Motors, Optiver Financial Services, numerous software engineering startups, and his own ventures, he has navigated into personal protective equipment to address its ballooning demand in the United States due to the coronavirus.
              </Col>
              <Col
                md={6}
                sm={12}
                className="description"
                style={{
                  fontFamily: "Lora",
                  display: "flex-inline",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign:"center",
                  padding: "2%"
                }}
              >
              After playing Division 1 Football at Purdue University, where he graduated with a BS in Supply Chain Management and a Masters in Management with a focus in Marketing, he went into the food manufacturing industry, specializing in operations managemnt and ecommerce as well as business development. More recently, he has experience in Tech as a pre-sales technical expert of CRM and CPQ software, working with executive suites to solve business development challenges. 
              </Col>
            </Row>
            
          </Container>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default HomePage;
