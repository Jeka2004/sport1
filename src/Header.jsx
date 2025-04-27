import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "./AuthContext";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const onProfileOrNewsClick = () => {
    if (location.pathname === "/profile") {
      navigate("/news");
    } else {
      navigate("/profile");
    }
  };
  

  return (
    <header className="header-container">
      <h1 className="logo">Sport1</h1>
      <nav className="nav-links">
        <Link to="/features">Features</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/community">Community</Link>
        <Link to="/support">Support</Link>
      </nav>

      <div className="auth-buttons">
        {user ? (
          <>
            <button className="btn-secondary" onClick={onProfileOrNewsClick}>
              {location.pathname === "/profile" ? "News" : "Profile"}
            </button>
            <button className="btn-primary" onClick={handleLogout}>
              Log out
            </button>
          </>
        ) : (
          <>
            <button className="btn-secondary" onClick={() => navigate("/login")}>
              Log in
            </button>
            <button className="btn-primary" onClick={() => navigate("/register")}>
              Register
            </button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;

