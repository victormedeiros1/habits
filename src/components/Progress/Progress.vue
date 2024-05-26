<template>
  <div class="habbits__progress">
    {{ progress }}%
    <progress max="100" :value="progress" />
  </div>
</template>

<script setup lang="ts">
  interface Props {
    progress: number
  }

  defineProps<Props>()
</script>
