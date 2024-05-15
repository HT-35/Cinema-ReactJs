import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex items-center justify-center py-2 mb-3 text-white select-none header gap-x-5">
      <NavLink
        //className="text-primary"
        to="/"
        className={({ isActive }) => (isActive ? "text-primary" : "")}
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        className={({ isActive }) => (isActive ? "text-primary" : "")}
      >
        Movies
      </NavLink>
    </header>
  );
};

export default Header;
