// global settings for training sessions

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
  punches: number | null
  intensity: number | null
  displayMode: string | null
}
export const useBasicTrainingStore = defineStore('BasicTrainingStore', {
  state: (): BasicStateInt => {
    return {
      punches: null,
      intensity: null,
      displayMode: null
    }
  },
  actions: {
    setTrainingData(data: BasicStateInt): void {
      this.punches = data.punches
      this.intensity = data.intensity
      this.displayMode = data.displayMode
    }
  }
})

// advanced level training

interface AdvStateInt {
  rounds: number
  complexity: number
  intensity: number
}

export const useAdvTrainigStore = defineStore('AdvTrainingStore', {
  state: (): AdvStateInt => {
    return {
      rounds: 1,
      complexity: 0,
      intensity: 6
    }
  },
  actions: {
    setTrainingData(data: AdvStateInt) {
      this.rounds = data.rounds
      this.complexity = data.complexity
      this.intensity = data.intensity
    }
  }
})
