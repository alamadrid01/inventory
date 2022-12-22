import React from "react";
import femi from "./assets/designer.svg";
import "./styles/Testimonies.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper";

function Testimonies() {
  return (
    <div>
      <div className="testimony">
        <h2>Testimonials</h2>
        <p>People i have worked for have some nice things to say...</p>
        <Swiper
          className="mySwiper"
          slidesPerView={1}
          spaceBetween={10}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
        >
          <SwiperSlide>
            <div className="swiper-content">
              <img src={femi} alt="" />
              <p>
                “Al-ameen was a real pleasure to work with and we look forward
                to working with him again. He’s definitely the kind of{" "}
                <developer></developer> you can trust with a project from start
                to finish.”
              </p>
              <h3>Bamifemi </h3>
              <span>CEO, Bamifemi Art</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-content">
              <img src={femi} alt="" />
              <p>
                “Al-ameen was a real pleasure to work with and we look forward
                to working with him again. He’s definitely the kind of{" "}
                <developer></developer> you can trust with a project from start
                to finish.”
              </p>
              <h3>Bamifemi </h3>
              <span>CEO, Bamifemi Art</span>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Testimonies;
