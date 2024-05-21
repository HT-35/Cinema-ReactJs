import { Route, Routes } from "react-router-dom";
import Main from "./assets/component/layout/Main";
import HomePage from "./assets/component/page/HomePage";
import Banner from "./assets/component/Banner/Banner";
import MoviesPage from "./assets/component/page/MoviesPagePag";
import MovieDetailPage from "./assets/component/page/MovieDetailPage";

//import { NavLink } from "react-router-dom";

const App = () => {
  //console.log(Autoplay());

  return (
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
      </Route>
    </Routes>
  );
};

export default App;
