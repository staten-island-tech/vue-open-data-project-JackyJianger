<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="wrapper">
    <nav>
      <RouterLink to="/">Math</RouterLink>
      <RouterLink to="/about">Reading</RouterLink>
    </nav>
  </div>

  <RouterView />
</template>

<style scoped></style>
