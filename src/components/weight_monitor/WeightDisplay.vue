<template>
  <Line
    v-if="chartData"
    :data="chartData"
    :options="chartOptions"
    class="absolute inset-0 bg-custom-white p-4"
    aria-label="Measurements Displayed In Chart Form"
  />
</template>
<script setup lang="ts">
// vue import
import { computed } from 'vue'

// chart.js imports
import type { ChartData, ChartOptions } from 'chart.js'
import { Line } from 'vue-chartjs'
import Chart from 'chart.js/auto'

// helpers import
import { setAxisScope } from './helpers/handleMeasurements'
import { type WeightGraphProps } from './helpers/interfaces'

// chart init, required
Chart.register()

// props (filtered data) passed-by from StatsComponent
const props = defineProps<WeightGraphProps>()

// imported function -> set chart's max Y-Axis value
const axisYScope = computed(() => {
  return setAxisScope(props.measurements)
})

// set chart label (x-axis) based on date, used in chartData
function setDateLabel() {
  return props.measurements.map((item) =>
    item.date.toLocaleDateString('en-US', { day: '2-digit', month: 'short' })
  )
}
// set chart label (y-axis) based on weight, used in chartData
function setWeightlabel() {
  return props.measurements.map((item) => item.weight)
}

// chart dataset, used in chartData
function setDatasets() {
  return [
    {
      backgroundColor: '#ec642b',
      fill: true,
      tension: 0.1,
      showLine: false,
      data: setWeightlabel()
    }
  ]
}

// set chart based on user's meausurements
const chartData = computed(() => {
  return {
    labels: setDateLabel(),
    datasets: setDatasets()
  } as ChartData<'line'>
})

const chartOptions = computed(() => {
  return {
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      x: {
        type: 'category',
        ticks: {
          autoskip: true,
          color: '#141414',
          font: { size: 15 }
        },
        display: true
      },
      y: {
        ticks: { color: '#141414' },
        display: true,
        beginAtZero: false,
        min: 0,
        max: axisYScope.value
      }
    },
    responsive: true,
    maintainAspectRatio: false
  } as ChartOptions<'line'>
})
</script>
