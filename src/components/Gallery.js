import "./Gallery.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronLeft,
  faCircleChevronRight,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

function Gallery(props) {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = (index) => {
    setSlideNumber(index);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const prevSlide = () => {
    slideNumber === 0
      ? setSlideNumber(props.galleryImages.length - 1)
      : setSlideNumber(slideNumber - 1);
  };
  const nextSlide = () => {
    slideNumber + 1 === props.galleryImages.length
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1);
  };

  return (
    <div>
      {openModal && (
        <div className="sliderWrap">
          <FontAwesomeIcon
            icon={faCircleXmark}
            className="btnClose"
            onClick={handleCloseModal}
          />
          <FontAwesomeIcon
            icon={faCircleChevronLeft}
            className="btnPrev"
            onClick={prevSlide}
          />
          <FontAwesomeIcon
            icon={faCircleChevronRight}
            className="btnNext"
            onClick={nextSlide}
          />

          <div className="fullScreenImage">
            <img src={props.galleryImages[slideNumber].urls.regular} alt="" />
          </div>
        </div>
      )}

      <div className="header">
        <h1>Gallery</h1>
      </div>
      <div className="galleryWrap">
        {props.galleryImages &&
          props.galleryImages.map((slide, index) => {
            return (
              <div
                className="single"
                key={index}
                onClick={() => handleOpenModal(index)}
              >
                <img src={slide.urls.regular} alt="" />
              </div>
            );
          })}
      </div>
    </div>
  );
}
export default Gallery;
