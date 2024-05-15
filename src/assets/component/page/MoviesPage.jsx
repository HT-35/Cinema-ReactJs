import { useEffect, useState } from "react";
import useSWR from "swr";
import { fetcher } from "../../../config/config";
import MoviesCard from "../../movies/MoviesCard";

const MoviesPage = () => {
  const [numberPage, setNumberPage] = useState(1);

  const api = `https://ophim1.com/danh-sach/phim-moi-cap-nhat?page=${numberPage}`;

  const { data } = useSWR(api, fetcher);

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (data && data.items)
      setMovies((prevData) => [...prevData, ...data.items]);
  }, [data, numberPage]);

  useEffect(() => {
    //if (data && data.items) setMovies(data.items);

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;
      console.log(
        "scrollTop, scrollHeight, clientHeight:",
        scrollTop,
        scrollHeight,
        clientHeight
      );

      if (scrollTop + clientHeight >= scrollHeight / 2) {
        setNumberPage((prevNumberPage) => prevNumberPage + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      setMovies([]);
    };
  }, []);

  return (
    <div className="grid grid-cols-4">
      {movies?.length > 0 &&
        movies.map((item, index) => {
          return <MoviesCard key={index} movies={item} />;
        })}
    </div>
  );
};

export default MoviesPage;
