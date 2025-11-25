import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // useNavigate importieren
import "../../styles/DashboardAdmin.css";
import AdminLayout from "../../layout/AdminLayout.jsx";

const DashboardAdmin = () => {
  const [user, setUser] = useState({ firstName: "", lastName: "" });
  const navigate = useNavigate(); // useNavigate Hook für die Navigation

  useEffect(() => {
    async function loadUser() {
      const authUserId = localStorage.getItem("authUserId");
      if (!authUserId) return;

      try {
        const res = await fetch(`http://localhost:8080/api/users/auth/${authUserId}`);
        if (res.ok) {
          const data = await res.json();
          setUser({
            firstName: data.firstName,
            lastName: data.lastName,
          });
        }
      } catch (err) {
        console.error("Fehler beim Laden des Benutzers:", err);
      }
    }

    loadUser();
  }, []);

  // Weiterleitung zur Seite "Benutzer anlegen"
  const handleNavigateToUserCreation = () => {
    navigate("/administrator/benutzeranlegen");
  };

  return (
    <AdminLayout>
      <div className="dashboard-main-wrapper">
        <div className="dashboard-content">
          <h2 className="dashboard-admin-title">
            Willkommen, {user.firstName} {user.lastName}!
          </h2>

          <div className="dashboard-admin-cards">
            {/* --- Card 1 --- */}
            <div className="dashboard-admin-card">
              <div className="dashboard-card-header">
                <span className="material-symbols-outlined card-icon icon-blue">
                  add_2
                </span>
                <h3>Benutzer anlegen</h3>
              </div>
              <button
                className="dashboard-admin-button btn-blue"
                onClick={handleNavigateToUserCreation} // Beim Klick zur Seite "Benutzer anlegen"
              >
                Anlegen
              </button>
            </div>

            {/* --- Card 2 --- */}
            <div className="dashboard-admin-card">
              <div className="dashboard-card-header">
                <span className="material-symbols-outlined card-icon icon-purple">
                  database
                </span>
                <h3>Benutzerverwaltung</h3>
              </div>
              <button className="dashboard-admin-button btn-purple">
                Verwalten
              </button>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default DashboardAdmin;