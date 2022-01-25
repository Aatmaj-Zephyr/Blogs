import React from "react";
import { Link } from "gatsby";
import "bootstrap/dist/css/bootstrap.min.css";
import "../sass/sections.sass";
import {
  HouseFill,
  CodeSlash,
  Grid1x2Fill,
  BugFill,
  SuitHeartFill,
  CloudUpload,
} from "react-bootstrap-icons";
import { Row, Col } from "reactstrap";

const About = () => {
  return (
    <div className="cleanse">
      <div className="bg-texture-about ">
        <div className="about white d d-md-block">
          <Row>
            <Col sm md="6">
              <div className="aboutHeader">About</div>
              <p>
                We at KJSCE CodeCell have created this one stop destination for
                all the technical know-how you would require to set sail in the
                fascinating world of coding.
              </p>
              <p className="d-none d-md-block">
                We hope you are ready to apply a real life sort by relevance
                filter to all the information avaiolable on the internet
              </p>
            </Col>
            <Col sm md="6">
              <div className="aboutHeader">Explore</div>
              <div className="pageLinks">
                <Link to="/">
                  <HouseFill /> Home
                </Link>
                <Link to="/about">
                  <CodeSlash /> About
                </Link>
                <Link to="/blog">
                  <Grid1x2Fill /> All Articles
                </Link>
                <Link to="/categories">
                  <BugFill /> Explore categories
                </Link>
                <Link to="/about">
                  <CloudUpload /> Submit Blog
                </Link>
              </div>
            </Col>
          </Row>
          <span className="pt-3">
            Created with <SuitHeartFill /> by KJSCE Codecell
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
