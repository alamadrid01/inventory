import React from "react";
import femi from "./assets/designer.svg";
import mentor from "./assets/mentor.svg";
import "./styles/Testimonies.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper";
import { useNavigate } from "react-router-dom";

function Testimonies() {
  const Navigate = useNavigate();
  return (
    <div className="Testimony">
      <div className="testimony">
        <h2>Testimonials</h2>
        <p>People i have worked for have some nice things to say...</p>
        <Swiper
          className="mySwiper"
          slidesPerView={1}
          spaceBetween={10}
          freeMode={false}
          pagination={{
            clickable: false,
          }}
          modules={[FreeMode, Pagination]}
        >
          <SwiperSlide>
            <div className="swiper-content">
              <img src={femi} alt="" />
              <p>
                “It's a real pleasure to work with Al-ameen and we look forward
                to work with him again. He’s definitely the kind of guy{" "}
                <developer></developer> you can trust with a project from start
                to finish.”
              </p>
              <h3>Bamifemi </h3>
              <span>CEO, Bamifemi Art</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-content">
              <img src={mentor} alt="" />
              <p>
                “Al-ameen is a clear communicator with the tenacity and confident to
                really dig in to tricky design scenarios and the collaborative
                friction that's needed to produce excellent work.”
              </p>
              <h3>Mark </h3>
              <span>CEO, Hotel NG</span>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="project">
            <h3>Start a project</h3>
            <p>Interested in working together? We should queue up a time to chat. I’ll buy the coffee.</p>
            <button onClick={() => Navigate("/project")}>Lets do this</button>
        </div>
    </div>
  );
}

export default Testimonies;
