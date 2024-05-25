import { Habit } from '@/types/habits'
import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'

export const useHabitsStore = defineStore('habits', {
  state: () => ({
    habits: [] as Habit[]
  }),
  getters: {
    getHabits: (state) => state.habits
  },
  actions: {
    addHabit(text: string) {
      this.habits.push({
        id: uuidv4(),
        text,
        done: false
      })
    }
  }
})
