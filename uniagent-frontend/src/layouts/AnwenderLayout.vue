<template>
  <div :class="rootClass">
    <header class="header">
      <div class="header-left">
        <span
          class="material-symbols-outlined desktop-toggle-icon"
          @click="toggleDesktop"
          @mouseenter="showHeaderTooltip"
          @mouseleave="hideHeaderTooltip"
        >
          {{ desktopCollapsed ? "left_panel_open" : "left_panel_close" }}
        </span>

        <span
          class="material-symbols-outlined mobile-toggle-icon"
          @click="toggleMobile"
        >
          menu
        </span>
      </div>

      <h1 class="app-title">QuizApp</h1>

      <span
        class="material-symbols-outlined logout-icon"
        title="Abmelden"
        @click="handleLogout"
      >
        logout
      </span>
    </header>

    <div
      v-if="headerTooltip.visible"
      class="header-tooltip"
      :style="{ top: headerTooltip.top + 'px', left: headerTooltip.left + 'px' }"
    >
      {{ headerTooltip.text }}
    </div>

    <div class="content-area">
      <aside :class="['sidebar', { open: mobileOpen }]">
        <span
          class="material-symbols-outlined sidebar-close-icon"
          @click="closeMobile"
        >
          close
        </span>

        <nav class="sidebar-nav">
          <router-link
            v-for="item in menuItems"
            :key="item.to"
            :to="item.to"
            :class="['sidebar-link', { active: route.path === item.to }]"
          >
            <span class="material-symbols-outlined sidebar-icon">
              {{ item.icon }}
            </span>
            <span class="sidebar-label">{{ item.label }}</span>
          </router-link>
        </nav>
      </aside>

      <div
        v-if="mobileOpen"
        class="sidebar-overlay"
        @click="closeMobile"
      ></div>

      <main class="main-content">
        <div class="page-content">
          <slot />
        </div>
      </main>
    </div>

    <footer class="footer">
      <p>© 2025 QuizApp</p>
    </footer>

    <!-- Logout Modal -->
    <div v-if="showLogoutModal" class="modal-overlay show">
      <div class="modal-content">
        <h3 class="modal-header">Möchten Sie sich abmelden?</h3>
        <p class="modal-message">
          Sie werden nach der Abmeldung zur Login-Seite weitergeleitet.
        </p>

        <button
          class="modal-button modal-button-confirm"
          @click="confirmLogout"
        >
          Ja
        </button>
        <button
          class="modal-button modal-button-cancel"
          @click="showLogoutModal = false"
        >
          Nein
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import { useRoute } from "vue-router";
import "../styles/Dashboard.css";

const desktopCollapsed = ref(false);
const mobileOpen = ref(false);
const showLogoutModal = ref(false);

const headerTooltip = ref({
  visible: false,
  text: "",
  top: 0,
  left: 0,
});

const route = useRoute();

watch(
  () => route.fullPath,
  () => {
    // Wenn sich die Route ändert, Sidebar schließen
    mobileOpen.value = false;
  }
);

const toggleDesktop = () => {
  desktopCollapsed.value = !desktopCollapsed.value;
};

const showHeaderTooltip = (e) => {
  const rect = e.currentTarget.getBoundingClientRect();
  headerTooltip.value = {
    visible: true,
    text: desktopCollapsed.value
      ? "Seitenleiste erweitern"
      : "Seitenleiste reduzieren",
    top: rect.bottom - 5,
    left: rect.right + 10,
  };
};

const hideHeaderTooltip = () => {
  headerTooltip.value = { visible: false, text: "", top: 0, left: 0 };
};

const toggleMobile = () => {
  mobileOpen.value = !mobileOpen.value;
};

const closeMobile = () => {
  mobileOpen.value = false;
};

const rootClass = computed(
  () =>
    `admin-layout ${desktopCollapsed.value ? "sidebar-closed" : "sidebar-open"}`
);

const menuItems = [
  { to: "/administrator/dashboard", icon: "team_dashboard", label: "Dashboard" },
  { to: "/administrator/benutzeranlegen", icon: "add_2", label: "Benutzer anlegen" },
  { to: "/administrator/benutzerverwaltung", icon: "database", label: "Benutzerverwaltung" },
];

const handleLogout = () => {
  showLogoutModal.value = true;
};

const confirmLogout = () => {
  localStorage.removeItem("authToken");
  localStorage.removeItem("role");
  localStorage.removeItem("authUserId");
  window.location.href = "/"; // Umleitung zur Login-Seite
};
</script>
