export const nextCommandDelay = (minDelay: number, intenisty: number) => {
  const currentDelay = Math.floor(Math.random() * (intenisty - minDelay + 1)) + minDelay
  return currentDelay
}
