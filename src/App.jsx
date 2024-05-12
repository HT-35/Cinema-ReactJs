import { Fragment } from "react";

//import { NavLink } from "react-router-dom";

const App = () => {
  return (
    <Fragment>
      <header className="flex items-center justify-center py-2 mb-3 text-white select-none header gap-x-5">
        <span className="text-primary">Home</span>
        <span>Movies</span>
      </header>
      <section className="banner page-container h-[500px] relative  mb-5 ">
        <div
          className="rounded-lg absolute inset-0 overlay 
        bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0)]"
        ></div>
        <div className="w-full h-full bg-white rounded-lg">
          <img
            src="https://genk.mediacdn.vn/2019/11/12/1-1573571042465953988347.jpeg"
            alt=""
            className="object-cover w-full h-full rounded-lg"
            //className="object-cover w-full h-full filter brightness-[0.7] rounded-lg"
          />
        </div>
        <div className="absolute -translate-y-40 ml-9">
          <div className="text-3xl font-semibold text-white title-banner">
            Avengers: EndGame
          </div>

          <div className="flex items-center justify-start gap-3 my-3 text-xs font-semibold text-white select-none title-banner">
            <span className="px-4 py-2 border-2 border-white border-opacity-50 rounded-md">
              Action
            </span>
            <span className="px-4 py-2 border-2 border-white border-opacity-50 rounded-md">
              Adventure
            </span>
            <span className="px-4 py-2 border-2 border-white border-opacity-50 rounded-md">
              Drama
            </span>
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

      <section className="pb-40 movies-layout page-container">
        <h2 className="my-4 font-bold text-white capitalize">Now Playing</h2>
        <div className="grid grid-cols-4 gap-10 movie-list">
          <div className="grid gap-3 p-2 bg-white rounded-md bg-opacity-10 movie-card">
            <img
              src="https://toplist.vn/images/800px/spider-man-homecoming-2017-871062.jpg"
              alt=""
              className="rounded-md h-[300px] object-cover"
            />
            <h5 className="font-semibold text-white">Spider-Man: Homecoming</h5>
            <div className="flex justify-between text-white manufacture-evaluate text-opacity-70">
              <div className="manufacture">2017</div>
              <div className="evaluate">
                7.4{" "}
                <i
                  className="fa-solid fa-star "
                  style={{ color: "#FFD43B" }}
                ></i>
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
        </div>
      </section>
    </Fragment>
  );
};

export default App;
