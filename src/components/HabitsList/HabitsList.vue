<template>
  <div class="habits-list">
    <div
      v-for="(habit, index) in habits"
      :key="habit.id"
      class="habits-list__habit"
      :class="`habits-list__habit-${index}`"
    >
      <input
        :id="`habit-input-${index}`"
        type="checkbox"
        v-model="habit.done"
        @click="toggleHabit(habit.id)"
      />
      <label :id="`habit-label-${index}`" :for="`habit-input-${index}`">
        {{ habit.text }}
      </label>

      <button @click="deleteHabit(habit.id)">X</button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useHabitsStore } from '@/store/habits'
  import { storeToRefs } from 'pinia'

  const { habits } = storeToRefs(useHabitsStore())
  const { deleteHabit, toggleHabit } = useHabitsStore()
</script>
