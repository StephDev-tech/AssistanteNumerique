<template>
  <h2>{{ msg }}</h2>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button> 
    <!-- je créer un bouton pour incrémenter le compteur -->
    <p>On garde le petit compteur pour le fun, quit sait ça pourrait être utile !</p>
    <!-- je créer un bouton pour réinitialiser le compteur -->
    <button type="button" @click="count = 0">Reset</button>
  </div>

</template>


<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
