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
import MoviesCard from "./MoviesCardPa";

import { useEffect, useState } from "react";
import { callApiGet } from "../utils/callApi";

const MoviesList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchNewData = async () => {
      const url =
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
      const data = await callApiGet(url);

      setMovies(data?.data?.results);
      //console.log("data:", data.data.results);
      return data;
      //if (data && data.items) setMovies(data.items);
    };
    fetchNewData();
  }, []);
  return (
    <div className="movies-list">
      <Swiper
        effect="slide"
        slidesPerView={4}
        spaceBetween={50}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
          stopOnLastSlide: false,
          waitForTransition: true,
        }}
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      >
        {movies?.length > 0 &&
          movies.map((item, index) => (
            <SwiperSlide key={item._id || index}>
              <MoviesCard movies={item} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default MoviesList;
