import { Habit } from '@/types/habits'

interface useLocalStorageReturn {
  getStoreInLocalStorage: () => Habit[]
  setStoreInLocalStorage: (habits: Habit[]) => void
}

export function useLocalStorage(): useLocalStorageReturn {
  const getStoreInLocalStorage = (): Habit[] => {
    const habitsLocalStorage = localStorage.getItem('habits')

    if (habitsLocalStorage) {
      return JSON.parse(habitsLocalStorage)
    }
    return []
  }

  const setStoreInLocalStorage = (habits: Habit[]): void => {
    localStorage.setItem('habits', JSON.stringify(habits))
  }

  return {
    getStoreInLocalStorage,
    setStoreInLocalStorage
  }
}
