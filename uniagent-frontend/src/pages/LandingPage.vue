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

    <!-- Inhalt -->
    <section
      class="flex flex-col flex-grow items-center justify-center text-center px-6 text-black relative z-10"
    >
      <!-- Logo / Title -->
      <h1
        class="flex items-center justify-center gap-3 text-5xl md:text-6xl font-extrabold mb-4 tracking-tight drop-shadow-lg"
      >
        <span>UNIAGENT</span>
      </h1>

      <!-- Subtitle -->
      <p class="text-lg md:text-xl max-w-2xl mb-10 drop-shadow-md">
        <span
          class="underline underline-offset-4 decoration-[#98C73C] font-semibold"
        >
          KI-gestützter Agent
        </span>
        &nbsp;für alle Fragen rund ums Studium.
      </p>

      <!-- CTA Button -->
      <router-link
        to="/login"
        class="group inline-flex items-center gap-2 text-black text-lg font-medium px-8 py-4 rounded-2xl shadow-lg transition-all duration-300"
        :style="{
          backgroundColor: hover ? '#83b035' : '#98C73C',
        }"
        @mouseover="hover = true"
        @mouseleave="hover = false"
      >
        <span>Anmelden</span>
        <svg
          class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </router-link>
    </section>

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

const hover = ref(false)
</script>

<style scoped>
section {
  animation: fadeIn 1s ease-in-out;
}

footer {
  animation: fadeIn 1s ease-in-out;
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
</style>