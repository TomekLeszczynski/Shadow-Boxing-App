import jabAudio from '@/assets/audio/jab.mp3'
import crossAudio from '@/assets/audio/cross.mp3'
import leadHookAudio from '@/assets/audio/lead hook.mp3'
import rearHookAudio from '@/assets/audio/rear hook.mp3'
import leadUppercutAudio from '@/assets/audio/lead uppercut.mp3'
import rearUppercutAudio from '@/assets/audio/rear uppercut.mp3'

const audioMap: Record<string, string> = {
  jab: jabAudio,
  cross: crossAudio,
  'lead hook': leadHookAudio,
  'rear hook': rearHookAudio,
  'lead uppercut': leadUppercutAudio,
  'rear uppercut': rearUppercutAudio
}

const playCurrentPunchSound = (punch: string) => {
  if (punch) {
    const audio = audioMap[punch]
    const audioFile = new Audio(audio)
    audioFile.play()
  }
}

export { playCurrentPunchSound }
