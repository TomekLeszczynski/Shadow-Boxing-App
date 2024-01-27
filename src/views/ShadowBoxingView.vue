<template>
  <div class="p-4 relative flex flex-col">
    <!-- HEADER -->
    <shadow-header-box />
    <!-- SET LEVEL -->

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 font-public-sans mb-2 h-full">
      <div class="relative overflow-hidden">
        <Transition
          mode="out-in"
          enter-active-class="transition-transform duration-1000"
          leave-active-class="transition-transform duration-1000"
          enter-from-class="transform translate-y-full"
          leave-to-class="transform translate-y-full"
        >
          <level-configurator
            v-if="basicSelected"
            class="absolute inset-0 top-0 left-0"
            @click="basicSelected = false"
          />
        </Transition>
        <level-description-box level="Basic" @click="basicSelected = true">
          <ul class="list-disc">
            <li>Suitable for beginners and those who are looking for a less intense workout;</li>
            <li>
              Focuses on basic combinations and slower pace to help users grasp fundamental
              movements;
            </li>
            <li>
              Audio commands and simplified figure which demonstrates each punch, making it easier
              to follow along;
            </li>
          </ul>
        </level-description-box>
      </div>
      <level-description-box level="Advanced">
        <ul class="list-disc">
          <li>Designed for advanced users aiming for a high-intensity workout.</li>
          <li>Emphasizes rapid movements and more complex combinations;</li>
          <li>Audio commands allows helps users to stay focused on the movements.</li>
        </ul>
      </level-description-box>
    </div>
    <!-- SHADOW BOXING GENERAL DESCRIPTION -->
    <general-description class="mt-auto" />
  </div>
</template>
<script setup lang="ts">
// component import
import LevelDescriptionBox from '@/components/shadow_boxing/helpers/LevelDescriptionBox.vue'
import ShadowHeaderBox from '@/components/shadow_boxing/helpers/ShadowHeaderBox.vue'
import GeneralDescription from '@/components/shadow_boxing/helpers/GeneralDescription.vue'
import LevelConfigurator from '@/components/shadow_boxing/helpers/LevelConfigurator.vue'

import { ref } from 'vue'
const basicSelected = ref<boolean>(false)
</script>
