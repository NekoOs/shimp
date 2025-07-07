# 🧭 Layout Structure – Shimp IDE

Shimp follows a **well-defined visual layout**, inspired by modern IDEs like VS Code and JetBrains, designed to be *
*modular, extensible, and semantically clear**.

The application window is composed of **distinct screen areas** that are used to place components based on function and
visual region.

---

## 🧩 Visual Layout Areas

| Area Component          | Description                                                                |
|-------------------------|----------------------------------------------------------------------------|
| `AppMainToolbar`        | 📍 Top bar used for primary app controls. Always visible, non-resizable.   |
| `AppSidebarPanelLeft`   | 📚 Left contextual panel (e.g. file explorer, outline, history).           |
| `AppToolWindowBarLeft`  | 🔧 Narrow fixed-width vertical bar for toggling tools (e.g. icons, tabs).  |
| `AppMainPanel`          | 🖥️ Central area for editors, tabs, welcome screen, etc.                   |
| `AppSidebarPanelRight`  | 📘 Right contextual panel (e.g. search, help, problems).                   |
| `AppToolWindowBarRight` | 🔧 Fixed bar to toggle right panel tools (similar to left bar).            |
| `AppDockBottomPanel`    | 📦 Docked bottom panel for terminal, output, problems, logs. Resizable.    |
| `AppStatusBar`          | ℹ️ Persistent bottom bar showing app-wide status, encoding, git, etc.      |

---

## 🏷️ Naming Conventions

- **Instance-unique areas** use the prefix `App*` (e.g., `AppMainToolbar`),
  following [Vue style guide](https://vuejs.org/style-guide/#component-name-casing-in-templates-strongly-recommended).
- **Position-aware names** (e.g., `Left`, `Right`, `Bottom`) are used to identify placement rather than purpose.
- Toolbars attached to sidebars are named **`ToolWindowBar[Side]`** and are not collapsible or resizable.
- Docked panels (the resizable areas typically below) use the `Dock` term to reflect an interaction model (like
  JetBrains' docks).

---

## 🔌 Plugin Target Zones

If you're building a **plugin or feature**, determine where it belongs:

| Plugin Type           | Suggested Area         | Example               |
|-----------------------|------------------------|-----------------------|
| File Explorer         | `AppSidebarPanelLeft`  | `FileExplorer.vue`    |
| Git Status            | `AppSidebarPanelRight` | `GitHistory.vue`      |
| Terminal              | `AppDockBottomPanel`   | `Terminal.vue`        |
| Global Encoding Info  | `AppStatusBar`         | `StatusEncoding.vue`  |
| Toolbar Action Button | `AppMainToolbar`       | `RunScriptButton.vue` |

---

## 📐 Layout Rules

- Toolbars (`AppMainToolbar`, `AppToolWindowBarLeft`, `AppToolWindowBarRight`) are **fixed in size** and always visible.
- Sidebars (`AppSidebarPanelLeft`, `AppSidebarPanelRight`) are **resizable and collapsible** via splitter.
- Dock bottom panel (`AppDockBottomPanel`) is **vertically resizable** and can hold multiple tabs.
- Main panel (`AppMainPanel`) is **the primary working area** and should be reserved for tabbed content.

---

## 🧰 Internal Component Map

```text
AppMainToolbar                  (top fixed)
Splitter (Vertical)
├─ Splitter (Horizontal)
│  ├─ AppToolWindowBarLeft [L]  (fixed)
│  ├─ AppSidebarPanelLeft       (resizable)
│  ├─ AppMainPanel              (flex)
│  ├─ AppSidebarPanelRight      (resizable)
│  └─ AppToolWindowBarRight [R] (fixed)
└─ AppDockBottomPanel           (resizable)
AppStatusBar                    (bottom fixed)
```

```text
┌─────────────────────────────────────────────────────────────────────────────────────────────────────┐
│                    AppMainToolbar (main menu, actions, commands)                                    │
├───┬─────────────────────┬────────────────────────────────────────────────┬──────────────────────┬───┤
│   │                     │                                                │                      │   │
│ L │ AppSidebarPanelLeft │                  AppMainPanel                  │ AppSidebarPanelRight │ R │
│   │                     │         (tabs, editors, previews, etc.)        │                      │   │
│   │                     │                                                │                      │   │
│   │                     │                                                │                      │   │
│   │                     │                                                │                      │   │
│   │                     │                                                │                      │   │
│   │                     │                                                │                      │   │
│   │                     │                                                │                      │   │
│   │                     │                                                │                      │   │
│   │                     │                                                │                      │   │
│   │                     │                                                │                      │   │
│   │                     │                                                │                      │   │
│   │                     │                                                │                      │   │
│   │                     │                                                │                      │   │
│   │                     │                                                │                      │   │
│   │                     │                                                │                      │   │
│   │                     │                                                │                      │   │
├───┴─────────────────────┴────────────────────────────────────────────────┴──────────────────────┴───┤
│                                                                                                     │
│                                          AppDockBottomPanel                                         │
│                                    (logs, terminal, output, etc.)                                   │
│                                                                                                     │
├─────────────────────────────────────────────────────────────────────────────────────────────────────┤
│                                 AppStatusBar (global info, indicators)                              │
└─────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 💬 Summary

This layout structure ensures:

- A **predictable layout** for contributors.
- A **clear language** to refer to screen areas.
- **Extensibility** for future additions like floating windows or plugin-hosted panes.

If you contribute a component, please reference **which area** it is meant to appear in and respect the layout rules for
fixed/resizable zones.
