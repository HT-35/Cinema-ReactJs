import { useParams } from "react-router-dom";
import { fetcher } from "../../../config/config";
import useSWR from "swr";

import PropTypes from "prop-types";
import { useEffect, useState } from "react";

function removeHtmlTags(s) {
  const pattern = /<[^>]*>/g;
  const cleanString = s?.replace(pattern, "");
  return cleanString;
}

const MovieDetailPage = () => {
  const { id } = useParams();
  const api = `https://ophim1.com/phim/${id}`;
  const { data } = useSWR(api, fetcher);

  const [detailMovie, setDetailMovie] = useState(null);
  //console.log("detailMovie:", detailMovie);

  useEffect(() => {
    if (data) {
      setDetailMovie(data);
    }
  }, [data, detailMovie]);

  const { category, content, poster_url, name } = detailMovie?.movie || {};
  const episodes = detailMovie?.episodes[0]?.server_data || [];
  //console.log("listFilm:", episodes);

  useEffect(() => {
    //window.scrollTo(0, 0);

    return () => {
      setDetailMovie(null);
    };
  }, []);

  return (
    <>
      {category && content && poster_url && name && (
        <div className="pb-32">
          <div className="relative h-[60vh] w-full -translate-y-14 -z-10">
            <div className="absolute inset-0 overlay bg-gradient-to-t from-[rgba(0,0,0,1)] to-[rgba(0,0,0,0.4)]"></div>
            <div
              className="w-full h-full bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${poster_url})`,
                backgroundSize: "cover",
              }}
            >
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-center translate-y-1/2">
                <div className="w-2/3 max-w-[540px] max-h-[560px] mx-auto">
                  <img src={poster_url} alt="" className="w-full h-auto" />
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-[942px] mx-auto">
            <DetailMovies
              name={name}
              category={category}
              content={content}
              episodes={episodes}
            ></DetailMovies>
          </div>
        </div>
      )}
    </>
  );
};

function DetailMovies({ name, category, content, episodes }) {
  if (!name && !category && !content) {
    return null;
  }
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-5 ">
        <h1 className="mt-32 text-4xl font-semibold text-center text-white">
          {name ? name : "name"}
        </h1>
        {category?.length > 0 && (
          <div className="flex items-center justify-center mt-6 gap-7">
            {category.map((item) => {
              return (
                <span
                  key={item.id}
                  className="text-lg font-semibold text-[#7D6AFF] border-2 border-[#7D6AFF] p-2 px-4 rounded-xl"
                >
                  {item.name || "category"}
                </span>
              );
            })}
          </div>
        )}

        <div className="mb-3 text-base font-normal leading-relaxed text-center text-white">
          {removeHtmlTags(content)}
        </div>
        <iframe
          src="https://vip.opstream16.com/share/af37f5b0de67364f54d9b53d8e8afbfa"
          width="880"
          height="500"
          frameBorder="0"
          allowFullScreen
          title="Movie Trailer"
        ></iframe>

        {episodes?.length > 0 && (
          <div className="grid grid-cols-10 mt-6 gap-7">
            {episodes.map((item) => {
              return (
                <button
                  key={item.id}
                  className="btn-episodes text-lg text-center font-semibold text-white border-2 border-[#7D6AFF] p-2 px-4 rounded-xl  hover:bg-gradient-to-t hover:from-slate-200 hover:to-slate-500 hover:transition-all"
                >
                  {item.name || "category"}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

DetailMovies.propTypes = {
  name: PropTypes.string,
  category: PropTypes.array,
  content: PropTypes.string,
  episodes: PropTypes.string,
};

export default MovieDetailPage;
