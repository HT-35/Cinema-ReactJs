import PropTypes from "prop-types";
import useSWR from "swr";
import { fetcher } from "../../../config/config";
import { useEffect, useState } from "react";
import { callApiGet } from "../../utils/callApi";

const BannerDetail = ({ movies }) => {
  const { original_title: name, backdrop_path, slug, id } = movies;
  console.log("id:", id);

  const [detailMovie, setDetailMovie] = useState(null);

  useEffect(() => {
    const fetchNewData = async () => {
      const url = "https://api.themoviedb.org/3/movie/${id}";
      console.log("url:", url);
      const data = await callApiGet(url);
      //console.log("data:", data);
      setDetailMovie(data);
      //console.log("data:", data.data.results);
      return data;
      //if (data && data.items) setMovies(data.items);
    };
    fetchNewData();
  }, []);

  //console.log("movies: ", movies);

  const apiDetailFilm = `https://ophim1.com/phim/${slug}`;

  //console.log("poster_url:", poster_url);
  const { data } = useSWR(apiDetailFilm, fetcher);
  //console.log("data:", data);
  const category = data?.movie?.category || [];

  const categoryList = category.map((item) => item.name);

  //console.log("cate:", cate);

  return (
    <section className="banner page-container h-[500px] relative  mb-5 ">
      <div
        className="rounded-lg absolute inset-0 overlay 
        bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0)]"
      ></div>
      <div className="w-full h-full bg-white rounded-lg">
        <img
          src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
          alt=""
          className="object-cover w-full h-full rounded-lg"
          //className="object-cover w-full h-full filter brightness-[0.7] rounded-lg"
        />
      </div>
      <div className="absolute -translate-y-40 ml-9">
        <div className="text-3xl font-semibold text-white title-banner">
          {name ? name : "Name Film"}
        </div>

        <div className="flex items-center justify-start gap-3 my-3 text-xs font-semibold text-white select-none title-banner">
          {categoryList.length > 0 &&
            categoryList.map((item, index) => {
              return (
                <span
                  key={index}
                  className="px-4 py-2 border-2 border-white border-opacity-50 rounded-md"
                >
                  {item}
                </span>
              );
            })}
          {/*<span className="px-4 py-2 border-2 border-white border-opacity-50 rounded-md">
            Adventure
          </span>
          <span className="px-4 py-2 border-2 border-white border-opacity-50 rounded-md">
            Drama
          </span>*/}
        </div>

        <div className="grid grid-cols-2 select-none">
          <button className="py-3 px-6 text-white button bg-[#FF3D71] rounded-lg max-w-[150px] flex gap-3">
            Watch
            <span className="">
              <i
                className=" fa-solid fa-circle-play fa-xl"
                style={{ color: "#ffffff" }}
              ></i>
            </span>
          </button>
          <button className="py-3 px-6 text-white button bg-white bg-opacity-30 rounded-lg max-w-[60px] flex gap-3 justify-center items-center">
            <i
              className="fa-solid fa-plus fa-lg"
              style={{ color: "#ffffff" }}
            ></i>
          </button>
        </div>
      </div>
    </section>
  );
};

BannerDetail.propTypes = {
  movies: PropTypes.object,
};

export default BannerDetail;
