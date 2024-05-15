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

// api get all phim
const api = `https://ophim1.com/danh-sach/phim-moi-cap-nhat?page=1`;
// api get detail phim :   https://ophim1.com/phim/godzilla-x-kong-de-che-moi

// poster : https://img.ophim.live/uploads/movies/

const MoviesList = () => {
  //const { data, error, isLoading } = useSWR(api, fetcher);
  const { data } = useSWR(api, fetcher);

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (data && data.items) setMovies(data.items);
  }, [data, movies]);

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
          movies.map((item) => (
            <SwiperSlide key={item._id}>
              <MoviesCard movies={item} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default MoviesList;
