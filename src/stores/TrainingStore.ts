import { defineStore } from 'pinia'
interface TrainingStateInt {
  countdownFinished: boolean
}
export const useTrainingStateStore = defineStore('TrainingState', {
  state: (): TrainingStateInt => {
    return {
      countdownFinished: false
    }
  }
})

//  basic level training

interface BasicStateInt {
  punches: number
  intensity: number
  displayMode: string
  status?: string | null
}
export const useBasicTrainingStore = defineStore('BasicTrainingStore', {
  state: (): BasicStateInt => {
    return {
      punches: 0,
      intensity: 0,
      displayMode: 'figures',
      status: null
    }
  },
  actions: {
    setTrainingData(data: BasicStateInt): void {
      this.punches = data.punches
      this.intensity = data.intensity
      this.displayMode = data.displayMode
    },
    toggleStatus(): void {
      this.status == 'work' ? (this.status = 'paused') : (this.status = 'work')
    }
  }
})

// advanced level training

interface AdvStateInt {
  rounds: number
  complexity: number
  intensity: number
  status?: string | null
}

export const useAdvTrainingStore = defineStore('AdvTrainingStore', {
  state: (): AdvStateInt => {
    return {
      rounds: 1,
      complexity: 0,
      intensity: 0,
      status: null
    }
  },
  actions: {
    setTrainingData(data: AdvStateInt) {
      this.rounds = data.rounds
      this.complexity = data.complexity
      this.intensity = data.intensity
    },
    toggleStatus(): void {
      this.status === 'work' ? (this.status = 'paused') : (this.status = 'work')
    }
  }
})
