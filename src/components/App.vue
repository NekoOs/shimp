<script setup lang="ts">
import { SplitterGroup, SplitterPanel, SplitterResizeHandle } from 'reka-ui'
import AppToolWindowBarLeft from './AppToolWindowBarLeft.vue'
import AppSidebarPanelLeft from './AppSidebarPanelLeft.vue'
import AppSidebarPanelRight from './AppSidebarPanelRight.vue'
import AppToolWindowBarRight from './AppToolWindowBarRight.vue'
import AppDockBottomPanel from './AppDockBottomPanel.vue'
import AppStatusBar from './AppStatusBar.vue'
import AppMainToolbar from './AppMainToolbar.vue'
import AppMainPanel from './AppMainPanel.vue'
</script>

<template>
  <div class="w-screen h-screen flex flex-col bg-zinc-950 text-gray-200 font-mono text-sm">
    <AppMainToolbar />

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
          <AppToolWindowBarLeft />
          <SplitterPanel
            :min-size="4"
            size="16"
          >
            <div class="flex h-full">
              <AppSidebarPanelLeft />
            </div>
          </SplitterPanel>

          <SplitterResizeHandle />

          <SplitterPanel
            :min-size="40"
            class="bg-zinc-950 p-2"
          >
            <AppMainPanel />
          </SplitterPanel>

          <SplitterResizeHandle />

          <SplitterPanel
            :min-size="4"
            size="16"
          >
            <div class="flex h-full">
              <AppSidebarPanelRight />
            </div>
          </SplitterPanel>
          <AppToolWindowBarRight />
        </SplitterGroup>
      </SplitterPanel>

      <SplitterResizeHandle />

      <SplitterPanel
        :min-size="15"
        size="25"
      >
        <AppDockBottomPanel />
      </SplitterPanel>
    </SplitterGroup>

    <AppStatusBar />
  </div>
</template>
