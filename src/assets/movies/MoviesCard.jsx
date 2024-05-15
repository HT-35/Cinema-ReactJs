//import React from "react";

import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const MoviesCard = ({ movies }) => {
  const { name, poster_url, slug, year } = movies;
  //const poster = `https://img.ophim.live/uploads/movies/${poster_url}`;

  const compactName =
    name.length > 30
      ? name.length <= 35
        ? `${name.slice(0, 35)}`
        : `${name.slice(0, 35)}...`
      : name;

  // điều hướng
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full gap-3 p-2 bg-white rounded-md bg-opacity-10 movie-card">
      <img
        src={`https://img.ophim.live/uploads/movies/${poster_url}`}
        alt=""
        className="rounded-md h-[200px] object-cover hover:cursor-pointer"
      />
      <div className="flex flex-col flex-1 gap-y-3">
        <h6 className="text-base font-semibold text-white h-[40px] pb-4  hover:cursor-pointer">
          {compactName ? compactName : "Name"}
        </h6>
        <div className="flex justify-between py-3 text-white manufacture-evaluate text-opacity-70">
          <div className="manufacture">{year ? year : "year"}</div>
          <div className="evaluate">
            7.4{" "}
            <i className="fa-solid fa-star " style={{ color: "#FFD43B" }}></i>
          </div>
        </div>
        <button
          onClick={() => {
            //console.log(slug);
            navigate(`/movies/${slug}`);
          }}
          className="py-2 px-1 text-white button bg-[#FF3D71] rounded-lg max-w-full flex justify-center gap-3 text-center"
        >
          Watch now
          <span className="">
            <i
              className=" fa-solid fa-circle-play fa-xl"
              style={{ color: "#ffffff" }}
            ></i>
          </span>
        </button>
      </div>
    </div>
  );
};

MoviesCard.propTypes = {
  movies: PropTypes.object,
};

export default MoviesCard;
