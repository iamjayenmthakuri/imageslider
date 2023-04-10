import Slider from "react-slick";
import React from "react";

function ImageSlider({ images }) {
  const settings = {
    dots: true,
    infinate: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {images.map((image) => (
        <div key={image.id}>
          <img src={images} alt="image1" />
          <img src={images} alt="image2" />
          <img src={images} alt="image3" />
          <img src={images} alt="image4" />
        </div>
      ))}
    </Slider>
  );
}
export default ImageSlider;
