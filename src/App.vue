<script setup lang="ts">
import { ref } from "vue";
import { invoke } from "@tauri-apps/api/core";
import {useI18n} from 'vue-i18n'

const {t} = useI18n()
const greetMsg = ref("");
const name = ref("");

async function greet() {
  greetMsg.value = await invoke("greet", { name: name.value });
}
</script>

<template>
  <main class="flex flex-col items-center justify-center min-h-screen bg-zinc-900 text-white px-4">
    <h1 class="text-3xl font-bold mb-6 text-center">{{ t('welcome') }}</h1>

    <div class="flex justify-center mb-4 gap-4">
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="h-24 hover:drop-shadow-[0_0_2em_#747bff]" alt="Vite logo" />
      </a>
      <a href="https://tauri.app" target="_blank">
        <img src="/tauri.svg" class="h-24 hover:drop-shadow-[0_0_2em_#24c8db]" alt="Tauri logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="./assets/vue.svg" class="h-24 hover:drop-shadow-[0_0_2em_#249b73]" alt="Vue logo" />
      </a>
    </div>

    <p class="mb-4 text-center text-gray-300">Click on the Tauri, Vite, and Vue logos to learn more.</p>

    <form class="flex gap-2" @submit.prevent="greet">
      <input
          id="greet-input"
          v-model="name"
          placeholder="Enter a name..."
          class="rounded-md border border-gray-600 bg-zinc-800 px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
          type="submit"
          class="rounded-md bg-blue-600 px-4 py-2 font-medium hover:bg-blue-700 active:bg-blue-800 transition"
      >
        Greet
      </button>
    </form>

    <p class="mt-4 text-lg">{{ greetMsg }}</p>
  </main>
</template>