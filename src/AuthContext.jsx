import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (userData) => {
    try {
      const res = await axios.get(`http://localhost:5000/api/user/${userData.id}`);
      const favorites = res.data.favorites || [];

      const fullUser = {
        ...userData,
        favorites,
      };

      setUser(fullUser);
      localStorage.setItem("user", JSON.stringify(fullUser));
    } catch (err) {
      console.error("❌ Failed to fetch favorites:", err);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const addToFavorites = async (teamId) => {
    if (!user) return;

    if (user.favorites.includes(teamId)) return; 

    const updatedFavorites = [...user.favorites, teamId];

    try {
      await axios.put("http://localhost:5000/api/user/favorites", {
        userId: user.id,
        favorites: updatedFavorites,
      });

      const updatedUser = { ...user, favorites: updatedFavorites };
      setUser(updatedUser);
      localStorage.setItem("user", JSON.stringify(updatedUser));
    } catch (err) {
      console.error("❌ Failed to update favorites:", err);
    }
  };

  const removeFromFavorites = async (teamId) => {
    if (!user) return;

    const updatedFavorites = user.favorites.filter((id) => id !== teamId);

    try {
      await axios.put("http://localhost:5000/api/user/favorites", {
        userId: user.id,
        favorites: updatedFavorites,
      });

      const updatedUser = { ...user, favorites: updatedFavorites };
      setUser(updatedUser);
      localStorage.setItem("user", JSON.stringify(updatedUser));
    } catch (err) {
      console.error("❌ Failed to update favorites:", err);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, addToFavorites, removeFromFavorites }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);






