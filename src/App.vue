<template>
  <component :is="layoutComponent">
    <RouterView />
  </component>
</template>

<script setup>
import { shallowRef, watch } from 'vue'
import { useRoute } from 'vue-router'
import MainLayout from './layouts/MainLayout.vue'

const route = useRoute()

const layouts = {
  MainLayout: MainLayout,
}

const layoutComponent = shallowRef(MainLayout)
watch(
  () => route.meta,
  (meta) => {
    if (meta.layout && layouts[meta.layout]) {
      layoutComponent.value = layouts[meta.layout]
    } else {
      layoutComponent.value = MainLayout
    }
  },
  { immediate: true },
)
</script>
