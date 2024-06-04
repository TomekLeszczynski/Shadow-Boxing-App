import { type Details, type WeightData } from './interfaces'

// set the chart Y-Axis highest value related to user measurements
export function setAxisScope(data: WeightData[]): number {
  if (data.length > 0) {
    const max = Math.max(...data.map((item) => item.weight))
    return Math.floor(max + 10)
  } else {
    return 100
  }
}
// get specific details from user's measurements
export function getDetails(data: WeightData[]): Details {
  const measures: number[] = data.map((item) => item.weight)
  const lastMeasure: number = measures[measures.length - 1]
  const previousMeasure: number = measures[measures.length - 2]
  const progress: number = parseFloat((lastMeasure - previousMeasure).toFixed(2))
  const minValue: number = Math.min(...measures)
  const maxValue: number = Math.max(...measures)
  const avgValue: number = (minValue + maxValue) / 2
  return { measures, previousMeasure, lastMeasure, progress, minValue, maxValue, avgValue }
}
// specify a date range of measurements taken
// export function setTimespan(value: number, data: WeightData[]) {
//   const cutoffDate: Date = new Date()
//   cutoffDate.setDate(cutoffDate.getDate() - value)
//   return data.filter((data) => data.date >= cutoffDate)
// }
