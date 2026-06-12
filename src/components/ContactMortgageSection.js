// components/ContactEasyHome.jsx
"use client";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

export default function ContactMortgageSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        alert("Message Sent Successfully");

        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert("Something went wrong");
    }

    setLoading(false);
  };

  const features = [
    {
      title: "Expert Mortgage Advisors",
      desc: "Personalized guidance tailored to your financial goals",
    },
    {
      title: "Fast Bank Approvals",
      desc: "Access to leading UAE banking partners",
    },
    {
      title: "Transparent Process",
      desc: "No hidden confusion. No unnecessary delays.",
    },
    {
      title: "Transparent Process",
      desc: "No hidden confusion. No unnecessary delays.",
    },
  ];

  return (
    <>
      <div className="easyhome-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="section-title">WHY CONTACT EASYHOME MORTGAGES</h2>
            </div>
          </div>
          <div className="row align-items-center">
            {/* LEFT SIDE */}
            <div className="col-lg-5 mb-4 mb-lg-0">
              {features.map((item, index) => (
                <div className="feature-box" key={index}>
                  <div className="green-line"></div>

                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* RIGHT SIDE */}
            <div className="col-lg-7">
              <form className="contact-form" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email Id"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

                <input
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                />

                <textarea
                  rows="5"
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>

                <div className="text-end">
                  <button type="submit" disabled={loading}>
                    {loading ? "Sending..." : "Send"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* INTERNAL CSS */}
      <style jsx>{`
        .easyhome-wrapper {
          background: #fff;
          padding: 50px 0;
        }

        .section-title {
          font-size: 28px;
          font-weight: 700;
          color: #111;
          margin-bottom: 40px;
          text-transform: uppercase;
        }

        .feature-box {
          display: flex;
          gap: 18px;
          margin-bottom: 35px;
        }

        .green-line {
          width: 4px;
          min-width: 4px;
          background: #48b84b;
          border-radius: 10px;
        }

        .feature-box h4 {
          font-size: 24px;
          font-weight: 600;
          margin-bottom: 10px;
          color: #111;
        }

        .feature-box p {
          font-size: 17px;
          color: #444;
          margin: 0;
          line-height: 1.7;
        }

        .contact-form input,
        .contact-form textarea {
          width: 100%;
          border: none;
          background: #f5f5f5;
          padding: 16px 18px;
          margin-bottom: 18px;
          border-radius: 6px;
          font-size: 15px;
          outline: none;
        }

        .contact-form textarea {
          resize: none;
        }

        .contact-form button {
          background: #074dab;
          color: #fff;
          border: none;
          padding: 10px 28px;
          border-radius: 4px;
          font-size: 15px;
          font-weight: 500;
          transition: 0.3s;
        }

        .contact-form button:hover {
          background: #074dab;
        }

        @media (max-width: 991px) {
          .section-title {
            font-size: 24px;
          }

          .feature-box h4 {
            font-size: 20px;
          }

          .feature-box p {
            font-size: 15px;
          }
        }
      `}</style>
    </>
  );
}
