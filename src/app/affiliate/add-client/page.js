"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

export default function AddClient() {
  const router = useRouter();

  const [user, setUser] = useState(null);

  const [form, setForm] = useState({
    client_name: "",
    phone: "",
    email: "",
    service_type: "",
    notes: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/affiliate");
      return;
    }

    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, [router]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const user = JSON.parse(localStorage.getItem("user"));

    try {
      const res = await fetch(
        "https://api.easyhomemortgage.ae/api/add-client.php",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...form,
            affiliate_id: user?.affiliate_id,
          }),
        },
      );

      const result = await res.json();

      if (result.status) {
        alert("Client Added Successfully");
        router.push("/affiliate/dashboard");
      } else {
        alert(result.message);
      }
    } catch (err) {
      console.log(err);
      alert("Something went wrong");
    }

    setLoading(false);
  };

  return (
    <div className="py-5" style={{ background: "#f5f6fa", minHeight: "100vh" }}>
      <Container>
        <Row className="justify-content-center">
          <Col lg={12} md={8} sm={12}>
            <Card className="shadow border-0">
              <Card.Body>
                <h3 className="text-center mb-4">Add New Client</h3>

                <Form onSubmit={handleSubmit}>
                  {/* Client Name */}
                  <Form.Group className="mb-3">
                    <Form.Label>Client Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="client_name"
                      placeholder="Enter client name"
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  {/* Phone */}
                  <Form.Group className="mb-3">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                      type="text"
                      name="phone"
                      placeholder="Enter phone number"
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  {/* Email */}
                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Enter email"
                      onChange={handleChange}
                    />
                  </Form.Group>

                  {/* Service Type */}
                  <Form.Group className="mb-3">
                    <Form.Label>Service Type</Form.Label>
                    <Form.Control
                      type="text"
                      name="service_type"
                      placeholder="e.g. Real Estate, CV, Nursing"
                      onChange={handleChange}
                    />
                  </Form.Group>

                  {/* Notes */}
                  <Form.Group className="mb-3">
                    <Form.Label>Notes</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      name="notes"
                      placeholder="Enter notes"
                      onChange={handleChange}
                    />
                  </Form.Group>

                  {/* Buttons */}
                  <div className="d-flex gap-2">
                    <Button
                      variant="secondary"
                      className="w-50"
                      onClick={() => router.push("/affiliate/dashboard")}
                    >
                      Cancel
                    </Button>

                    <Button
                      type="submit"
                      variant="primary"
                      className="w-50"
                      disabled={loading}
                    >
                      {loading ? "Saving..." : "Save Client"}
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
