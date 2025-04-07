<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="wrapper">
    <nav>
      <RouterLink to="/">Default</RouterLink>
      <RouterLink to="/reading">Reading</RouterLink>
      <RouterLink to="/math">Math</RouterLink>
      <RouterLink to="/score">Score</RouterLink>
    </nav>
  </div>
  <RouterView />
</template>

<style scoped></style>
