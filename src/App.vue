<script setup lang="ts">
import TaskBar from './components/TaskBar.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <TaskBar />

  <RouterView />

  <!-- <button @click="ajouterElement">Ajoute une valeur</button>
  {{ montab }} -->
</template>

<style scoped></style>
