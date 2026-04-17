"use client";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaUser, FaEnvelope, FaPhone } from "react-icons/fa";

export default function CreativeContact() {
  return (
    <section className="minimal-contact">
      <Container>
        <div className="contact-wrapper">
          <Row className="align-items-center">
            {/* LEFT TEXT */}
            <Col md={5}>
              <div className="contact-text">
                <span>Contact</span>
                <h3>Let’s Start a Conversation</h3>
                <p>
                  Simple, fast and clean communication. Fill the form and we’ll
                  get back to you.
                </p>
              </div>
            </Col>

            {/* RIGHT FORM */}
            <Col md={7}>
              <Form className="contact-form">
                <Row>
                  <Col md={6}>
                    <div className="field">
                      <FaUser />
                      <input type="text" placeholder="Name" />
                    </div>
                  </Col>

                  <Col md={6}>
                    <div className="field">
                      <FaEnvelope />
                      <input type="email" placeholder="Email" />
                    </div>
                  </Col>
                </Row>

                <div className="field">
                  <FaPhone />
                  <input type="text" placeholder="Phone" />
                </div>

                <div className="field">
                  <textarea placeholder="Message" rows="3"></textarea>
                </div>

                <Button className="submit-btn">Send Message →</Button>
              </Form>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}
