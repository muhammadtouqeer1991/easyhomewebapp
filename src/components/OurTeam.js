"use client";

import { Container, Row, Col, Card } from "react-bootstrap";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import Image from "next/image";

const teamMembers = [
  {
    name: "Sarah Davis",
    role: "Loan Officer",
    phone: "+1 3324 55 538",
    email: "sarahdavis@ralo.com",
    address: "Hilton Road, NY, USA",
    img: "/team01.jpg",
  },
  {
    name: "Elizabeth White",
    role: "Office Manager",
    phone: "+1 3324 55 537",
    email: "elizabethwhite@ralo.com",
    address: "Hilton Road, NY, USA",
    img: "/team01.jpg",
  },
  {
    name: "Richard Jackson",
    role: "CEO",
    phone: "+1 3324 55 536",
    email: "richardjackson@ralo.com",
    address: "Hilton Road, NY, USA",
    img: "/team01.jpg",
  },
  {
    name: "Laura Martinez",
    role: "Business Manager",
    phone: "+1 3324 55 535",
    email: "lauramartinez@ralo.com",
    address: "Hilton Road, NY, USA",
    img: "/team01.jpg",
  },
];

export default function OurTeam() {
  return (
    <section className="team-section py-5">
      <Container>
        <div className="text-center mb-5">
          <h2 className="fw-bold">Our Team</h2>
          <p className="text-muted">
            Meet the professionals who make things happen
          </p>
        </div>

        <Row className="g-4">
          {teamMembers.map((member, index) => (
            <Col md={6} key={index}>
              <Card className="team-card h-100 border-0">
                <Row className="g-0 align-items-center">
                  {/* Image */}
                  <Col md={4}>
                    <div className="img-box">
                      <Image
                        src={member.img}
                        alt={member.name}
                        width={200}
                        height={200}
                        className="img"
                      />
                    </div>
                  </Col>

                  {/* Content */}
                  <Col md={8}>
                    <Card.Body>
                      <span className="role">{member.role}</span>
                      <h5 className="fw-semibold mb-2">{member.name}</h5>

                      <div className="line" />

                      <p>
                        <FaPhoneAlt /> {member.phone}
                      </p>
                      <p>
                        <FaMapMarkerAlt /> {member.address}
                      </p>
                      <p>
                        <FaEnvelope /> {member.email}
                      </p>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <style jsx>{`
        .team-section {
          background: #f8f9fb;
        }

        .team-card {
          background: #fff;
          border-radius: 12px;
          padding: 10px;
          transition: 0.25s ease;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
        }

        .team-card:hover {
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          transform: translateY(-3px);
        }

        .img-box {
          padding: 10px;
        }

        .img {
          border-radius: 10px;
          object-fit: cover;
        }

        .role {
          font-size: 13px;
          color: #0d6efd;
          font-weight: 600;
        }

        .line {
          width: 30px;
          height: 2px;
          background: #0d6efd;
          margin: 8px 0 12px;
        }

        p {
          font-size: 14px;
          margin-bottom: 6px;
          color: #555;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        svg {
          color: #0d6efd;
        }
      `}</style>
    </section>
  );
}
