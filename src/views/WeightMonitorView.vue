<template>
  <div class="grid grid-rows-12 p-4 grid-cols-1 w-full max-h-svh md:h-full gap-px">
    <!-- ADD NEW VALUE -->
    <div class="row-start-2 row-end-3 grid grid-cols-1">
      <weight-input />
    </div>
    <!-- DETAILS BOXES -->
    <div v-if="measurements.length > 1" class="grid row-start-3 row-end-7">
      <div class="grid grid-rows-5 md:grid-rows-none md:grid-cols-5 h-full pt-9 gap-px">
        <stats-box
          title="Current weight:"
          :value="computedDetails.lastMeasure"
          class="animate-text-show-up"
        />
        <stats-box
          title="Progress / regress:"
          :value="computedDetails.progress"
          class="animate-text-show-up-02"
          :valueColor="computedDetails.progress > 0 ? 'text-red-500' : 'text-green-500'"
        />
        <stats-box
          title="Lowest weight:"
          :value="computedDetails.minValue"
          class="animate-text-show-up-03"
        />
        <stats-box
          title="Highest weight:"
          :value="computedDetails.maxValue"
          class="animate-text-show-up-02"
        />
        <stats-box
          title="Average weight:"
          :value="computedDetails.avgValue"
          class="animate-text-show-up"
        />
      </div>
    </div>
    <div v-else class="grid row-start-3 row-end-13 justify-center items-center text-xl">
      {{ chartPlaceholder }}
    </div>
    <!-- CHART -->
    <div class="grid row-start-7 row-end-13 w-full relative">
      <weight-display v-if="measurements.length > 1" :measurements="measurements" />
    </div>
  </div>
</template>
<script setup lang="ts">
// vue import
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

// component import
import WeightInput from '@/components/weight_monitor/WeightInput.vue'
import StatsBox from '@/components/weight_monitor/StatsBox.vue'
import WeightDisplay from '@/components/weight_monitor/WeightDisplay.vue'

// helpers import
import { getDetails } from '@/components/weight_monitor/helpers/handleMeasurements'
import { type WeightData } from '@/components/weight_monitor/helpers/interfaces'

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

// pinia import
import { useAuthStore } from '@/stores/AuthenticationStore'

// pinia instance
const authStore = useAuthStore()

// array of user's measurements - includes all measures

const measurements = ref<WeightData[]>([])

//...
let q: Query<DocumentData, DocumentData>

// get realtime updates
let unsubscribe: Unsubscribe

// map reveived data to fit WeightData interface
const mapSnapshot = (snapshot: DocumentData[]): WeightData[] => {
  return snapshot.map((doc) => ({
    weight: doc.data().weight,
    date: doc.data().date.toDate()
  }))
}

// modyfing measurements by imported math functions - get by details box
const computedDetails = computed(() => getDetails(measurements.value))
// info text for chart placeholder
const chartPlaceholder = ref<string>('')

// check if user is logged in and get data stored in firebase - according to firbase docs.
const getMeasures = async (): Promise<void> => {
  if (authStore.user != null) {
    const measurementsCollection = collection(db, 'users', authStore.user.uid, 'measurements')
    q = query(measurementsCollection, orderBy('date'))
    try {
      const querySnapshot = await getDocs(q)
      measurements.value = mapSnapshot(querySnapshot.docs)
    } catch (error) {
      console.error('getMeasures error: ' + error)
    }
  }
}

// get user id before sending request to firebase / otherwise user = null
const getUser = async (): Promise<void> => {
  try {
    await authStore.checkUserAuthState()
  } catch (error) {
    console.error('Get user error: ' + error)
  }
}

// get user data and then get his measurements stored in firebase
onMounted(async () => {
  try {
    await getUser()
    getMeasures()
    // unsubscribe: according to firebase docs; updates data in real time
    if (q) {
      chartPlaceholder.value='Add at least 2 measurements to see chart'
      unsubscribe = onSnapshot(q, (snapshot: { docs: DocumentData[] }) => {
        measurements.value = mapSnapshot(snapshot.docs)
      })
    }
  } catch (error) {
    console.error('onMounted error:' + error)
  }
})

// detach a listener when unmounting component - method follows firebase docs
onBeforeUnmount(() => {
  if (unsubscribe) {
    unsubscribe()
  }
})
</script>
