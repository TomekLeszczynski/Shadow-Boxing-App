<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav>
    <router-link to="/">| Home</router-link>
    <router-link to="/:userId/shadow-boxing">| Shadow Boxing</router-link>
    <router-link to="/:userId/weight-monitor">| Weight Monitor</router-link>
    <router-link to="/login-register">| Sign in/Log in </router-link>
  </nav>

  <RouterView />
  <footer>
    <div>
      <a
        style="text-decoration: none"
        href="https://www.flaticon.com/free-icons/fight"
        title="fight icons"
        >Fight icons created by Freepik - Flaticon</a
      >
    </div>
  </footer>
</template>
