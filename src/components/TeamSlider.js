"use client";

import React from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";

import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const team = [
  {
    name: "David Driscoll",
    role: "Manager",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Andon Wardin",
    role: "Loan Officer",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Mark Morrell",
    role: "Area Manager",
    img: "https://randomuser.me/api/portraits/men/55.jpg",
  },
  {
    name: "Jubin Indona",
    role: "Accountant",
    img: "https://randomuser.me/api/portraits/men/65.jpg",
  },
  {
    name: "David Driscoll",
    role: "Manager",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Andon Wardin",
    role: "Loan Officer",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Mark Morrell",
    role: "Area Manager",
    img: "https://randomuser.me/api/portraits/men/55.jpg",
  },
  {
    name: "Jubin Indona",
    role: "Accountant",
    img: "https://randomuser.me/api/portraits/men/65.jpg",
  },
  {
    name: "Mark Morrell",
    role: "Area Manager",
    img: "https://randomuser.me/api/portraits/men/55.jpg",
  },
  {
    name: "Jubin Indona",
    role: "Accountant",
    img: "https://randomuser.me/api/portraits/men/65.jpg",
  },
];

const TeamSlider = () => {
  return (
    <div className="team-modern">
      <Container>
        <div className="text-center mb-5">
          <h6>OUR TEAM</h6>
          <h2>Meet Our Experts</h2>
        </div>

        <Swiper
          modules={[EffectCoverflow, Autoplay]}
          effect="coverflow"
          centeredSlides={true}
          //   centeredSlidesBounds={true}
          loop={true}
          slidesPerView={4}
          spaceBetween={10}
          initialSlide={1} // ⭐ important for center start
          //   autoplay={{ delay: 2500 }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1.3,
            slideShadows: false,
          }}
          breakpoints={{
            320: { slidesPerView: 1, initialSlide: 0 },
            576: { slidesPerView: 2, initialSlide: 1 },
            768: { slidesPerView: 3, initialSlide: 1 },
            1200: { slidesPerView: 4, initialSlide: 1 },
          }}
        >
          {team.map((member, i) => (
            <SwiperSlide key={i}>
              <div className="team-card">
                <div className="img-wrap">
                  <img src={member.img} alt="" />

                  <div className="overlay">
                    <FaFacebookF />
                    <FaTwitter />
                    <FaLinkedinIn />
                  </div>
                </div>

                <div className="info">
                  <h5>{member.name}</h5>
                  <span>{member.role}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>

      <style jsx>{`
        .swiper {
          padding: 40px 0; /* gives breathing space */
        }

        .swiper-wrapper {
          align-items: center;
        }
        .team-modern {
          padding: 50px 0;
        }

        h6 {
          color: #5fb43d;
          font-weight: 600;
        }

        h2 {
          font-weight: 700;
        }

        /* CARD */
        .team-card {
          backdrop-filter: blur(8px);
          background: #f7f7f7;
          border-radius: 18px;
          padding: 25px 15px;
          text-align: center;
          transition: 0.4s;
        }

        /* IMAGE */
        .img-wrap {
          position: relative;
          width: 140px;
          height: 140px;
          margin: auto;
          border-radius: 50%;
          padding: 4px;
          background: linear-gradient(135deg, #5fb43d, #1855a5);
        }

        .img-wrap img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid #fff;
        }

        /* OVERLAY */
        .overlay {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.6);
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 12px;
          opacity: 0;
          transition: 0.3s;
          color: #fff;
        }

        .img-wrap:hover .overlay {
          opacity: 1;
        }

        .overlay svg:hover {
          color: #5fb43d;
        }

        /* TEXT */
        .info {
          margin-top: 12px;
        }

        .info h5 {
          font-size: 16px;
          font-weight: 600;
        }

        .info span {
          font-size: 13px;
          color: #777;
        }

        /* SLIDE EFFECT */
        .swiper-slide {
          opacity: 0.5;
          transform: scale(0.85);
          transition: all 0.4s ease;
        }

        .swiper-slide-active {
          opacity: 1;
          transform: scale(1.1);
          z-index: 2;
        }
      `}</style>
    </div>
  );
};

export default TeamSlider;
