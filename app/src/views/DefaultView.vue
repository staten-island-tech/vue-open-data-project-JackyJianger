<template>
  <div>
    <schoolcard :sat-data="satData" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import schoolcard from '../components/schoolcard.vue'
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
</script>

<style lang="scss" scoped></style>
