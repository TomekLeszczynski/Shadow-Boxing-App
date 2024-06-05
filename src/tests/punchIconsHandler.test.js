import { describe, test, expect } from 'vitest'
import { getCurrentPunchImage } from '@/components/shadow_boxing/helpers/punchIconsHandler.ts'


import jabImage from '@/assets/graphics/jab.webp'
import crossImage from '@/assets/graphics/cross.webp'
import leadHookImage from '@/assets/graphics/lead hook.webp'
import rearHookImage from '@/assets/graphics/rear hook.webp'
import leadUppercutImage from '@/assets/graphics/lead uppercut.webp'
import rearUppercutImage from '@/assets/graphics/rear uppercut.webp'

describe('displaying image related to current punch during training session', () => {
  test('if returns image related to "jab" punch', () => {
    const result = getCurrentPunchImage('jab')
    expect(result).toBe(jabImage)
  })
  test('if returns image related to "cross" punch', () => {
    const result = getCurrentPunchImage('cross')
    expect(result).toBe(crossImage)
  })
  test('if returns image related to "lead hook" punch', () => {
    const result = getCurrentPunchImage('lead hook')
    expect(result).toBe(leadHookImage)
  })
  test('if returns image related to "rear hook" punch', () => {
    const result = getCurrentPunchImage('rear hook')
    expect(result).toBe(rearHookImage)
  })
  test('if returns image related to "lead uppercut" punch', () => {
    const result = getCurrentPunchImage('lead uppercut')
    expect(result).toBe(leadUppercutImage)
  })
  test('if returns image related to "rear uppercut" punch', () => {
    const result = getCurrentPunchImage('rear uppercut')
    expect(result).toBe(rearUppercutImage)
  })
})
