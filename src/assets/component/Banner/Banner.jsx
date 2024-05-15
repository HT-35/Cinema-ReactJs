//import {
//  Navigation,
//  Pagination,
//  Scrollbar,
//  A11y,
//  Autoplay,
//} from "swiper/modules";

//import { Swiper, SwiperSlide } from "swiper/react";

//// Import Swiper styles
//import "swiper/css";
//import "swiper/css/navigation";
//import "swiper/css/pagination";
//import "swiper/css/scrollbar";

//import "swiper/swiper-bundle.css";
//import useSWR from "swr";
//import { fetcher } from "../../../config/config";
//import BannerDetail from "./BannerDetail";
//import { useEffect, useState } from "react";

//const Banner = () => {
//  const api = "https://ophim1.com/danh-sach/phim-moi-cap-nhat?page=1";
//  const { data } = useSWR(api, fetcher);
//  const [movies, setMovies] = useState([]);

//  useEffect(() => {
//    if (data && data.items) setMovies(data.items);
//  }, [data]);

//  // Thêm một loading state để đảm bảo dữ liệu được tải trước khi Swiper hiển thị
//  if (!data) {
//    return <div>Loading...</div>;
//  }

//  return (
//    <div className="movies-panner">
//      <Swiper
//        effect="slide"
//        slidesPerView={1}
//        loop={true}
//        navigation={true}
//        pagination={{ clickable: true }}
//        autoplay={{
//          delay: 4000,
//          disableOnInteraction: false,
//          pauseOnMouseEnter: true,
//          stopOnLastSlide: false,
//          waitForTransition: true,
//        }}
//        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
//      >
//        {movies?.length > 0 &&
//          movies.map((item) => (
//            <SwiperSlide key={item._id}>
//              <BannerDetail movies={item} />
//            </SwiperSlide>
//          ))}
//      </Swiper>
//    </div>
//  );
//};

//export default Banner;

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
import useSWR from "swr";
import { fetcher } from "../../../config/config";
import BannerDetail from "./BannerDetail";

const Banner = () => {
  const api = "https://ophim1.com/danh-sach/phim-moi-cap-nhat?page=1";
  const { data } = useSWR(api, fetcher);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (data && data.items) setMovies(data.items);
  }, [data]);

  if (!data) {
    return <div>Loading...</div>;
  }

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
          movies.map((item) => (
            <SwiperSlide key={item._id}>
              <BannerDetail movies={item} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default Banner;
