import finishSound from '@/assets/audio/boxing-bell-signal-finish.mp3'
import startSound from '@/assets/audio/boxing-bell-signal-start.mp3'
import countdownSound from '@/assets/audio/clock_sound.wav'
export const playSound = (sound: string | null) => {
  if (sound) {
    const audio = new Audio(sound)
    audio.play()
  } else {
    console.error('No sound found:' + Error)
  }
}

export const playStartSound = () => {
  playSound(startSound)
  return
}
export const playFinishSound = () => {
  playSound(finishSound)
  return
}
export const playClockSound = () => {
  playSound(countdownSound)
  return
}
