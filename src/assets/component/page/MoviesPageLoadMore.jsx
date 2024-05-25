import { useEffect, useState } from "react";
import MoviesCard from "../../movies/MoviesCard";
import { callApiGet } from "../../utils/callApi";
import useDeboundCustom from "../../hooks/useDeboundCustom";
import { tmdbAPI } from "../../../config/config";

const SkeletonCard = () => {
  return <div className="w-full h-64 bg-gray-300 animate-pulse"></div>;
};

const MoviesPage = () => {
  const [numberPage, setNumberPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [keySearch, setKeySearch] = useState("");
  //const [initialLoading, setInitialLoading] = useState(false);
  const [loading, setLoading] = useState(false);

  const deboundKeySearch = useDeboundCustom(keySearch, 500);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight / 2 && !deboundKeySearch) {
        setNumberPage((prevNumberPage) => prevNumberPage + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [deboundKeySearch]);

  useEffect(() => {
    const getMovies = async () => {
      if (numberPage === 1 || deboundKeySearch) {
        setLoading(true);
      }

      let url;
      // nếu tồn tại key search thì sẽ gán api search
      if (deboundKeySearch) {
        url = tmdbAPI.searchFilm(deboundKeySearch);
      } else {
        // ngược lại thì lấy api get now playing
        url = tmdbAPI.getMovieList("now_playing", numberPage);
      }

      const data = await callApiGet(url);

      if (data && data.data.results) {
        setMovies((prevMovies) => {
          if (deboundKeySearch) {
            return data.data.results;
          } else {
            return [...prevMovies, ...data.data.results];
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
      {!loading && (
        <div className="grid grid-cols-4 gap-5">
          {movies.length > 0 &&
            movies.map((item, index) => (
              <MoviesCard key={index} movies={item} />
            ))}
        </div>
      )}
    </>
  );
};

export default MoviesPage;
