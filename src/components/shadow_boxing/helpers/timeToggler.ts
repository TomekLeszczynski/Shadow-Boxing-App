import { useTrainingStateStore } from '@/stores/TrainingStore'
const trainingState = useTrainingStateStore()

export const toggleTimer = (
  sessionHandler: () => void,
  interval: NodeJS.Timeout | undefined,
  interval2?: NodeJS.Timeout | undefined
): void => {
  trainingState.togglePause()
  if (!trainingState.sessionIsPaused) {
    sessionHandler()
  } else {
    clearInterval(interval)
    if (interval2) {
      clearInterval(interval2)
    }
  }
}
