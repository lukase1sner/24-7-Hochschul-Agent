<template>
  <div
    class="flex flex-col min-h-screen bg-cover bg-center bg-no-repeat relative"
    :style="{
      backgroundImage: `url(${backgroundImage})`,
    }"
  >
    <!-- Header -->
    <header class="absolute top-0 left-0 w-full bg-transparent text-black py-4 px-6 z-20">
      <div class="flex justify-between items-center max-w-7xl mx-auto">
        <!-- Logo -->
        <div class="flex items-center gap-2">
          <span class="text-4xl md:text-5xl">🎓</span>
          <span class="text-xl md:text-2xl font-extrabold">UNIAGENT</span>
        </div>
        <!-- Navigation -->
        <nav class="space-x-4 text-lg">
          <router-link
            to="/"
            class="hover:text-[#98C73C]"
            :class="{'text-[#98C73C]': $route.path === '/'}"
          >
            Startseite
          </router-link>
          <router-link
            to="#features"
            class="hover:text-[#98C73C]"
            :class="{'text-[#98C73C]': $route.hash === '#features'}"
          >
            Funktionen
          </router-link>
          <router-link
            to="#contact"
            class="hover:text-[#98C73C]"
            :class="{'text-[#98C73C]': $route.hash === '#contact'}"
          >
            Kontakt
          </router-link>
        </nav>
      </div>
    </header>

    <!-- Login-Karte -->
    <div class="flex flex-grow items-center justify-center">
      <div
        class="rounded-3xl px-12 pt-8 pb-12 w-full max-w-lg text-white animate-fadeIn flex flex-col justify-start items-center shadow-xl mt-12"
        style="background-color: rgba(0, 0, 0, 0.25); height: 60vh;"
      >
        <!-- Titel -->
        <h2
          class="text-lg md:text-xl font-semibold mb-8 text-center text-black drop-shadow-md"
        >
          Anmelden
        </h2>

        <!-- E-Mail Feld -->
        <div class="w-full mb-4">
          <input
            type="email"
            placeholder="E-Mail *"
            required
            class="w-full px-4 py-3 rounded-xl bg-white/80 text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#98C73C] transition-all duration-200"
          />
        </div>

        <!-- Passwort Feld -->
        <div class="w-full mb-6 relative">
          <input
            :type="showPassword ? 'text' : 'password'"
            placeholder="Passwort *"
            required
            class="w-full px-4 py-3 pr-12 rounded-xl bg-white/80 text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#98C73C] transition-all duration-200"
          />
          <!-- Icon -->
          <span
            class="material-symbols-outlined absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-700 cursor-pointer select-none"
            @click="togglePassword"
          >
            {{ showPassword ? 'visibility' : 'visibility_off' }}
          </span>
        </div>

        <!-- Anmelden Button -->
        <button
          class="w-full py-3 rounded-xl text-black font-semibold text-lg shadow-md transition-all duration-300 hover:brightness-110"
          style="background-color: #98C73C;"
        >
          Anmelden
        </button>

        <!-- Passwort vergessen -->
        <router-link
          to="/forgot-password"
          class="mt-4 text-sm text-black hover:text-[#98C73C] transition-colors"
        >
          Passwort vergessen?
        </router-link>

        <!-- Divider ODER -->
        <div class="flex items-center w-full my-6">
          <div class="flex-grow h-[2px] bg-gray-400/60"></div>
          <span class="px-3 text-gray-700 text-sm font-semibold">ODER</span>
          <div class="flex-grow h-[2px] bg-gray-400/60"></div>
        </div>

        <!-- Registrieren -->
        <p class="text-sm text-black">
          Noch kein Konto?
          <router-link
            to="/register"
            class="font-semibold hover:text-[#98C73C] transition-colors"
          >
            Registrieren
          </router-link>
        </p>
      </div>
    </div>

    <!-- Footer -->
    <footer
      class="bg-[#98C73C] text-black text-center py-6 relative z-10 animate-fadeIn"
    >
      <div class="container mx-auto px-4">
        <p class="text-sm">
          © {{ new Date().getFullYear() }} UNIAGENT
        </p>
        <div class="mt-3 flex justify-center gap-6 text-black">
          <a href="#" class="hover:text-white transition-colors">Datenschutz</a>
          <a href="#" class="hover:text-white transition-colors">Impressum</a>
          <a href="#" class="hover:text-white transition-colors">Kontakt</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import backgroundImage from '@/assets/background.png'

const showPassword = ref(false)

const togglePassword = () => {
  showPassword.value = !showPassword.value
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200');

.material-symbols-outlined {
  font-variation-settings:
    'FILL' 0,
    'wght' 400,
    'GRAD' 0,
    'opsz' 24;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeIn {
  animation: fadeIn 1s ease-in-out;
}
</style>