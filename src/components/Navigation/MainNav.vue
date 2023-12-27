<template>
  <div>
    <router-link to="/">| Home</router-link>
    <router-link to="/:userId/shadow-boxing">| Shadow Boxing</router-link>
    <router-link to="/:userId/weight-monitor">| Weight Monitor</router-link>
    <router-link to="/login-register">| Sign in/Log in </router-link>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
