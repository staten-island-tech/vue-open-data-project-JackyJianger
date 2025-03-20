<template>
    <div>
      <div v-for="(school, index) in satData" :key="index" class="school-card">
        <div class="card-header">
          <h3>{{ school.school_name }}</h3>
        </div>
        <div class="card-body">
          <p><strong>Reading Score:</strong> {{ school.sat_critical_reading_avg_score || 'N/A' }}</p>
          <p><strong>Math Score:</strong> {{ school. sat_math_avg_score || 'N/A' }}</p>
        </div>
        <div class="card-footer">
          <p>{{ school.district || 'District: N/A' }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';

const props = defineProps({
  satData: Array 
});

  </script>

<style lang="css"scoped>
.school-card {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 15px;
  padding: 20px;
  width: 300px;
  display: inline-block;
  vertical-align: top;
}

.card-header h3 {
  margin: 0;
  font-size: 1.25em;
}

.card-body p {
  margin: 5px 0;
}

.card-footer {
  font-size: 0.875em;
  color: #666;
}
</style>