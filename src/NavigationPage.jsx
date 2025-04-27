import React from "react";
import { useParams } from "react-router-dom";
import pageContent from "./navigationData";
import "./NavigationPage.css";

const NavigationPage = () => {
  const { page } = useParams();
  const content = pageContent[page];

  if (!content) {
    return (
      <div className="nav-page-container">
        <div className="nav-card">
          <h2 className="nav-page-title">Page not found</h2>
          <p className="nav-page-description">
            Sorry, the page you're looking for does not exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="nav-page-container">
      <div className="nav-card">
        <h2 className="nav-page-title">{content.title}</h2>
        <p className="nav-page-description">{content.description}</p>
      </div>
    </div>
  );
};

export default NavigationPage;



