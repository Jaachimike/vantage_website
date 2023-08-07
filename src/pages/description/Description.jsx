import React from "react";
import poster from "../../Images/logo.png";
import Carousel from "../../Components/Carousel/Carousel";

const Description = () => {
  return (
    <div className="container mx-auto px-10 my-11">
      <div className="flex flex-col mb-20 lg:flex-row items-center lg:justify-center ">
        {/* Picture */}
        <div className="lg:w-1/2 mb-4 lg:mb-0">
          <img
            src={poster}
            alt="Movie Poster"
            className="rounded-lg shadow-lg w-64 h-auto"
          />
        </div>
        {/* Writeup */}
        <div className="lg:w-1/2 lg:pl-8">
          <h1 className="text-3xl font-semibold mb-4">Movie Title</h1>
          <p className="text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec
            bibendum lectus. In eu justo nec nisi faucibus blandit in ut elit.
            Suspendisse potenti. Quisque non lacinia turpis. Nullam vestibulum,
            turpis in volutpat dignissim, justo felis pharetra mi, eget luctus
            purus felis at odio. Integer bibendum at mauris at feugiat. Nam
            consectetur, libero sit amet gravida congue, sapien nibh blandit
            velit, nec varius eros tortor ut sapien. Nullam hendrerit lectus
            eget magna hendrerit, id sollicitudin lectus luctus. Nulla in
            volutpat tellus, at aliquam nulla. Nulla facilisi. Sed auctor
            sollicitudin metus id rhoncus. Sed aliquam, massa non mollis
            tristique, metus justo fermentum felis, ac dictum arcu ex eget
            magna.
          </p>
        </div>
      </div>

      <div className="flex justify-center">
        <div className=" w-full max-w-screen-md p-4 ">
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
      </div>
    </div>
  );
};

export default Description;
