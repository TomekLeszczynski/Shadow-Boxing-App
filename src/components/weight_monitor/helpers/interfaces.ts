export interface WeightData {
    weight: number
    date: Date
  }
  export interface WeightGraphProps {
    measurements: WeightData[]
  }
  export interface Details {
    lastMeasure: number
    progress: number
    minValue: number
    maxValue: number
    avgValue: number
  }
  