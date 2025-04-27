import React from "react";
import nbaNews from "./nbaNews";
import { useNavigate } from "react-router-dom";
import "./NBANewsPage.css";

const NBANewsPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <button className="back-btn" onClick={() => navigate("/news")}>
        Back
      </button>

      <div className="nba-news-container">
        <h2 className="nba-news-title">NBA News</h2>
        <div className="nba-news-grid">
          {nbaNews.map((news) => (
            <div
              key={news.id}
              className="nba-news-card"
              onClick={() => navigate(`/team/${news.teamId}`, { state: { from: "/news/nba" } })}
            >
              <div className="nba-news-content">
                <h3>{news.title}</h3>
                <p>{news.content.slice(0, 600)}</p>
                <p className="nba-news-meta">
                  By {news.author} | {news.date}
                </p>
              </div>
              <div className="team-name-overlay">{news.team}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default NBANewsPage;


