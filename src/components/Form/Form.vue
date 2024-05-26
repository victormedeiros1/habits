<template>
  <div class="form">
    <div class="form__group">
      <label id="form-label" class="form__label" for="form-input"
        >Qual o novo hábito?
      </label>
      <input id="form-input" class="form__input" type="text" v-model="text" />
    </div>

    <div class="form__footer">
      <button class="form__button" @click="createNewHabit">Adicionar</button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { useHabitsStore } from '@/store/habits'

  const { addHabit } = useHabitsStore()

  const text = ref<string>('')

  function createNewHabit(): void {
    addHabit(text.value)
  }
</script>

<style scoped lang="scss">
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
