import React from "react";
import { Card, Col, Row, Image } from "antd";
import TopBar from "./top-bar";
import { Avatar } from "antd";
import pranava from "./static/img/1.jpg";
import sudarshan from "./static/img/2.jpg";
import logo from "./static/img/log.png";
import "./App.css";

function Welcome() {
  return (
    <React.Fragment>
      <TopBar />
      <Row>
        <Col
          span={24}
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "2rem",
          }}
        >
          <h1>SQLi Detector</h1>
        </Col>
        <Col
          span={24}
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Avatar
            size={200}
            src={<Image src={logo} style={{ paddingTop: "2rem" }} />}
          />
        </Col>
        <Col
          span={24}
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              margin: "1rem 5rem 5rem 2rem",
              fontSize: "1rem",
              padding: "0 10rem 0 10rem",
              textAlign: "center",
            }}
          >
            The application helps detect and warn about an impending SQL
            injection vulnerability. SQL injection is a method where SQL
            articulations are used to manipulate and control how the web pages
            communicate with the backend databases. The application is powered
            by artificial intelligence It is essentially a validator any modern
            day software applications. The system is designed to effectively
            identify and notify the user about the threat. SQL databases are one
            of the most popular databases for a large majority of applications
            around the world. The threat of SQL injection is a very serious one.
            In case any unauthorized personnel is able to access the company
            databases , there is the high threat of data loss, identity theft,
            monetary loss. The proposed system can be integrated with any
            application in development to secure it from SQL injection
            vulnerability and unauthorized access to databases. The system can
            detect and warn or prevent the attack, thus aiding the development
            of a secure application
          </div>
        </Col>
      </Row>
      <Row gutter={16} style={{ backgroundColor: "#cccbcb" }}>
        <Col
          span={24}
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "2rem",
          }}
        >
          <h1>About Us</h1>
        </Col>

        <Col
          span={24}
          style={{
            display: "flex",
            padding: "1.25rem",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <Card
            hoverable
            style={{
              borderRadius: "10px",
              borderColor: "gray",
              height: "20rem",
            }}
          >
            <Row style={{ justifyContent: "center" }}>
              <Col span={24}>
                <span
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Avatar size={100} src={<Image src={pranava} />} />
                </span>
              </Col>
              <Col
                span={24}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  fontSize: "1.5rem",
                  paddingTop: "0.5rem",
                }}
              >
                Pranava
              </Col>
              <Col span={24} style={{paddingTop:"1rem"}}>
                <span
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    fontSize: "1rem",
                  }}
                >
                  Student @ RV College Of Engineering
                </span>
              </Col>
            </Row>
          </Card>
          <Card
            hoverable
            style={{
              borderRadius: "10px",
              borderColor: "gray",
              height: "20rem",
            }}
          >
            <Row style={{ justifyContent: "center" }}>
              <Col span={24}>
                <span
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Avatar size={100} src={<Image src={sudarshan} />} />
                </span>
              </Col>
              <Col
                span={24}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  fontSize: "1.5rem",
                  paddingTop: "0.5rem",
                }}
              >
                Sudarshan
              </Col>
              <Col span={24} style={{paddingTop:"1rem"}}>
                <span
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    fontSize: "1rem",
                  }}
                >
                  Student @ RV College Of Engineering
                </span>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
}

export default Welcome;
