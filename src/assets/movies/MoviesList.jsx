import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import MoviesCard from "./MoviesCard";

const MoviesList = () => {
  return (
    <div className="movies-list">
      <Swiper
        effect="slide"
        slidesPerView={4}
        spaceBetween={50}
        //grabCursor={true}
        //since the slides array length is 6,
        //slidesPerView should be less than or equal to 3
        loop={true}
        navigation
        pagination={{ clickable: true }}
        //scrollbar={{ draggable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
          stopOnLastSlide: false,
          waitForTransition: true,
        }}
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      >
        <SwiperSlide>
          {" "}
          <MoviesCard></MoviesCard>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <MoviesCard></MoviesCard>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <MoviesCard></MoviesCard>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <MoviesCard></MoviesCard>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <MoviesCard></MoviesCard>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <MoviesCard></MoviesCard>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MoviesList;
