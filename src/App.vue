<template>
  <div class="container">
    <div class="habbits">
      <h1 class="habbits__title">Habbits</h1>
      <div class="form">
        <div class="form__group">
          <label id="form-label" class="form__label" for="form-input"
            >Qual o novo hábito?
          </label>
          <input
            id="form-input"
            class="form__input"
            type="text"
            v-model="text"
          />
        </div>

        <div class="form__footer">
          <button class="form__button" @click="createNewHabit">
            Adicionar
          </button>
        </div>
      </div>

      <div class="habbits__progressbar">
        {{ progress }}%
        <progress max="100" :value="progress" />
      </div>

      <div class="habbits__habits">
        <div
          v-for="(habit, index) in habits"
          :key="habit.id"
          class="habbits__habit"
          :class="`habbits__habit-${index}`"
        >
          <input
            :id="`habit-input-${index}`"
            type="checkbox"
            v-model="habit.done"
          />
          <label :id="`habit-label-${index}`" :for="`habit-input-${index}`">{{
            habit.text
          }}</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed, ref } from 'vue'
  import { useHabitsStore } from './store/habits'

  const { habits, addHabit } = useHabitsStore()

  const text = ref<string>('')

  function createNewHabit(): void {
    addHabit(text.value)
  }

  const progress = computed(() => {
    const numberOfHabits = habits.length

    if (numberOfHabits) {
      const numberOfHabitsDone = habits.filter((habit) => habit.done).length
      return ((numberOfHabitsDone / numberOfHabits) * 100).toFixed(0)
    }

    return 0
  })
</script>

<style scoped lang="scss">
  .container {
    padding: 0 $p-20;
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: $g-16;

    &__group {
      display: flex;
      flex-direction: column;
      gap: $g-8;
    }
  }
</style>
