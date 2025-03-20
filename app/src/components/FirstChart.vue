<template>
    <div>
      <Bar :data="chartData" :options="ChartOptions" />
      
    </div>
  </template>
  
  <script setup>
  import { onMounted, ref, watch } from 'vue'
  import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
  import {reactive} from "vue"

  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
  
  const props = defineProps({
        satData:Object
  })
  </script>
  
  <style scoped>
  canvas {
    width: 100%;
    height: 400px;
  }
  </style>