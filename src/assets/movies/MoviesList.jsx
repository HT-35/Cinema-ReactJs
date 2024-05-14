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

import useSWR from "swr";
import { fetcher } from "../../config/config";
import { useEffect, useState } from "react";

//const api =
//  "https://api.themoviedb.org/3/movie/now_playing?api_key=9a7aece2bf41a46e74ed0abeb63b30f7&language=en-US&page=1";

const api = `https://ophim1.com/danh-sach/phim-moi-cap-nhat?page=1`;

const MoviesList = () => {
  const { data, error, isLoading } = useSWR(api, fetcher);

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    console.log("data:", data?.items);
    //if (data && data.result) setMovies(data);
    //console.log("data:", movies);
  }, [data, movies]);

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
