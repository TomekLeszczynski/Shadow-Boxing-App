import type { Ref } from 'vue'
export let intervalId: NodeJS.Timeout | undefined = undefined // Node.JS.Timeout found on the internet -> to verification!

export const handleInterval = (
  mins: Ref<number>,
  secs: Ref<number>,
  handleOnCompleted: () => void,
  playRingBellSound?: () => void
): void => {
  intervalId = setInterval(() => {
 
    if (secs.value > 0) {
      secs.value--
      return
    }
    if (mins.value > 0 && secs.value === 0) {
      mins.value--
      secs.value = 59
      return
    } else {
      if (playRingBellSound) {
        playRingBellSound()
      }
      clearInterval(intervalId)
      handleOnCompleted()
      return
    }
  }, 1000)
}
