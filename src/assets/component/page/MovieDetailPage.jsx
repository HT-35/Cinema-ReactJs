import { useParams } from "react-router-dom";

import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { callApiGet } from "../../utils/callApi";

function removeHtmlTags(s) {
  const pattern = /<[^>]*>/g;
  const cleanString = s?.replace(pattern, "");
  return cleanString;
}

const MovieDetailPage = () => {
  const { id } = useParams();
  const [detailMovie, SetDetailMovie] = useState([]);
  const [linksVideo, SetLinksVideo] = useState([]);

  const [url, setUrl] = useState(null);

  const { original_title, poster_path, backdrop_path, overview, genres } =
    detailMovie;

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchNewData = async () => {
      const url = `https://api.themoviedb.org/3/movie/${id}`;
      const data = await callApiGet(url);
      console.log("data:", data);

      if (data && data.data) SetDetailMovie(data.data);

      const urlVideo = `https://api.themoviedb.org/3/movie/${id}/videos`;
      const link = await callApiGet(urlVideo);

      if (link && link?.data.results) SetLinksVideo(link?.data.results);
      return data;
    };
    fetchNewData();
  }, [id]);

  return (
    <>
      {original_title && backdrop_path && poster_path && (
        <div className="pb-32">
          <div className="relative h-[60vh] w-full -translate-y-14 -z-10 select-none">
            <div className="absolute inset-0 overlay bg-gradient-to-t from-[rgba(0,0,0,1)] to-[rgba(0,0,0,0.4)]"></div>
            <div
              className="w-full h-full bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${`https://image.tmdb.org/t/p/w500/${poster_path}`})`,
                backgroundSize: "cover",
              }}
            >
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-center translate-y-20">
                <div className="w-full max-w-[340px] max-h-[340px] mx-auto">
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                    alt=""
                    className="object-cover w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-[942px] mx-auto">
            <DetailMovies
              name={original_title}
              category={genres}
              content={overview}
              episodes={linksVideo}
              url={url}
              setUrl={setUrl}
            ></DetailMovies>
          </div>
        </div>
      )}
    </>
  );
};

function DetailMovies({ name, category, content, episodes, url, setUrl }) {
  useEffect(() => {
    if (episodes?.length > 0 && url === null) {
      setUrl(episodes[0]?.key);
    }
  }, [episodes, setUrl, url]);

  if (!name && !category && !content) {
    return null;
  }
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-5 mt-20">
        <h1 className="mt-24 text-4xl font-semibold text-center text-white ">
          {name ? name : "name"}
        </h1>
        {category?.length > 0 && (
          <div className="flex items-center justify-center mt-6 gap-7">
            {category.slice(0, 5).map((item, index) => {
              return (
                <span
                  key={index}
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
          width="853"
          height="480"
          src={`https://www.youtube.com/embed/${url}`}
          title="Po&#39;s Next Foe is...All of Them? | KUNG FU PANDA 4"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>

        {episodes?.length > 0 && (
          <div className="grid grid-cols-7 gap-10 mt-6">
            {episodes.map((item, index) => {
              return (
                <button
                  onClick={() => setUrl(episodes[index]?.key)}
                  key={index}
                  className={` ${
                    Number(url?.name) === Number(index + 1) ||
                    url?.name == "Full"
                      ? "bg-violet-700"
                      : ""
                  } text-base w-24 h-10 text-center font-semibold text-white border-2 border-[#7D6AFF]  rounded-xl hover:bg-violet-700 active:bg-violet-500  hover:transition-all  `}
                >
                  {index + 1 || "category"}
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
  episodes: PropTypes.array,
  url: PropTypes.string,
  setUrl: PropTypes.func,
};

export default MovieDetailPage;
