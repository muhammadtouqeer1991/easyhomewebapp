// components/ContactEasyHome.jsx
"use client";

import { FaCheckCircle } from "react-icons/fa";

export default function ContactMortgageSection() {
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
              <form className="contact-form">
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Your Email Id" />
                <input type="text" placeholder="Phone" />

                <textarea rows="5" placeholder="Message"></textarea>

                <div className="text-end">
                  <button type="submit">Send</button>
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
          background: #0b57d0;
          color: #fff;
          border: none;
          padding: 10px 28px;
          border-radius: 4px;
          font-size: 15px;
          font-weight: 500;
          transition: 0.3s;
        }

        .contact-form button:hover {
          background: #0847ad;
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
