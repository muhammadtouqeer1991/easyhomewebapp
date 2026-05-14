// components/WhoWeHelp.jsx
"use client";
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const cards = [
  {
    title: "First-Time Homebuyers",
    image: "/help01.png",
  },
  {
    title: "UAE Expats",
    image: "/help02.png",
  },
  {
    title: "Property Investors",
    image: "/help03.png",
  },
  {
    title: "Business Owners",
    image: "/help04.png",
  },
  {
    title: "Commercial Property Buyers",
    image: "/help05.png",
  },
  {
    title: "Self-Employed Professionals",
    image: "/help06.png",
  },
  {
    title: "Business Owners",
    image: "/help01.png",
  },
  {
    title: "Commercial Property Buyers",
    image: "/help02.png",
  },
  {
    title: "Self-Employed Professionals",
    image: "/help03.png",
  },
  {
    title: "Business Owners",
    image: "/help04.png",
  },
  {
    title: "Commercial Property Buyers",
    image: "/help05.png",
  },
  {
    title: "Self-Employed Professionals",
    image: "/help06.png",
  },
];

const chunkArray = (arr, size) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

const slides = chunkArray(cards, 4);

export default function WhoWeHelp() {
  return (
    <>
      <div className="who-help-section">
        <div className="container px-0">
          <h2 className="main-heading">
            WHO WE <span>HELP</span>
          </h2>
          <p className="sub-heading">
            <span className="primarytxt fw-bold">Mortgage</span> Solutions Built
            for Every Type of Buyer
          </p>

          <Carousel
            indicators={false}
            interval={null}
            nextIcon={
              <div className="custom-arrow">
                <FaChevronRight />
              </div>
            }
            prevIcon={
              <div className="custom-arrow">
                <FaChevronLeft />
              </div>
            }
          >
            {slides.map((slide, idx) => (
              <Carousel.Item key={idx}>
                <div className="cards-row">
                  {slide.map((item, index) => (
                    <div className="help-card" key={index}>
                      <div className="img-wrapper">
                        <img src={item.image} alt={item.title} />
                      </div>

                      <h6>{item.title}</h6>
                    </div>
                  ))}
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>

      <style jsx>{`
        .who-help-section {
          background: #fff;
          padding: 45px 55px;
          border-radius: 4px;
          overflow: hidden;
        }

        .main-heading {
          font-size: 34px;
          font-weight: 800;
          color: #111;
          margin-bottom: 8px;
          letter-spacing: 0.5px;
        }

        .main-heading span {
          color: #074dab;
        }

        .sub-heading {
          font-size: 15px;
          color: #5f6368;
          margin-bottom: 35px;
          font-weight: 500;
        }

        .cards-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 22px;
        }

        .help-card {
          text-align: center;
        }

        .img-wrapper {
          border-radius: 10px;
          overflow: hidden;
          // height: 140px;
          background: #ddd;
          transition: all 0.3s ease;
        }

        .img-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.4s ease;
        }

        .help-card:hover img {
          transform: scale(1.06);
        }

        .help-card h6 {
          margin-top: 12px;
          font-size: 13px;
          font-weight: 500;
          color: #222;
          line-height: 1.5;
        }

        :global(.carousel-control-prev),
        :global(.carousel-control-next) {
          width: 42px;
          opacity: 1;
        }

        .custom-arrow {
          width: 42px;
          height: 42px;
          background: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #111;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
          font-size: 14px;
        }

        .carousel-control-next {
          right: 0;
          bottom: 53px;
        }

        @media (max-width: 1199px) {
          .cards-row {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 767px) {
          .who-help-section {
            padding: 30px 20px;
          }

          .main-heading {
            font-size: 26px;
          }

          .cards-row {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }

          .img-wrapper {
            height: 120px;
          }

          .help-card h6 {
            font-size: 12px;
          }
        }

        @media (max-width: 480px) {
          .cards-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}
