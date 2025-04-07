<template>
  <div class="about">
    <BarChart :data="chartData" :key="keychart" />
  </div>
</template>

<script setup>
import BarChart from '../components/BarChart.vue'
import { reactive, ref, onMounted } from 'vue'

const readsatData = ref([0, 0, 0, 0, 0, 0, 0, 0])
const keychart = ref(0)

async function getData() {
  let res = await fetch(`https://data.cityofnewyork.us/resource/f9bf-2cp4.json`)
  let data = await res.json()
  data.forEach((item) => {
    if (item.sat_writing_avg_score <= 100) {
      readsatData.value[0]++
    } else if (item.sat_writing_avg_score <= 200) {
      readsatData.value[1]++
    } else if (item.sat_writing_avg_score <= 300) {
      readsatData.value[2]++
    } else if (item.sat_writing_avg_score <= 400) {
      readsatData.value[3]++
    } else if (item.sat_writing_avg_score <= 500) {
      readsatData.value[4]++
    } else if (item.sat_writing_avg_score <= 600) {
      readsatData.value[5]++
    } else if (item.sat_writing_avg_score <= 700) {
      readsatData.value[6]++
    } else if (item.sat_writing_avg_score <= 800) {
      readsatData.value[7]++
    }
  })

  keychart.value++
}

onMounted(() => {
  getData()
})

const chartData = reactive({
  labels: ['0-100', '101-200', '201-300', '301-400', '401-500', '501-600', '601-700', '701-800'],
  datasets: [
    {
      label: 'Average SAT Reading Scores in Schools',
      data: readsatData.value,
      backgroundColor: [
        '#af2b2b',
        '#af2b2b',
        '#af2b2b',
        '#af2b2b',
        '#36A2EB',
        '#FFCE56',
        '#07AA3D',
        '#920A92',
      ],
    },
  ],
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
