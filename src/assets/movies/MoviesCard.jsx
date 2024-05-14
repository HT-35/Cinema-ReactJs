//import React from "react";

const MoviesCard = () => {
  return (
    <div className="grid gap-3 p-2 bg-white rounded-md bg-opacity-10 movie-card">
      <img
        src="https://toplist.vn/images/800px/spider-man-homecoming-2017-871062.jpg"
        alt=""
        className="rounded-md h-[300px] object-cover"
      />
      <h6 className="text-base font-semibold text-white">
        SpiderMan: Homecoming
      </h6>
      <div className="flex justify-between text-white manufacture-evaluate text-opacity-70">
        <div className="manufacture">2017</div>
        <div className="evaluate">
          7.4 <i className="fa-solid fa-star " style={{ color: "#FFD43B" }}></i>
        </div>
      </div>
      <button className="py-2 px-1 text-white button bg-[#FF3D71] rounded-lg max-w-full flex justify-center gap-3 text-center">
        Watch now
        <span className="">
          <i
            className=" fa-solid fa-circle-play fa-xl"
            style={{ color: "#ffffff" }}
          ></i>
        </span>
      </button>
    </div>
  );
};

export default MoviesCard;
