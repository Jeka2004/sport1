import React from "react";
import clNews from "./clNews";
import { useNavigate } from "react-router-dom";
import "./CLNewsPage.css";

const CLNewsPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <button className="cl-back-btn" onClick={() => navigate("/news")}>
        Back
      </button>

      <div className="cl-news-container">
        <h2 className="cl-news-title">Champions League News</h2>
        <div className="cl-news-grid">
          {clNews.map((news) => (
            <div
              key={news.id}
              className="cl-news-card"
              onClick={() => navigate(`/team/${news.teamId}`, { state: { from: "/news/cl" } })}
            >
              <div className="cl-news-content">
                <h3>{news.title}</h3>
                <p>{news.content.slice(0, 600)}</p>
                <p className="cl-news-meta">
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

export default CLNewsPage;

