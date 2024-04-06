export const playFinishSound = (sound: string) => {
  const audio = new Audio(sound)
  audio.play()
}
