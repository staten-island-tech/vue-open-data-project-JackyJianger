<template>
  <div>
    <Pie :data="props.data" :options="chartOptions" />
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { Pie } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  LinearScale,
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale)

const chartOptions = reactive({
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    tooltip: {
      callbacks: {
        label: (tooltipItem) => {
          return `${tooltipItem.label}: ${tooltipItem.raw}`
        },
      },
    },
  },
})

const props = defineProps({
  data: Object,
})
</script>

<style scoped></style>
