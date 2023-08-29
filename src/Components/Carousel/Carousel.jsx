import React from "react";

// import "./styles.css";
// import classes from "./index.module.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import PropTypes from "prop-types";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const propTypes = {
  images: PropTypes.array,
  title: PropTypes.string,
};

const defaultProps = {
  images: [],
  title: "",
};

const Carousel = ({ images, title }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">
        {title}{" "}
        <span className="text-sm">
          <a href="http://">See more</a>
        </span>
      </h2>

      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {images.map((imageUrl, index) => (
          <SwiperSlide key={index}>
            <img src={imageUrl} alt={`Img ${index}`} className=" w-80 h-auto" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

Carousel.propTypes = propTypes;
Carousel.defaultProps = defaultProps;

export default Carousel;
