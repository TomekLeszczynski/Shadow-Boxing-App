<template>
  <div>
    <span>Type in last measure</span>
    <form @submit.prevent="populateWeights">
      <input v-model="weightInput" type="number" step="0.1" class="text-custom-black" />
      <button class="bg-custom-orange-dark">Add weight</button>
    </form>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '@/stores/AuthentificationStore'

import { addDoc, collection } from 'firebase/firestore'
import { db } from '@/firebase/firebaseInit'

// pinia store instance
const authStore = useAuthStore()

// weight value entered by the user
const weightInput = ref<number | null>(null)

// submit weight value to firebase user's data collection
const populateWeights = async (): Promise<void> => {
  const user = authStore.user
  if (user && weightInput.value && weightInput.value > 0) {
    try {
      const measurementsCollection = collection(db, 'users', user.uid, 'measurements')
      await addDoc(measurementsCollection, { weight: weightInput.value, date: new Date() })
    } catch (error) {
      console.error('Error from WeightInput:', error)
    }
  }
  weightInput.value = null
}
</script>
