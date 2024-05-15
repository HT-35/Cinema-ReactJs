import { Route, Routes } from "react-router-dom";
import Main from "./assets/component/layout/Main";
import HomePage from "./assets/component/page/HomePage";
import Banner from "./assets/component/Banner/Banner";
import MoviesPage from "./assets/component/page/MoviesPage";

//import { NavLink } from "react-router-dom";

const App = () => {
  //console.log(Autoplay());

  return (
    <Routes>
      <Route Component={Main}>
        <Route
          path="/"
          element={
            <>
              <Banner></Banner>
              <HomePage></HomePage>
            </>
          }
        ></Route>
        <Route
          path="/movies"
          element={
            <>
              <MoviesPage></MoviesPage>
            </>
          }
        ></Route>
      </Route>
    </Routes>
  );
};

export default App;
