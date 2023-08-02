import React from "react";
import Gallery from "../../Components/Gallery/Gallery";
import Logo from "../../Images/logo.png";

const images = [
  {
    src: Logo,
    link: "https://example.com/link1",
  },
  {
    src: Logo,
    link: "https://example.com/link2",
  },
  {
    src: Logo,
    link: "https://example.com/link1",
  },
  {
    src: Logo,
    link: "https://example.com/link1",
  },
  {
    src: Logo,
    link: "https://example.com/link1",
  },
  {
    src: Logo,
    link: "https://example.com/link1",
  },
  {
    src: Logo,
    link: "https://example.com/link1",
  },
  {
    src: Logo,
    link: "https://example.com/link1",
  },
  // Add more image objects as needed
];

const Movies = () => {
  return (
    <div className="my-9">
      <h1 className="text-4xl ml-20 mb-14">Here are some of your shows</h1>
      <Gallery images={images} />
    </div>
  );
};

export default Movies;
