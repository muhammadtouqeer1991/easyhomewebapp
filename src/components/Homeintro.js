import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import HomeintroSwiper from "./HomeintroSwiper";

const Homeintro = () => {
  return (
    <>
      <div className="Homeintro py-lg-0 py-md-0 py-sm-5 py-4">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <h1 className="fs-1 fw-bold black">
                A <span className="primarytxt">Mortgage</span> Could Be the
                Right Choice for You
              </h1>
              <h5 className="fs-4 black fw-light">
                Reliable Sustainable Provider
              </h5>
              <p className="fs-8">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolore, cumque dolor atque impedit tempore debitis, et eos iste
                doloremque sit neque consequuntur reprehenderit qui laboriosam
                non corrupti error, dignissimos asperiores.
              </p>
              <ul className="list-unstyled m-0 p-0 d-flex flex-wrap gap-lg-2 gap-md-2 gap-sm-2 gap-2">
                <li>
                  <IoShieldCheckmarkOutline /> Mortgage Solutions
                </li>
                <li>
                  <IoShieldCheckmarkOutline /> Buy a Home
                </li>
                <li>
                  <IoShieldCheckmarkOutline /> Loan Calculator
                </li>
                <li>
                  <IoShieldCheckmarkOutline /> Rates & Pricing
                </li>
                <li>
                  <IoShieldCheckmarkOutline /> Mortgages
                </li>
                <li>
                  <IoShieldCheckmarkOutline /> Refinancing
                </li>
                <li>
                  <IoShieldCheckmarkOutline /> Loan Calculator
                </li>
              </ul>
            </Col>
            <Col lg={6}>
              <HomeintroSwiper />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Homeintro;
