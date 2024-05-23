import { useEffect, useState } from "react";
import MoviesCard from "../../movies/MoviesCard";
import { callApiGet } from "../../utils/callApi";
import useDeboundCustom from "../../hooks/useDeboundCustom";

const SkeletonCard = () => {
  return <div className="w-full h-64 bg-gray-300 animate-pulse"></div>;
};

const MoviesPage = () => {
  const [numberPage, setNumberPage] = useState(1);
  const [movies, setMovies] = useState([]);
  console.log("movies:", movies);
  //console.log("movies:", movies);
  const [keySearch, setKeySearch] = useState("");

  const [loading, setLoading] = useState(false);

  const deboundKeySearch = useDeboundCustom(keySearch, 500);

  useEffect(() => {
    window.scrollTo(0, 0);

    const getMovies = async () => {
      setLoading(true);

      let url;
      if (deboundKeySearch) {
        url = `https://api.themoviedb.org/3/search/movie?query=${deboundKeySearch}`;
      } else {
        url = `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${numberPage}`;
      }

      const data = await callApiGet(url);

      if (data && data.data.results) {
        setMovies(() => {
          if (deboundKeySearch) {
            return data.data;
          } else {
            return data.data;
          }
        });
      }

      setLoading(false);
    };

    getMovies();
  }, [deboundKeySearch, numberPage]);

  useEffect(() => {
    if (!deboundKeySearch) {
      setMovies([]); // Clear movies when the search term is cleared
      setNumberPage(1); // Reset pagination
    }
  }, [deboundKeySearch]);

  return (
    <>
      <div className="flex items-center justify-center mb-8 mt-14">
        <input
          type="text"
          onChange={(e) => setKeySearch(e.target.value.trim())}
          className="text-white w-full p-2 pl-4 text-xl bg-[#173D54] rounded-l-lg focus:border-rose-500 focus:outline-none"
          placeholder="Type here to search ..."
        />
        <button type="button" className="rounded-r-lg btn-search">
          Tìm Kiếm
          <i className="ml-2 text-xl text-white fa-brands fa-searchengin"></i>
        </button>
      </div>

      {loading && (
        <div className="grid grid-cols-4 gap-5">
          {Array.from({ length: 20 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
      )}
      {!loading && movies && (
        <div className="grid grid-cols-4 gap-5">
          {movies?.results?.length > 0 &&
            movies?.results.map((item, index) => (
              <MoviesCard key={index} movies={item} />
            ))}
        </div>
      )}

      {!loading && movies && (
        <div className="flex items-center justify-center gap-4 my-10 select-none ">
          <i className="text-white fa-solid fa-angle-left fa-xl hover:cursor-pointer"></i>
          {Array.from({ length: movies?.total_pages }, (_, index) => {
            let countPage = Number(movies?.total_pages);

            if (index < 5) {
              return (
                <span
                  key={index + 1}
                  className={`${
                    movies.page === index + 1
                      ? "bg-[#303143] text-white"
                      : " bg-white text-black"
                  } 
                  px-3 rounded-sm py-0.5  hover:cursor-pointer`}
                  onClick={() => setNumberPage(index + 1)}
                >
                  {index + 1}
                </span>
              );
            } else if (index === 5) {
              return (
                <span
                  key={index + 1}
                  className="px-3 rounded-sm py-0.5 text-black bg-white hover:cursor-pointer"
                  onClick={() => setNumberPage(index + 1)}
                >
                  ...
                </span>
              );
            } else if (index >= countPage - 3) {
              return (
                <span
                  key={index + 1}
                  className="px-3 rounded-sm py-0.5 text-black bg-white hover:cursor-pointer"
                  onClick={() => setNumberPage(index + 1)}
                >
                  {index + 1}
                </span>
              );
            }
          })}

          <i className="text-white fa-solid fa-angle-right fa-xl hover:cursor-pointer"></i>
        </div>
      )}
    </>
  );
};

export default MoviesPage;
