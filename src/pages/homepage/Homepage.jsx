import React from "react";
import Slider from "../../Components/Slider/Slider";
import Carousel from "../../Components/Carousel/Carousel";

const Homepage = () => {
  return (
    <div>
      <div className="hero_section">
        <Slider />
      </div>

      <div className="flex justify-center  h-screen bg-gray-100">
        <div className="w-full max-w-screen-md p-4 ">
          <div className=" p-4 rounded-lg mb-10">
            <Carousel
              title={"Kupids Korner"}
              images={[
                "https://swiperjs.com/demos/images/nature-1.jpg",
                "https://swiperjs.com/demos/images/nature-1.jpg",
                "https://swiperjs.com/demos/images/nature-1.jpg",
                "https://swiperjs.com/demos/images/nature-1.jpg",
                "https://swiperjs.com/demos/images/nature-1.jpg",
                "https://swiperjs.com/demos/images/nature-1.jpg",
                "https://swiperjs.com/demos/images/nature-1.jpg",
                "https://swiperjs.com/demos/images/nature-1.jpg",
                "https://swiperjs.com/demos/images/nature-1.jpg",
                "https://swiperjs.com/demos/images/nature-1.jpg",
                "https://swiperjs.com/demos/images/nature-1.jpg",
                "https://swiperjs.com/demos/images/nature-1.jpg",
                "https://swiperjs.com/demos/images/nature-1.jpg",
                "https://swiperjs.com/demos/images/nature-1.jpg",
                "https://swiperjs.com/demos/images/nature-1.jpg",
                "https://swiperjs.com/demos/images/nature-1.jpg",
              ]}
            />
          </div>

          <div className=" p-4 rounded-lg mb-10">
            <Carousel
              title={"Chat O'Clock"}
              images={[
                "https://swiperjs.com/demos/images/nature-1.jpg",
                "https://swiperjs.com/demos/images/nature-1.jpg",
                "https://swiperjs.com/demos/images/nature-1.jpg",
                "https://swiperjs.com/demos/images/nature-1.jpg",
                "https://swiperjs.com/demos/images/nature-1.jpg",
                "https://swiperjs.com/demos/images/nature-1.jpg",
                "https://swiperjs.com/demos/images/nature-1.jpg",
                "https://swiperjs.com/demos/images/nature-1.jpg",
                "https://swiperjs.com/demos/images/nature-1.jpg",
                "https://swiperjs.com/demos/images/nature-1.jpg",
                "https://swiperjs.com/demos/images/nature-1.jpg",
                "https://swiperjs.com/demos/images/nature-1.jpg",
                "https://swiperjs.com/demos/images/nature-1.jpg",
                "https://swiperjs.com/demos/images/nature-1.jpg",
                "https://swiperjs.com/demos/images/nature-1.jpg",
                "https://swiperjs.com/demos/images/nature-1.jpg",
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
