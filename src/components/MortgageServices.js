"use client";

import Link from "next/link";
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const mortgageServices = [
  {
    title: "Residential Mortgages",
    desc: "Home financing solutions for individuals and families looking to purchase residential properties in Dubai.",
    image: "/mor01.png",
    link: "/residential-mortgages",
  },
  {
    title: "Non-Residential Mortgages",
    desc: "Mortgage support for non-residents and overseas investors interested in Dubai real estate opportunities.",
    image: "/mor02.png",
    link: "/non-resident-mortgage",
  },
  {
    title: "Self Employed Mortgage",
    desc: "Tailored mortgage solutions for entrepreneurs, freelancers, and self-employed professionals.",
    image: "/mor03.png",
    link: "/self-employed-mortgages",
  },
  {
    title: "Developer-Based Mortgage",
    desc: "Financing assistance for off-plan and developer-linked property purchases with flexible payment structures.",
    image: "/mor04.png",
    link: "/developer-based-transaction",
  },
  {
    title: "Handover Project",
    desc: "Support for managing final property handover payments with suitable financing options.",
    image: "/mor05.png",
    link: "/handover-payment",
  },
  {
    title: "Buyout Transactions",
    desc: "Transfer your existing mortgage to a better financing option with improved terms and support.",
    image: "/mor06.png",
    link: "/buyout-transaction",
  },
  {
    title: "Equity Release",
    desc: "Unlock the value of your property to access funds for investments, business, or personal needs.",
    image: "/mor07.png",
    link: "/equity-release",
  },
  {
    title: "Seller Buyout",
    desc: "Financing support for ownership transfers and buyout arrangements between property stakeholders.",
    image: "/mor08.png",
    link: "/seller-buyout",
  },
];

const MortgageServices = () => {
  return (
    <>
      <section className="mortgage-section">
        <Container>
          <div className="section-header">
            <h2>Our Mortgage Services</h2>
          </div>

          <Row>
            {mortgageServices.map((service, index) => (
              <Col lg={4} md={6} sm={12} key={index} className="mb-4">
                <Card className="service-card border-0">
                  <div className="image-wrapper">
                    <Card.Img variant="top" src={service.image} />
                  </div>

                  <Card.Body className="text-center">
                    <h4 className="card-title h5">{service.title}</h4>

                    <p className="card-text">{service.desc}</p>

                    <Link href={service?.link} className="know-btns">
                      Know more
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Internal CSS */}
      <style jsx>{`
        .mortgage-section {
          padding: 80px 0;
          background: #fff;
        }

        .section-header {
          margin-bottom: 40px;
        }

        .section-header h2 {
          font-size: 38px;
          font-weight: 800;
          color: #000;
        }

        .image-wrapper {
          overflow: hidden;
        }

        .service-card img {
          transition: 0.4s ease;
        }

        .service-card:hover img {
          transform: scale(1.08);
        }

        .card-title {
          font-size: 22px;
          font-weight: 700;
          margin-bottom: 5px;
          color: #000;
        }

        .card-text {
          font-size: 17px;
          line-height: 1.7;
          color: #000;
        }

        .know-btn:hover {
          color: #084298;
        }

        @media (max-width: 768px) {
          .section-header h2 {
            font-size: 30px;
          }

          .service-card img {
            height: 200px;
          }
        }
      `}</style>
    </>
  );
};

export default MortgageServices;
