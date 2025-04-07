<template>
  <div>
    <PieChart :data="pieData" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import PieChart from '../components/PieChart.vue'

const numtakerData = ref([0, 0, 0, 0, 0])
const keychart = ref(0)

async function getData() {
  let res = await fetch(`https://data.cityofnewyork.us/resource/f9bf-2cp4.json`)
  let data = await res.json()

  data.forEach((item) => {
    const num_of_sat_test_takers = parseInt(item.num_of_sat_test_takers)
    if (num_of_sat_test_takers <= 50) {
      numtakerData.value[0]++
    } else if (num_of_sat_test_takers <= 100) {
      numtakerData.value[1]++
    } else if (num_of_sat_test_takers <= 150) {
      numtakerData.value[2]++
    } else if (num_of_sat_test_takers <= 200) {
      numtakerData.value[3]++
    } else {
      numtakerData.value[4]++
    }
  })

  pieData.value.datasets[0].data = numtakerData.value
  keychart.value++
}

onMounted(() => {
  getData()
})

const pieData = ref({
  labels: ['0-50', '51-100', '101-150', '151-200', '201+'],
  datasets: [
    {
      label: 'Number of Test Takers',
      data: numtakerData.value,
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#07AA3D', '#920A92'],
      hoverOffset: 4,
    },
  ],
})
</script>

<style lang="scss" scoped></style>
