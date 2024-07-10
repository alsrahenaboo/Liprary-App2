import react from "react";
import { Link } from "react-router-dom";

function Headers() {
  return (
    <header>
      <ul className="header">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <a href="/signup">sign-up</a>
        </li>
      </ul>
    </header>
  );
}

export default Headers;
