<template>
  <div>
  <FirstChart :chart-data="satData"  />
  </div>
</template>


<script setup>
import FirstChart from '../components/FirstChart.vue'
import { reactive } from 'vue'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const satData = ref('')
async function getData() {
  let res = await fetch(`https://data.cityofnewyork.us/resource/f9bf-2cp4.json`)
  let data = await res.json()
  satData.value = data
  console.log(data)
}

onMounted(() => {
  getData()
})
</script>

<style lang="scss" scoped>

</style>