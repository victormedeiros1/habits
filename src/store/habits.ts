import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'
import { useLocalStorage } from './useLocalStorage'

const { getStoreInLocalStorage, setStoreInLocalStorage } = useLocalStorage()

export const useHabitsStore = defineStore('habits', {
  state: () => ({
    habits: getStoreInLocalStorage()
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

      setStoreInLocalStorage(this.habits)
    },
    deleteHabit(id: string) {
      this.habits = this.habits.filter((habit) => habit.id !== id)

      setStoreInLocalStorage(this.habits)
    },
    toggleHabit(id: string) {
      this.habits.find((habit) => {
        if (habit.id === id) {
          habit.done = !habit.done
        }
      })

      setStoreInLocalStorage(this.habits)
    }
  }
})
