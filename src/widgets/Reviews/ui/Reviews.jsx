import React, { useCallback, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Item from "./Item";
import Top from "./Top";

import "./Reviews.css";
import "swiper/css";
import "swiper/css/pagination";

const Reviews = () => {
  const swiperRef = useRef();

  const prevSlide = useCallback(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  }, []);
  const nextSlide = useCallback(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  }, []);

  return (
    <section className="reviews">
      <div className="container">
        <Top
          nextSlide={nextSlide}
          prevSlide={prevSlide}
          swiperRef={swiperRef}
        />
        <Swiper
          className="reviews__swiper"
          spaceBetween={20}
          modules={[Pagination]}
          pagination={{ clickable: true }}
          ref={swiperRef}
          slidesPerView={1}
        >
          <SwiperSlide>
            <div className="reviews__slide">
              <Item name="Юлия К." date="12 декабря 2023">
                Волшебная Матрица перевернула мою жизнь! Где раньше была тьма,
                теперь светит надежда. Благодарю за это!
              </Item>
              <Item name="Дарья Н." date="12 декабря 2023">
                Волшебная Матрица перевернула мою жизнь! Где раньше была тьма,
                теперь светит надежда. Благодарю за это!
              </Item>
              <Item name="Алина В." date="12 декабря 2023">
                В Матрице я нашел не только ответы на свои вопросы, но и
                вдохновение для создания своей собственной судьбы.
              </Item>
              <Item name="Юлия К." date="12 декабря 2023">
              Волшебная Матрица перевернула мою жизнь! Где раньше была тьма,
              теперь светит надежда. Благодарю за это!
              </Item>
              <Item name="Дарья Н." date="12 декабря 2023">
                Волшебная Матрица перевернула мою жизнь! Где раньше была тьма,
                теперь светит надежда. Благодарю за это!
              </Item>
              <Item name="Алина В." date="12 декабря 2023">
                В Матрице я нашел не только ответы на свои вопросы, но и
                вдохновение для создания своей собственной судьбы.
              </Item>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="reviews__slide">
              <Item name="Юлия К." date="12 декабря 2023">
                Волшебная Матрица перевернула мою жизнь! Где раньше была тьма,
                теперь светит надежда. Благодарю за это!
              </Item>
              <Item name="Юлия К." date="12 декабря 2023">
                Волшебная Матрица перевернула мою жизнь! Где раньше была тьма,
                теперь светит надежда. Благодарю за это!
              </Item>
              <Item name="Юлия К." date="12 декабря 2023">
                Волшебная Матрица перевернула мою жизнь! Где раньше была тьма,
                теперь светит надежда. Благодарю за это!
              </Item>
              <Item name="Юлия К." date="12 декабря 2023">
                Волшебная Матрица перевернула мою жизнь! Где раньше была тьма,
                теперь светит надежда. Благодарю за это!
              </Item>
              <Item name="Юлия К." date="12 декабря 2023">
                Волшебная Матрица перевернула мою жизнь! Где раньше была тьма,
                теперь светит надежда. Благодарю за это!
              </Item>
              <Item name="Юлия К." date="12 декабря 2023">
                Волшебная Матрица перевернула мою жизнь! Где раньше была тьма,
                теперь светит надежда. Благодарю за это!
              </Item>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="reviews__slide">
              <Item name="Юлия К." date="12 декабря 2023">
                Волшебная Матрица перевернула мою жизнь! Где раньше была тьма,
                теперь светит надежда. Благодарю за это!
              </Item>
              <Item name="Юлия К." date="12 декабря 2023">
                Волшебная Матрица перевернула мою жизнь! Где раньше была тьма,
                теперь светит надежда. Благодарю за это!
              </Item>
              <Item name="Юлия К." date="12 декабря 2023">
                Волшебная Матрица перевернула мою жизнь! Где раньше была тьма,
                теперь светит надежда. Благодарю за это!
              </Item>
              <Item name="Юлия К." date="12 декабря 2023">
                Волшебная Матрица перевернула мою жизнь! Где раньше была тьма,
                теперь светит надежда. Благодарю за это!
              </Item>
              <Item name="Юлия К." date="12 декабря 2023">
                Волшебная Матрица перевернула мою жизнь! Где раньше была тьма,
                теперь светит надежда. Благодарю за это!
              </Item>
              <Item name="Юлия К." date="12 декабря 2023">
                Волшебная Матрица перевернула мою жизнь! Где раньше была тьма,
                теперь светит надежда. Благодарю за это!
              </Item>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
