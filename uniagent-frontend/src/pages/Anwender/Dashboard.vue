<template>
  <AdminLayout>
    <div class="dashboard-main-wrapper">
      <div class="dashboard-content">
        <h2 class="dashboard-admin-title">
          Willkommen, {{ user.firstName }} {{ user.lastName }}!
        </h2>

        <div class="dashboard--cards">
          <!-- --- Card 1 --- -->
          <div class="dashboard-card">
            <div class="dashboard-card-header">
              <span class="material-symbols-outlined card-icon icon-blue">
                add_2
              </span>
              <h3>Benutzer anlegen</h3>
            </div>
            <button
              class="dashboard-button btn-blue"
              @click="handleNavigateToUserCreation"
            >
              Anlegen
            </button>
          </div>

          <!-- --- Card 2 --- -->
          <div class="dashboard-card">
            <div class="dashboard-card-header">
              <span class="material-symbols-outlined card-icon icon-purple">
                database
              </span>
              <h3>Benutzerverwaltung</h3>
            </div>
            <button class="dashboard-button btn-purple">
              Verwalten
            </button>
          </div>
        </div>
      </div>
    </div>
  </AdminLayout>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import "../../styles/Dashboard.css";
import AnwenderLayout from "../../layouts/AnwenderLayout.vue";

const router = useRouter();

// Frontend state only – no backend calls
const user = ref({
  firstName: "",
  lastName: "",
});

// Weiterleitung zur Seite "Benutzer anlegen"
const handleNavigateToUserCreation = () => {
  router.push("/administrator/benutzeranlegen");
};
</script>
