<template>
  <div>
    <Bar :data="props.data" :options="chartOptions" />
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
const chartOptions = reactive({
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
  },
})

const props = defineProps({
  data: Object,
})
</script>

<style scoped></style>