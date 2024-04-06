import jabAudio from '@/assets/audio/jab.wav'
import crossAudio from '@/assets/audio/cross.wav'
import leadHookAudio from '@/assets/audio/lead hook.wav'
import rearHookAudio from '@/assets/audio/rear hook.wav'
import leadUppercutAudio from '@/assets/audio/lead uppercut.wav'
import rearUppercutAudio from '@/assets/audio/rear uppercut.wav'

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
