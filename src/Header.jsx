import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <NavLink to="/">Home</NavLink>{" | "}
        <NavLink to="/about">About</NavLink>{" | "}
        <NavLink to="/categories">Categories</NavLink>{" | "}
        <NavLink to="/news">News</NavLink>
      </nav>
    </header>
  );
}

export default Header;