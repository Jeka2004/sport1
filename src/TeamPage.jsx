import React from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import teamsData from "./teamsData";
import { useAuth } from "./AuthContext";
import "./TeamPage.css";

const TeamPage = () => {
  const { teamId } = useParams();
  const navigate = useNavigate();
  const location = useLocation(); 
  const team = teamsData.find((t) => t.id === teamId);
  const { user, addToFavorites, removeFromFavorites } = useAuth();

  if (!team) {
    return <div className="team-page-container">Team not found.</div>;
  }

  const isFavorite = user?.favorites?.includes(teamId);

  const handleToggleFavorite = () => {
    if (!user) {
      alert("Please log in to manage favorites.");
      return;
    }

    if (isFavorite) {
      removeFromFavorites(teamId);
      alert(`${team.name} removed from favorites.`);
    } else {
      addToFavorites(teamId);
      alert(`${team.name} added to favorites.`);
    }
  };

  return (
    <>
      <button className="back-btn" onClick={() => navigate(location.state?.from || "/news")}>
        Back
      </button>

      <div className="team-page-container">
        <h2 className="team-name">{team.name}</h2>
        <img src={team.logo} alt={`${team.name} logo`} className="team-logo" />
        <p className="team-history">{team.history}</p>
        <button className="add-to-favorites-btn" onClick={handleToggleFavorite}>
          {isFavorite ? "Remove from favorites" : "Add to favorites"}
        </button>
      </div>
    </>
  );
};

export default TeamPage;









