<template>
  <div>
    <div v-if="measurements.length > 1">
      Your current weight: <span>{{ computedDetails.lastMeasure }}</span>
      <p>
        Comparing to previous measure, its:
        <span :style="{ color: computedDetails.progress > 0 ? 'red' : 'green' }">{{
          computedDetails.progress
        }}</span>
      </p>
      <div>
        <p>
          The lowest weight: <span> {{ computedDetails.minValue }}</span>
        </p>
        <p>
          The highest weight: <span>{{ computedDetails.maxValue }}</span>
        </p>
        <p>
          The average weight: <span>{{ computedDetails.avgValue }}</span>
        </p>
      </div>
    </div>
    <measure-scope v-model:reduceValue="reduceValue" />
    <weight-display :measurements="filterMeasurementsByTimespan" />
  </div>
</template>
<script setup lang="ts">
// vue imports
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useAuthStore } from '@/stores/AuthentificationStore'

// firebase imports
import {
  collection,
  query,
  orderBy,
  getDocs,
  onSnapshot,
  type DocumentData,
  Query
} from 'firebase/firestore'
import type { Unsubscribe } from 'firebase/auth'
import { db } from '@/firebase/firebaseInit'

// helpers imports
import { getDetails, setTimespan } from './helpers/handleMeasurements'
import { type WeightData } from './helpers/interfaces'
// components imports
import WeightDisplay from './WeightDisplay.vue'
import MeasureScope from './MeasurementsScopeSelector.vue'

const authStore = useAuthStore()

const mapSnapshot = (snapshot: DocumentData[]): WeightData[] => {
  return snapshot.map((doc) => ({
    weight: doc.data().weight,
    date: doc.data().date.toDate()
  }))
}
// value emited from MeasureScope -> Date cutoff value
const reduceValue = ref<number>(30)

// set the timespan of displayed measurements
const filterMeasurementsByTimespan = computed(() => {
  if (reduceValue.value != undefined && reduceValue.value != 0) {
    return setTimespan(reduceValue.value, measurements.value)
  } else {
    return measurements.value
  }
})
let q: Query<DocumentData, DocumentData>

// amin array of user's measurements includes all measures
const measurements = ref<WeightData[]>([])

const getMeasures = async (): Promise<void> => {
  console.log(authStore.user?.uid)
  if (authStore.user != null) {
    const measurementsCollection = collection(db, 'users', authStore.user.uid, 'measurements')
    q = query(measurementsCollection, orderBy('date'))
    try {
      const querySnapshot = await getDocs(q)
      measurements.value = mapSnapshot(querySnapshot.docs)
    } catch (error) {
      'getMeasures error: ' + error
    }
  }
}

// modyfing measurements by imported math functions
const computedDetails = computed(() => getDetails(measurements.value))

// get realtime updates
let unsubscribe: Unsubscribe

const getUser = async (): Promise<void> => {
  try {
    await authStore.checkUserAuthState()
    console.log('userId: ' + authStore.user?.uid)
  } catch (error) {
    console.error('error: ' + error)
  }
}

onMounted(async () => {
  try {
    await getUser()
    getMeasures()
    if (q) {
      unsubscribe = onSnapshot(q, (snapshot: { docs: DocumentData[] }) => {
        measurements.value = mapSnapshot(snapshot.docs)
      })
    }
  } catch (error) {
    console.error('onMounted error:' + error)
  }
})

// detach a listener
onBeforeUnmount(() => {
  if (unsubscribe) {
    unsubscribe()
  }
})
</script>
