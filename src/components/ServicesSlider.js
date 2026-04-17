"use client";
import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import {
  FaHome,
  FaDollarSign,
  FaUniversity,
  FaHandHoldingUsd,
  FaTools,
  FaUserTie,
} from "react-icons/fa";

const services = [
  {
    key: "home",
    title: "Purchase New House",
    icon: <FaHome />,
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
  },
  {
    key: "loan",
    title: "Apply For Loan",
    icon: <FaDollarSign />,
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
  },
  {
    key: "refinance",
    title: "Refinancing Your Home",
    icon: <FaUniversity />,
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
  },
  {
    key: "capital",
    title: "Capital Management",
    icon: <FaHandHoldingUsd />,
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
  },
  {
    key: "reno",
    title: "Renovation House",
    icon: <FaTools />,
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
  },
  {
    key: "advisor",
    title: "Refinance Advisor",
    icon: <FaUserTie />,
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
  },
];

const ServicesSlider = () => {
  return (
    <div className="service-section">
      <Container>
        {/* Heading */}
        <div className="text-center mb-5">
          <h6 className="sub-title">WHAT WE OFFER</h6>
          <h2 className="main-title"> Our Core Services for Business Growth</h2>
          <p className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis, nesciunt velit necessitatibus odit laboriosam fugiat
            qui
          </p>
        </div>

        <Tab.Container defaultActiveKey="home">
          {/* Tabs */}
          <Nav className="service-tabs justify-content-center flex-wrap">
            {services.map((service) => (
              <Nav.Item key={service.key}>
                <Nav.Link eventKey={service.key} className="tab-btn">
                  <div className="icon">{service.icon}</div>
                  <span>{service.title}</span>
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>

          {/* Content */}
          <Tab.Content className="mt-4">
            {services.map((service) => (
              <Tab.Pane eventKey={service.key} key={service.key}>
                <div className="content-box">
                  <Row className="align-items-center">
                    <Col md={6}>
                      <div className="image-wrap">
                        <img src={service.image} alt="" />
                      </div>
                    </Col>

                    <Col md={6}>
                      <div className="content-text">
                        <h3>{service.title}</h3>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit.
                        </p>

                        <ul className="d-flex flex-wrap column-gap-3">
                          <li>Respect for all people</li>
                          <li>Excellence in everything</li>
                          <li>Truthfulness in business</li>
                          <li>Integrity & trust</li>
                        </ul>

                        <a href="#">READ MORE →</a>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Tab.Pane>
            ))}
          </Tab.Content>
        </Tab.Container>
      </Container>

      {/* CSS */}
      <style>{`
       :root {
          --primary: #5fb43d;
          --secondary: #1855a5;
        }
        .service-section {
          padding: 50px 0;
          background:#fff;
          
        }

        .sub-title {
          color: var(--primary);
          font-weight: 600;
        }

        .main-title {
          font-weight: 700;
        }

        .desc {
          color: #777;
        }

        /* Tabs */
        .service-tabs {
          gap: 10px;
        }

        .tab-btn {
          background: #eee;
          border-radius: 12px;
          padding: 12px 18px;
          text-align: center;
          transition: 0.3s;
          border: 1px solid #eee;
          min-width: 150px;
          color:#fff;
        }

        .tab-btn .icon {
          font-size: 30px;
          margin-bottom: 5px;
          color:#000;
        }
        .tab-btn span{
        color:#000;}
        .tab-btn:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.08);
          color:#fff;
        }

        .nav-link.active.tab-btn {
          background: var(--secondary);
          color: #fff !important;
          border: none;
          box-shadow: 0 10px 25px rgba(0,0,0,0.15);
        }
          .nav-link.active.tab-btn .icon{
          color:#fff;}
          .nav-link.active.tab-btn span{
          color:#fff;}

        /* Content Box */
        .content-box {
          background: #fff;
          border-radius: 20px;
          padding: 30px;
          box-shadow: 0 15px 40px rgba(0,0,0,0.08);
          transition: 0.3s;
        }

        .image-wrap {
          overflow: hidden;
          border-radius: 15px;
        }

        .image-wrap img {
          width: 100%;
          transition: 0.4s;
        }

        .image-wrap:hover img {
          transform: scale(1.05);
        }

        .content-text h3 {
          font-weight: 600;
          margin-bottom: 15px;
        }

        .content-text p {
          color: #666;
        }

        .content-text ul {
          list-style: none;
          padding: 0;
        }

        .content-text ul li {
          margin-bottom: 8px;
          position: relative;
          padding-left: 20px;
        }

        .content-text ul li::before {
          content: "✔";
          position: absolute;
          left: 0;
          color: #5fb43d;
        }

        .content-text a {
          display: inline-block;
          margin-top: 10px;
          color: #5fb43d;
          font-weight: 600;
          text-decoration: none;
        }

        .content-text a:hover {
          color: #1855a5;
        }
      `}</style>
    </div>
  );
};

export default ServicesSlider;
