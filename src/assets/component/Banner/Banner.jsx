import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/swiper-bundle.css";

import BannerDetail from "./BannerDetail";

import { callApiGet } from "../../utils/callApi";

const Banner = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchNewData = async () => {
      const url =
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
      const data = await callApiGet(url);
      console.log("data:", data);
      setMovies(data.data.results);
      //console.log("data:", data.data.results);
      return data;
      //if (data && data.items) setMovies(data.items);
    };
    fetchNewData();
  }, []);

  return (
    <div className="movies-banner">
      <Swiper
        effect="slide"
        slidesPerView={1}
        loop={true}
        navigation={true}
        //pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
          stopOnLastSlide: false,
          waitForTransition: true,
        }}
        speed={1000} // Thêm thuộc tính speed để làm mượt chuyển slide
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      >
        {movies?.length > 0 &&
          movies?.map((item, index) => (
            <SwiperSlide key={index}>
              <BannerDetail movies={item} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default Banner;
