<template>
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    <Hero />
  </div>

<!-- j'ajoute une navigation entre les composants -->
  <router-link to="/" > incrémenter </router-link> |
  <router-link to="/comparateur"> Comparateur </router-link>
    <!-- j'affiche le composant correspondant à la route -->
  <router-view />
</template>

<script setup>
import Hero from './components/Hero.vue'

</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
