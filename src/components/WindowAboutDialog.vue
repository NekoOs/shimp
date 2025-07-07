<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { invoke } from '@tauri-apps/api/core'
import { Icon } from '@iconify/vue'
import {
  DialogRoot,
  DialogPortal,
  DialogOverlay,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose
} from 'reka-ui'

const open = defineModel({ type: Boolean, required: true })

const userAgent = ref('')
const info = ref({
  version: '',
  commit: '',
  build_date: ''
})

onMounted(async () => {
  const result = await invoke('get_app_info')
  Object.assign(info.value, result)

  if (typeof navigator !== 'undefined') {
    userAgent.value = navigator.userAgent
  }
})
</script>

<template>
  <DialogRoot :open="open">
    <DialogPortal>
      <DialogOverlay class="fixed inset-0 bg-black/40 backdrop-blur-sm z-40" />

      <DialogContent
        class="fixed top-1/2 left-1/2 z-50 w-[90vw] max-w-md -translate-x-1/2 -translate-y-1/2
               rounded-xl bg-zinc-900 p-6 text-sm text-zinc-300 shadow-xl
               border border-zinc-800"
        @interact-outside="event => {
          const target = event.target as HTMLElement
          if (target?.closest('[data-sonner-toaster]')) event.preventDefault()
        }"
      >
        <div class="flex items-start justify-between mb-3">
          <div>
            <DialogTitle class="text-lg font-semibold text-white">
              About Shimp
            </DialogTitle>
            <DialogDescription class="text-zinc-400">
              Version information for this build
            </DialogDescription>
          </div>

          <DialogClose
            class="text-zinc-400 hover:text-zinc-200 transition"
            @click="open = false"
          >
            <Icon icon="lucide:x" />
          </DialogClose>
        </div>

        <div class="space-y-1 font-mono">
          <p><span class="text-zinc-400">Version:</span> {{ info.version }}</p>
          <p><span class="text-zinc-400">Commit:</span> {{ info.commit }}</p>
          <p><span class="text-zinc-400">Build date:</span> {{ info.build_date }}</p>
          <p><span class="text-zinc-400">Platform:</span> {{ userAgent }}</p>
        </div>

        <div class="mt-4 flex justify-end">
          <button
            class="bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 px-4 py-1.5 rounded text-sm text-zinc-100 font-medium"
            @click="open = false"
          >
            Copy and Close
          </button>
        </div>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>
