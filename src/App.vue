<template>
  <div class="container">
    <div class="habbits">
      <Header />
      <Form />
      <Progress :progress="progress" />
      <HabitsList :habits="habits" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { useHabitsStore } from './store/habits'
  import { storeToRefs } from 'pinia'

  import Form from '@/components/Form/Form.vue'
  import Header from '@/components/Header/Header.vue'
  import Progress from '@/components/Progress/Progress.vue'
  import HabitsList from '@/components/HabitsList/HabitsList.vue'

  const { habits } = storeToRefs(useHabitsStore())

  const progress = computed(() => {
    const numberOfHabits = habits.value.length

    if (numberOfHabits > 0) {
      const numberOfHabitsDone = habits.value.filter(
        (habit) => habit.done
      ).length
      const percent = ((numberOfHabitsDone / numberOfHabits) * 100).toFixed(0)

      return Number(percent)
    }

    return 0
  })
</script>

<style scoped lang="scss">
  .container {
    padding: 0 $p-20;
  }
</style>
