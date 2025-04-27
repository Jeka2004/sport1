import React from "react";
import "./index.css";
import { Routes, Route } from "react-router-dom"; 
import Header from "./Header";
import Footer from "./Footer";
import MainContent from "./MainContent";
import LoginPage from "./LogInPage";
import RegisterPage from "./RegisterPage";
import NewsPage from "./NewsPage";
import ProfilePage from "./ProfilePage";
import NBANewsPage from "./NBANewsPage";
import TeamPage from "./TeamPage";
import CLNewsPage from "./CLNewsPage";
import NavigationPage from "./NavigationPage";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/news/nba" element={<NBANewsPage />} />
        <Route path="/team/:teamId" element={<TeamPage />} />
        <Route path="/news/cl" element={<CLNewsPage />} />
        <Route path="/:page" element={<NavigationPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
