<script setup lang="ts">
import WindowAboutDialog from './WindowAboutDialog.vue'
import { ref } from 'vue'

const aboutOpen = ref(false)
</script>

<template>
  <div class="bg-zinc-800 border-b border-zinc-700 p-2">
    <button @click="aboutOpen = true">
      About
    </button>
    <WindowAboutDialog v-model="aboutOpen" />
  </div>
</template>
