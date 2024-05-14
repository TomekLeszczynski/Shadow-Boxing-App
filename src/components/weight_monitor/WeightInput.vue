<template>
  <div class="animate-text-show-up">
    <form @submit.prevent="populateWeights">
      <input
        v-model="weightInput"
        type="number"
        step="0.1"
        placeholder="00.0"
        class="text-custom-white text-xl bg-custom-white bg-opacity-20 p-5 text-center h-full appearance-none"
        aria-label="Type in New Measurement"
      />
      <button
        class="bg-red-500 py-5 px-12 group tracking-wide"
        aria-label="Add & Save New Measurement"
      >
        <button-label labelText="Add new measurement" />
      </button>
    </form>
  </div>
</template>
<script setup lang="ts">
// vue import
import { ref } from 'vue'

// pinia import
import { useAuthStore } from '@/stores/AuthentificationStore'

// firebase import
import { addDoc, collection } from 'firebase/firestore'
import { db } from '@/firebase/firebaseInit'

// components import
import ButtonLabel from '../shared/ButtonLabel.vue'

// pinia store instance
const authStore = useAuthStore()

// weight value entered by the user
const weightInput = ref<number | null>(null)

// submit weight value to firebase user's data collection
const populateWeights = async (): Promise<void> => {
  const user = authStore.user
  if (user && weightInput.value && weightInput.value > 0) {
    try {
      // according to firebase docs: function creates records in 'measurements' folder
      const measurementsCollection = collection(db, 'users', user.uid, 'measurements')
      // record keeps weight value & date of creation
      await addDoc(measurementsCollection, { weight: weightInput.value, date: new Date() })
    } catch (error) {
      console.error('Error from WeightInput:', error)
    }
  }
  weightInput.value = null
}
</script>
