import { Route, Routes } from "react-router-dom";
import Main from "./assets/component/layout/Main";
//import HomePage from "./assets/component/page/HomePage";
import Banner from "./assets/component/Banner/Banner";
//import MoviesPage from "./assets/component/page/MoviesPagePag";
//import MovieDetailPage from "./assets/component/page/MovieDetailPage";

import { lazy, Suspense } from "react";
import Error404 from "./assets/component/404/Error404";

const HomePage = lazy(() => import("./assets/component/page/HomePage"));
const MoviesPage = lazy(() => import("./assets/component/page/MoviesPagePag"));
const MovieDetailPage = lazy(() =>
  import("./assets/component/page/MovieDetailPage")
);
//import { NavLink } from "react-router-dom";

const App = () => {
  //console.log(Autoplay());

  return (
    <>
      <Suspense>
        <Routes>
          <Route Component={Main}>
            <Route
              path="/"
              element={
                <div className="px-5">
                  <Banner></Banner>
                  <HomePage></HomePage>
                </div>
              }
            ></Route>
            <Route
              path="/movies"
              element={
                <div className="px-5">
                  <MoviesPage></MoviesPage>
                </div>
              }
            ></Route>

            <Route path="/movies/:id" Component={MovieDetailPage}></Route>
            <Route
              path="/*"
              element={<div className="text-white">Not Found</div>}
            ></Route>
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
