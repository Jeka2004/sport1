import React from "react";
import { useAuth } from "./AuthContext";
import teamsData from "./teamsData";
import "./ProfilePage.css";

const ProfilePage = () => {
  const { user } = useAuth();

  const favoriteTeams = user?.favorites || [];

  return (
    <div className="profile-container">
      <div className="profile-card">
        <h2>Welcome, {user?.username || "User"}!</h2>
        <p>Email: {user?.email}</p>
        <p>Member since: {new Date(user?.createdAt).toLocaleDateString()}</p>

        <h3 style={{ marginTop: "2rem" }}>Favorite Teams:</h3>
        {favoriteTeams.length > 0 ? (
          <ul>
            {favoriteTeams.map((teamId) => {
              const team = teamsData.find((t) => t.id === teamId);
              return (
                <li key={teamId}>
                  {team?.name || teamId}
                </li>
              );
            })}
          </ul>
        ) : (
          <p>No favorite teams added yet.</p>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;


