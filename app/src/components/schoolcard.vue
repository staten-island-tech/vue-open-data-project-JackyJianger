<template>
  <div class="school-card-container">
    <div
      v-for="(school, index) in satData"
      :key="index"
      :class="['school-card', getCardColor(school)]"
    >
      <div class="card-header">
        <h3>{{ school.school_name }}</h3>
      </div>
      <div class="card-body">
        <p><strong>Reading Score:</strong> {{ school.sat_critical_reading_avg_score || 'N/A' }}</p>
        <p><strong>Math Score:</strong> {{ school.sat_math_avg_score || 'N/A' }}</p>
        <p><strong>Writing Score:</strong> {{ school.sat_writing_avg_score || 'N/A' }}</p>
      </div>
      <div class="card-body">
        <p><strong>District Borough Number: </strong>{{ school.dbn || 'District: N/A' }}</p>
      </div>
    </div>
  </div>
  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { defineProps } from 'vue'

const props = defineProps({
  satData: Array,
})

function getCardColor(school) {
  const reading = parseInt(school.sat_critical_reading_avg_score) || 0
  const math = parseInt(school.sat_math_avg_score) || 0
  const writing = parseInt(school.sat_writing_avg_score) || 0

  const average = [math + reading + writing] / 3

  if (average >= 600) return 'high-score'
  if (average >= 400) return 'medium-score'
  return 'low-score'
}
</script>

<style scoped>
.school-card-container {
  width: 1000px;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin: 15px;
}
.school-card {
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 17.5%;
  display: block;
  transition: background 0.3s ease;
}

.high-score {
  background: #4dff76;
}

.medium-score {
  background: #fddd75;
}

.low-score {
  background: #f84f5d;
}

.card-header h3 {
  margin: 0;
  font-size: 1.25em;
  color: black;
}

.card-body p {
  margin: 5px 0;
  color: rgb(97, 97, 97);
}
</style>
