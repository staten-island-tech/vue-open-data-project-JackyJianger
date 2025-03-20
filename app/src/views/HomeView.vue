<template>
  <div>
  <FirstChart :chart-data="satData"  />
  <schoolcard :sat-data="satData" /> 
  </div>
</template>


<script setup>
import FirstChart from '../components/FirstChart.vue'
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
  console.log(data)
}

onMounted(() => {
  getData()
})

const satsatData = reactive({
  labels: ['1','2'] ,
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

<style lang="css" scoped>

</style>