"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";

const HomeintroSwiper = () => {
  return (
    <>
      <div className="HomeintroSwiper position-relative">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          slidesPerView={1}
          className="mySwiper"
        >
          <SwiperSlide>
            <Image
              src="/banner1.webp"
              alt="Slide 1"
              width={650}
              height={500}
              loading="eager"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/banner2.webp"
              alt="Slide 2"
              width={650}
              height={500}
              loading="eager"
            />
          </SwiperSlide>
        </Swiper>
        <Image
          src="/shape.webp"
          alt="Shape"
          width={100}
          height={300}
          className="shape position-absolute"
        />
      </div>
    </>
  );
};

export default HomeintroSwiper;
