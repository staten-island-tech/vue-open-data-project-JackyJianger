<template>
  <div>

  </div>
</template>

<script setup>
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