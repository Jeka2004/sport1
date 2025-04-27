import React from "react";
import { useNavigate } from "react-router-dom";
import "./NewsPage.css";

const NewsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="news-split-container">
      {/* Градієнтна лінія по центру */}
      <div className="news-divider" />

      <div className="news-side left">
        <img src="/images/nba_logo.png" alt="NBA Logo" className="news-logo" />
        <button className="news-button" onClick={() => navigate("/news/nba")}>
          Read
        </button>
      </div>
      <div className="news-side right">
        <img
          src="/images/champions_league_logo.png"
          alt="Champions League Logo"
          className="news-logo"
        />
        <button className="news-button" onClick={() => navigate("/news/cl")}>
          Read
        </button>
      </div>
    </div>
  );
};

export default NewsPage;