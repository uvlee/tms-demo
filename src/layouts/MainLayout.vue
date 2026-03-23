<template>
  <main class="main-layout-container">
    <Header></Header>
    <slot></slot>
  </main>
</template>

<script setup>
import Header from '@/feature/header/Header.vue'
</script>
