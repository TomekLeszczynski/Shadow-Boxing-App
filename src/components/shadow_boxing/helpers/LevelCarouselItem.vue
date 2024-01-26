<template>
  <div class="grid grid-cols-1 bg-almost-white font-public-sans p-9 animate-button-show-from-left">
    <form class="accent-almost-black">
      <div class="grid grid-flow-cols border-t border-almost-black p-2">
        <p>Set number of punches [total]</p>
        <div class="grid grid-cols-4 pb-1">
          <div class="col-start-4 col-end-5">
            <div class="flex flex-row justify-between items-center">
              <input type="radio" id="50" value="50" v-model="punchAmount" class="size-5" />
              <label for="50" class="pl-1">50</label>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-4 pb-1">
          <div class="col-start-4 col-end-5">
            <div class="flex flex-row justify-between items-center">
              <input type="radio" id="100" value="100" v-model="punchAmount" class="size-5" />
              <label for="100" class="pl-1">100</label>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-4 pb-1">
          <div class="col-start-4 col-end-5">
            <div class="flex flex-row justify-between items-center">
              <input type="radio" id="250" value="250" v-model="punchAmount" class="size-5" />
              <label for="250" class="pl-1">250</label>
            </div>
          </div>
        </div>
      </div>
      <div class="grid grid-flow-cols border-t border-almost-black p-2">
        <p>Set the tempo</p>
        <div class="grid grid-cols-4 pb-1">
          <div class="col-start-4 col-end-5">
            <div class="flex flex-row justify-between items-center">
              <input type="radio" id="6" value="6" v-model="tempo" class="size-5" />
              <label for="6" class="pl-1">Low</label>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-4 pb-1">
          <div class="col-start-4 col-end-5">
            <div class="flex flex-row justify-between items-center">
              <input type="radio" id="4" value="4" v-model="tempo" class="size-5" />
              <label for="4" class="pl-1">Mid</label>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-4 pb-1">
          <div class="col-start-4 col-end-5">
            <div class="flex flex-row justify-between items-center">
              <input type="radio" id="3" value="3" v-model="tempo" class="size-5" />
              <label for="3" class="pl-1">High</label>
            </div>
          </div>
        </div>
      </div>
      <div class="grid grid-flow-cols border-y border-almost-black p-2">
        <p>Set the display</p>
        <div class="grid grid-cols-4 pb-1">
          <div class="col-start-4 col-end-5">
            <div class="flex flex-row justify-between items-center">
              <input type="radio" id="digits" value="digits" v-model="display" class="size-5" />
              <label for="digits" class="pl-1">Digits</label>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-4 pb-1">
          <div class="col-start-4 col-end-5">
            <div class="flex flex-row justify-between items-center">
              <input type="radio" id="figures" value="figures" v-model="display" class="size-5" />
              <label for="figures" class="pl-1">Figures</label>
            </div>
          </div>
        </div>
      </div>
    </form>
    <div class="w-full grid justify-center mt-12 mb-3">
      <button
        class="py-4 px-12 group md:w-96 w-full bg-almost-black animate-appear-slow-and-delayed"
        tabindex="0"
      >
        <button-label labelText="Start" class="text-almost-white" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
// vue import
import { ref } from 'vue'

// set props
defineProps(['level'])

// component import
import ButtonLabel from '@/components/shared/ButtonLabel.vue'

// set training
// set punches amount
const punchAmount = ref<number>(50)
// set the tempo
const tempo = ref<number>(6)
// set the display
const display = ref<string>('digits')
</script>
