import React from "react";
import {
  Container,
  Jumbotron,
  Button,
  Row,
  Col,
  Image,
  Card,
  Form
} from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import AnimationWrapper from "./AnimationWrapper.js";
import Canvas from "../canvas/Canvas";
import Animation from "../canvas/Animation";
import Carousel from "./Carousel";
import Footer from "../tools/Footer";
import Navigation from "../tools/Navigation";
import ThemeCard from "./ThemeCard";
import "./HomePage.scss";
import Person from "./Person"; 

class HomePage extends React.Component {
  state = { redirect: false };

  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    
    console.log(data);
  }

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
                height: "20vh"
              }}
            >
              {/**Icon */}
              {/* PUT THE ANIMATION REF(IN CONSTRUCTOR) HERE*/}
              <Image
                fluid
                style={{ padding: 0, height: 200, marginTop: "200px" }}
                className="main-graphic"
                src={require("./images/light-logo.png")}
              />
            </Col>
            <Container style={{height:"50vh"}}>
            <Row
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "200px",
                color: "#dddddd"
              }}
            >
              <h3 className="homepageTitle" style={{ marginBottom: "20px" }}>
                Our Mission
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
                  color: "#dddddd"
                }}
              >
              T2 Development provides personal protective equipment (PPE) for clinics, hospitals, nursing homes, businesses and individuals. By partnering with an FDA-approved manufacturer in Shanghai, China, we have secured exclusive North American distribution rights for KN95 protective masks, available at a competitive price. Supplies are stored at our distribution center in Austin, TX.
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
          </AnimationWrapper>
        </Container>

        {/**MASKS SECTION */}
        <Container
          fluid
          className="boxShadowed"
          style={{ backgroundColor: "#ffffff", color: "#202020" }}
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
                md={4}
                sm={8}
                style={{
                  fontFamily: "Lora",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign:"center",
                  fontSize:"20pt"
                }}
              >
              Packaging
              </Col>
              <Col
                md={4}
                sm={8}
                style={{
                  fontFamily: "Lora",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign:"center",
                  fontSize:"20pt"
                }}
              >
              Features
              </Col>
              <Col
                md={4}
                sm={8}
                style={{
                  fontFamily: "Lora",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign:"center",
                  fontSize:"20pt"
                }}
              >
              Why it Matters
              </Col>
            </Row>
            <Row>
              <Col md={4} sm={8}
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
              <Col md={4} sm={8}
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
              <Col md={4} sm={8}
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
                src={require("./images/T2_Benefits.png")}
              />
              </Col>
            </Row>
            <Row >
              <h3 style={{textAlign: "center", marginTop:"30px"}}>Our masks are FDA approved, check out the documentation <a href="/media/fda.png" target="_blank">here</a>. <a href="/media/test_results.pdf" target="_blank">Here are the test results</a>.</h3>
            </Row>
          </Container>
        </Container>
        <Container fluid className="boxShadowed"  style={{ backgroundColor: "#dddddd", color: "#222222" }}>
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
                  title=""
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
                  title=""
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
        <Container fluid className="boxShadowed"  style={{ backgroundColor: "#ffffff", color: "#222222" }}>
          <Container >
            <Row
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <h3 className="homepageTitle" style={{ marginBottom: "10px" }}>
                Testimonials 
              </h3>
            </Row>
            <Row>
              <Col
                xs={12}
                style={{
                  fontFamily: "Lora",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Carousel style={{ width: "100%" }} />
              </Col>
            </Row>  
          </Container>
        </Container>
        <Container id="order" fluid className="boxShadowed" 
                style={{ display: "flex-inline",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#dddddd"}}>
          <h1 style={{paddingTop: "20px", 
                  textAlign:"center", color: "#222222"}}>Order Here</h1>
          <Form style={{paddingLeft: "25%", paddingRight: "25%", justifyContent: "center", alignItems: "center"}}>
            <Form.Group controlId="formName">
              <Form.Label style={{color: "#222222"}}>Name</Form.Label>
              <Form.Control type="text" placeholder="Ex. William Patterson" />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label style={{color: "#222222"}}>Email Address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>            
            <Form.Group controlId="formQuantity">
              <Form.Label style={{color: "#222222"}}>Quantity</Form.Label>
              <Form.Control type="number" placeholder="Ex. 1000" />
            </Form.Group>
            <Button variant="secondary" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default HomePage;
