<template>
  <div class="about">
    <BarChart :data="satsatData"  />
  </div>
</template>

<script setup>
import BarChart from '../components/BarChart.vue'
import { reactive } from 'vue'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import schoolcard from '../components/schoolcard.vue'
let data = []
const satsatData = reactive({
  labels: ['ReadingScore','MathScore'] ,
  datasets: [
    {
      label:"Count",
      data: ['ReadingScore' , 'MathScore'],
      backgroundColor: ["cdc0b0", "cdc0b0"],
      borderWidth: 0,
    }
  ]
})
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
