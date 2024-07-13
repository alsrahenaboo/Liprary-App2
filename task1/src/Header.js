import react from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Headers() {

  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    localStorage.removeItem("signup");
    navigate("/signup");
  };
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
          <Link to="/Bookcatalog">bookcatalog</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <button onClick={handleLogout}>
            {localStorage.getItem("signup") === "true" ? (
              <span>Logout</span>
            ) : (
              <span>Signup</span>
            )}
          </button>
        </li>
      </ul>
    </header>
  );
}

export default Headers;
