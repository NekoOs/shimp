<script setup lang="ts">
import { SplitterGroup, SplitterPanel, SplitterResizeHandle } from 'reka-ui'
</script>

<template>
  <div class="w-screen h-screen flex flex-col bg-zinc-950 text-gray-200 font-mono text-sm">
    <!-- AppMainToolbar -->
    <div class="bg-zinc-800 border-b border-zinc-700 px-3 py-2">
      AppMainToolbar
    </div>

    <SplitterGroup
      direction="vertical"
      class="flex-1 overflow-hidden"
    >
      <!-- Top horizontal layout -->
      <SplitterPanel :min-size="40">
        <SplitterGroup
          direction="horizontal"
          class="h-full"
        >
          <!-- AppSidebarPanelLeft -->
          <SplitterPanel
            :min-size="4"
            size="16"
          >
            <div class="flex h-full">
              <!-- AppToolWindowBarLeft -->
              <div class="w-10 bg-zinc-900 border-r border-zinc-700 p-2 flex justify-center">
                L
              </div>
              <!-- AppSidebarPanelLeft -->
              <div class="flex-1 bg-zinc-800 border-r border-zinc-700 p-2">
                AppSidebarPanelLeft
              </div>
            </div>
          </SplitterPanel>

          <SplitterResizeHandle />

          <!-- AppMainPanel -->
          <SplitterPanel
            :min-size="40"
            class="bg-zinc-950 p-2"
          >
            AppMainPanel (tabs, welcome, editors, etc.)
          </SplitterPanel>

          <SplitterResizeHandle />

          <!-- AppSidebarPanelRight -->
          <SplitterPanel
            :min-size="4"
            size="16"
          >
            <div class="flex h-full">
              <!-- AppSidebarPanelRight -->
              <div class="flex-1 bg-zinc-800 border-l border-zinc-700 p-2">
                AppSidebarPanelRight
              </div>
              <!-- AppToolWindowBarRight -->
              <div class="w-10 bg-zinc-900 border-l border-zinc-700 p-2 flex justify-center">
                R
              </div>
            </div>
          </SplitterPanel>
        </SplitterGroup>
      </SplitterPanel>

      <SplitterResizeHandle />

      <!-- AppDockBottomPanel -->
      <SplitterPanel
        :min-size="15"
        size="25"
      >
        <div class="bg-zinc-900 border-t border-zinc-700 px-2 py-1 h-full">
          AppDockBottomPanel (logs, terminal, output, etc.)
        </div>
      </SplitterPanel>
    </SplitterGroup>

    <!-- AppStatusBar -->
    <div class="bg-zinc-800 border-t border-zinc-800 px-2 py-1">
      AppStatusBar (global info, indicators)
    </div>
  </div>
</template>
