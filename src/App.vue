<script setup lang="ts">
import Header from './components/Header.vue';
</script>

<template>
  <Header />
  <router-view :key="$route.fullPath"></router-view>
</template>

<style scoped></style>
