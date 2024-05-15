import { Fragment } from "react";
import MoviesList from "../../movies/MoviesList";

const HomePage = () => {
  return (
    <Fragment>
      <section className="pb-5 movies-layout page-container">
        <h2 className="my-4 font-bold text-white capitalize">Now Playing</h2>
        <MoviesList></MoviesList>
      </section>
      <section className="pb-5 movies-layout page-container">
        <h2 className="my-4 font-bold text-white capitalize">trending</h2>
        <div className="movies-list">
          <MoviesList></MoviesList>
        </div>
      </section>
      <section className="pb-5 movies-layout page-container">
        <h2 className="my-4 font-bold text-white capitalize">rating</h2>
        <div className="movies-list">
          <MoviesList></MoviesList>
        </div>
      </section>
    </Fragment>
  );
};

export default HomePage;
