<template>
  <div class="layout">
    <header class="header">
      <h1>UniAgent</h1>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/login">Login</router-link>
      </nav>
    </header>

    <main class="content">
      <router-view />
    </main>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.header {
  background: #1e3a8a;
  color: white;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header a {
  color: white;
  margin-left: 1rem;
  text-decoration: none;
}

.content {
  flex: 1;
  padding: 2rem;
}
</style>