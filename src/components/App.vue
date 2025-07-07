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
      <!-- Main horizontal layout -->
      <SplitterPanel
        :min-size="40"
        class="flex h-full"
      >
        <AppToolWindowBarLeft />

        <SplitterGroup
          direction="horizontal"
        >
          <SplitterPanel
            :min-size="10"
            :default-size="15"
            collapsible
          >
            <AppSidebarPanelLeft />
          </SplitterPanel>

          <SplitterResizeHandle />

          <SplitterPanel>
            <AppMainPanel />
          </SplitterPanel>

          <SplitterResizeHandle />

          <SplitterPanel
            :min-size="10"
            :default-size="0"
            collapsible
          >
            <AppSidebarPanelRight />
          </SplitterPanel>
        </SplitterGroup>

        <AppToolWindowBarRight />
      </SplitterPanel>

      <SplitterResizeHandle />

      <SplitterPanel
        :min-size="15"
        :default-size="25"
        collapsible
      >
        <AppDockBottomPanel />
      </SplitterPanel>
    </SplitterGroup>

    <AppStatusBar />
  </div>
</template>

