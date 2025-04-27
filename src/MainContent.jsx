import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css"; 

const MainContent = () => {
  const navigate = useNavigate();

  return (
    <main className="main-content">
      <img 
        src="/icons/Group%2011.png" 
        alt="Sport1 Logo" 
        className="logo-img"
      />
      <h2 className="title-text">The Best News of World Sport</h2>
      <div className="button-container">
        <button className="btn-primary" onClick={() => navigate("/register")}>
          Join Today
        </button>
      </div>
    </main>
  );
};

export default MainContent;
