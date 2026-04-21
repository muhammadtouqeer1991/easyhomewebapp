"use client";

import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import {
  FaUser,
  FaEnvelope,
  FaCommentDots,
  FaPaperPlane,
} from "react-icons/fa";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Message Sent Successfully!");
  };

  return (
    <div style={styles.wrapper}>
      <Container>
        <Row className="justify-content-center align-items-center">
          {/* LEFT SIDE INFO */}
          <Col lg={5} className="mb-4">
            <div style={styles.infoBox}>
              <h1 style={styles.title}>Get in Touch</h1>
              <p style={styles.desc}>
                Have a project in mind or need help? We’re here to listen and
                help you build something amazing.
              </p>

              <div style={styles.infoItem}>📍 Dubai, UAE</div>
              <div style={styles.infoItem}>📧 info@easyhomemortgage.com</div>
              <div style={styles.infoItem}>📞 +92 300 0000000</div>
            </div>
          </Col>

          {/* FORM SIDE */}
          <Col lg={6}>
            <Card style={styles.card}>
              <h2 style={styles.heading}>Send Message</h2>
              <p style={styles.subText}>
                Fill the form and we’ll respond quickly.
              </p>

              <Form onSubmit={handleSubmit}>
                {/* NAME */}
                <div style={styles.field}>
                  <FaUser style={styles.icon} />
                  <Form.Control
                    type="text"
                    placeholder="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={styles.input}
                  />
                </div>

                {/* EMAIL */}
                <div style={styles.field}>
                  <FaEnvelope style={styles.icon} />
                  <Form.Control
                    type="email"
                    placeholder="Your Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={styles.input}
                  />
                </div>

                {/* MESSAGE */}
                <div style={styles.field}>
                  <FaCommentDots style={styles.icon} />
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Your Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    style={styles.textarea}
                  />
                </div>

                {/* BUTTON */}
                <Button type="submit" style={styles.button}>
                  <FaPaperPlane style={{ marginRight: "8px" }} />
                  Send Message
                </Button>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

/* ================= STYLES ================= */
const styles = {
  wrapper: {
    // minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    // background: "linear-gradient(135deg, #eef2ff, #fdf2f8)",
    padding: "60px 0",
  },

  /* LEFT INFO */
  infoBox: {
    padding: "20px",
  },
  title: {
    fontSize: "40px",
    fontWeight: "700",
    marginBottom: "15px",
    color: "#111",
  },
  desc: {
    fontSize: "16px",
    color: "#555",
    marginBottom: "25px",
    lineHeight: "1.6",
  },
  infoItem: {
    marginBottom: "12px",
    fontSize: "15px",
    color: "#333",
    padding: "8px 0",
    borderBottom: "1px solid #eee",
  },

  /* CARD */
  card: {
    padding: "35px",
    borderRadius: "18px",
    border: "none",
    background: "#fff",
    boxShadow: "0 15px 40px rgba(0,0,0,0.08)",
  },
  heading: {
    fontWeight: "700",
    marginBottom: "5px",
    textAlign: "center",
  },
  subText: {
    textAlign: "center",
    color: "#777",
    marginBottom: "25px",
  },

  /* INPUT FIELD */
  field: {
    display: "flex",
    alignItems: "center",
    border: "1px solid #eee",
    borderRadius: "12px",
    padding: "12px 14px",
    marginBottom: "15px",
    background: "#fafafa",
    transition: "0.3s",
  },

  icon: {
    marginRight: "10px",
    color: "#666",
    fontSize: "14px",
  },

  input: {
    border: "none",
    outline: "none",
    boxShadow: "none",
    background: "transparent",
  },

  textarea: {
    border: "none",
    outline: "none",
    boxShadow: "none",
    width: "100%",
    background: "transparent",
    resize: "none",
  },

  /* BUTTON */
  button: {
    width: "100%",
    padding: "12px",
    borderRadius: "12px",
    background: "#5fb43d",
    border: "none",
    fontWeight: "600",
    transition: "0.3s",
  },
};

export default ContactPage;
