import React, { useState } from "react";
import poster from "../../Images/logo.png";
import Carousel from "../../Components/Carousel/Carousel";
import ReactModal from "react-modal";
import ReactPlayer from "react-player/lazy";

const Description = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const openYouTubeChannel = () => {
    window.open("https://www.youtube.com/your-channel-url", "_blank");
  };

  return (
    <div className="container mx-auto px-10 my-11 h-screen">
      <div className="flex flex-col mb-20 lg:flex-row items-center lg:justify-center">
        {/* Picture */}
        <div
          className="lg:w-1/2 mb-4 lg:mb-0 cursor-pointer"
          onClick={openModal}
        >
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
          <button
            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={openYouTubeChannel}
          >
            Visit YouTube Channel
          </button>
        </div>
      </div>

      <div className=" w-1/2 md:w-full">
        {/* Modal */}
        <ReactModal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={{
            content: {
              width: "50%", // Adjust the width as needed
              height: "50%", // Adjust the height as needed
              margin: "auto", // Center the modal
            },
          }}
        >
          <button onClick={closeModal}>Close Modal</button>
          <ReactPlayer url="https://www.youtube.com/watch?v=your-video-id" />
        </ReactModal>
      </div>

      {/* Carousel */}
      {/* <div className="flex justify-center">
        <div className="w-full max-w-screen-2xl p-4">
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
      </div> */}
    </div>
  );
};

export default Description;
