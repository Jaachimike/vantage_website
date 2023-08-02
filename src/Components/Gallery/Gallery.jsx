import React from "react";

const Gallery = ({ images }) => {
  return (
    <div className=" mx-52 grid lg:grid-cols-5 gap-4 md:grid-cols-2 md:mx-20 sm:grid-cols-1 sm:mx-20 ">
      {images.map((image, index) => (
        <div key={index} className="border p-2">
          <a href={image.link} target="_blank" rel="noopener noreferrer">
            <img
              src={image.src}
              alt={`Img ${index + 1}`}
              className="w-full h-auto"
            />
          </a>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
