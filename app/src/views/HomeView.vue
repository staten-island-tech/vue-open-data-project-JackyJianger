<template>
  <div>

  <schoolcard :sat-data="satData" /> 
  </div>
</template>


<script setup>
import BarChart from '../components/BarChart.vue'
import { reactive } from 'vue'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import schoolcard from '../components/schoolcard.vue'
const route = useRoute()
const school = ref({})
const satData = ref([])
async function getData() {
  let res = await fetch(`https://data.cityofnewyork.us/resource/f9bf-2cp4.json`)
  let data = await res.json()
  satData.value = data
}



onMounted(() => {
  getData()
})


</script>

<style lang="css" scoped>

</style>