import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const Footer = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Community</h3>
          <nav className="footer-nav">
            <Link to="/top-fans">Top Fans</Link>
            <Link to="/fan-discussions">Fan Discussions</Link>
            <Link to="/events">Events</Link>
          </nav>
        </div>
        <div className="footer-section">
          <h3>Company</h3>
          <nav className="footer-nav">
            <Link to="/about">About us</Link>
            <Link to="/our-team">Our Team</Link>
            <Link to="/contact">Contact us</Link>
          </nav>
        </div>

        <div className="footer-buttons">
          {user ? (
            <button className="btn-primary" onClick={handleLogout}>
              Log out
            </button>
          ) : (
            <>
              <button className="btn-primary" onClick={() => navigate("/register")}>
                Register
              </button>
              <button className="btn-secondary" onClick={() => navigate("/login")}>
                Log in
              </button>
            </>
          )}
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-text">© Sport1</p>
        <div className="social-icons">
          <span>Follow us:</span>
          <img src="/icons/telegram.png" alt="Telegram" />
          <img src="/icons/twitter.png" alt="Twitter" />
          <img src="/icons/instagram.png" alt="Instagram" />
          <img src="/icons/youtube.png" alt="YouTube" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

