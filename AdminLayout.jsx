import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/AdminLayout.css";

const AdminLayout = ({ children }) => {
  const [desktopCollapsed, setDesktopCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [headerTooltip, setHeaderTooltip] = useState({ visible: false, text: "", top: 0, left: 0 });
  const location = useLocation();
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  useEffect(() => {
    setMobileOpen(false); // Wenn sich die Route ändert, Sidebar schließen
  }, [location]);

  const toggleDesktop = () => setDesktopCollapsed((s) => !s);
  const showHeaderTooltip = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setHeaderTooltip({
      visible: true,
      text: desktopCollapsed ? "Seitenleiste erweitern" : "Seitenleiste reduzieren",
      top: rect.bottom - 5,
      left: rect.right + 10,
    });
  };

  const hideHeaderTooltip = () => {
    setHeaderTooltip({ visible: false, text: "", top: 0, left: 0 });
  };

  const toggleMobile = () => setMobileOpen((s) => !s);
  const closeMobile = () => setMobileOpen(false);

  const rootClass = `admin-layout ${desktopCollapsed ? "sidebar-closed" : "sidebar-open"}`;

  const menuItems = [
  { to: "/administrator/dashboard", icon: "team_dashboard", label: "Dashboard" },
  { to: "/administrator/benutzeranlegen", icon: "add_2", label: "Benutzer anlegen" },
  { to: "/administrator/benutzerverwaltung", icon: "database", label: "Benutzerverwaltung" },
  ];


  const handleLogout = () => setShowLogoutModal(true);

  return (
    <div className={rootClass}>
      <header className="header">
        <div className="header-left">
          <span
            className="material-symbols-outlined desktop-toggle-icon"
            onClick={toggleDesktop}
            onMouseEnter={showHeaderTooltip}
            onMouseLeave={hideHeaderTooltip}
          >
            {desktopCollapsed ? "left_panel_open" : "left_panel_close"}
          </span>

          <span
            className="material-symbols-outlined mobile-toggle-icon"
            onClick={toggleMobile}
          >
            menu
          </span>
        </div>

        <h1 className="app-title">QuizApp</h1>

        <span className="material-symbols-outlined logout-icon" title="Abmelden" onClick={handleLogout}>
          logout
        </span>
      </header>

      {headerTooltip.visible && (
        <div className="header-tooltip" style={{ top: headerTooltip.top, left: headerTooltip.left }}>
          {headerTooltip.text}
        </div>
      )}

      <div className="content-area">
        <aside className={`sidebar ${mobileOpen ? "open" : ""}`}>
          <span className="material-symbols-outlined sidebar-close-icon" onClick={closeMobile}>
            close
          </span>

          <nav className="sidebar-nav">
            {menuItems.map(({ to, icon, label }) => (
              <Link
                key={to}
                to={to}
                className={`sidebar-link ${location.pathname === to ? "active" : ""}`}
              >
                <span className="material-symbols-outlined sidebar-icon">{icon}</span>
                <span className="sidebar-label">{label}</span>
              </Link>
            ))}
          </nav>
        </aside>

        {mobileOpen && <div className="sidebar-overlay" onClick={closeMobile}></div>}

        <main className="main-content">
          <div className="page-content">{children}</div>
        </main>
      </div>

      <footer className="footer">
        <p>© 2025 QuizApp</p>
      </footer>

      {/* Logout Modal */}
      {showLogoutModal && (
        <div className="modal-overlay show">
          <div className="modal-content">
            <h3 className="modal-header">Möchten Sie sich abmelden?</h3>
            <p className="modal-message">Sie werden nach der Abmeldung zur Login-Seite weitergeleitet.</p>

            <button 
              onClick={() => {
                localStorage.removeItem("authToken");
                localStorage.removeItem("role");
                localStorage.removeItem("authUserId");
                window.location.href = "/";  // Umleitung zur Login-Seite
              }} 
              className="modal-button modal-button-confirm">
              Ja
            </button>
            <button 
              onClick={() => setShowLogoutModal(false)} 
              className="modal-button modal-button-cancel">
              Nein
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminLayout;