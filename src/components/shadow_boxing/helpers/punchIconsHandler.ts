import jabImage from '@/assets/graphics/jab.webp'
import crossImage from '@/assets/graphics/cross.webp'
import leadHookImage from '@/assets/graphics/lead hook.webp'
import rearHookImage from '@/assets/graphics/rear hook.webp'
import leadUppercutImage from '@/assets/graphics/lead uppercut.webp'
import rearUppercutImage from '@/assets/graphics/rear uppercut.webp'

const imageMap: Record<string, string> = {
  jab: jabImage,
  cross: crossImage,
  'lead hook': leadHookImage,
  'rear hook': rearHookImage,
  'lead uppercut': leadUppercutImage,
  'rear uppercut': rearUppercutImage
}
const getCurrentPunchImage = (punch: string): string => {
  return imageMap[punch]
}

export { getCurrentPunchImage }
