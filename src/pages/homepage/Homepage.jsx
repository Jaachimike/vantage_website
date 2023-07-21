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
        <div className="w-full max-w-screen-md p-4">
          <div className="bg-white p-4 rounded-lg">
            <h2 className="text-2xl font-semibold mb-2">
              Kupids Corner{" "}
              <span className="text-sm">
                <a href="http://">See more</a>
              </span>
            </h2>
            <Carousel
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

{
  /* <div>
            <h2>
              Kupids Corner <span>See more</span>
            </h2>
            <Carousel
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

          <div>
            <h2>
              Kupids Corner <span>See more</span>
            </h2>
            <Carousel
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
          </div> */
}
