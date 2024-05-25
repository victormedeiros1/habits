<template>
  <div class="container">
    <div class="habbits">
      <h1 class="habbits__title">Habbits</h1>

      <form class="form" @submit="createNewHabit">
        <div class="form__group">
          <label id="form-label" class="form__label" for="form-input"
            >Qual o novo hábito?
          </label>
          <input
            id="form-input"
            class="form__input"
            type="text"
            v-model="name"
          />
        </div>

        <div class="form__footer">
          <button class="form__button">Adicionar</button>
        </div>
      </form>

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
            habit.name
          }}</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { v4 as uuidv4 } from 'uuid'
  import { computed, ref } from 'vue'

  interface Habit {
    id: string
    name: string
    done: boolean
  }

  const name = ref<string>('')
  const habits = ref<Habit[]>([])

  function createNewHabit(event: Event): void {
    event.preventDefault()

    habits.value.push({
      id: uuidv4(),
      name: name.value,
      done: false
    })
  }

  const progress = computed(() => {
    const numberOfHabits = habits.value.length

    if (numberOfHabits) {
      const numberOfHabitsDone = habits.value.filter(
        (habit) => habit.done
      ).length
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
