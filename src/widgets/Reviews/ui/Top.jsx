import React, { useState, useEffect } from "react";
import Sprite from "../../../shared/ui/Sprite/Sprite";

const Top = ({ prevSlide, nextSlide, swiperRef }) => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const swiperInstance = swiperRef.current.swiper;

      const handleSlideChange = () => {
        setIsBeginning(swiperInstance.isBeginning);
        setIsEnd(swiperInstance.isEnd);
      };

      swiperInstance.on("slideChange", handleSlideChange);
      handleSlideChange();

      return () => {
        swiperInstance.off("slideChange", handleSlideChange);
      };
    }
  }, []);
  return (
    <div className="reviews__top">
      <h3 className="title">
        Отзывы <span>судьбы</span>
      </h3>
      <div className="reviews__buttons">
        <button className="reviews__button" onClick={prevSlide} disabled={isBeginning}>
          <Sprite width={12} height={20} icon="slider-prev" />
        </button>
        <button className="reviews__button" onClick={nextSlide} disabled={isEnd}>
          <Sprite width={12} height={20} icon="slider-next" />
        </button>
      </div>
    </div>
  );
};

export default Top;
