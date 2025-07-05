# Shimp

> A lightweight, blazing-fast IDE for shell scripting.

Shimp is a modern IDE designed specifically for writing, organizing, and managing shell scripts (Bash, sh, Zsh, etc.).
While most editors treat shell scripting as a second-class citizen, Shimp puts it front and center — offering native
tools that make scripting as pleasant and powerful as coding in any modern language.

This is a work-in-progress, but the vision is clear.

---

## 🧠 Why Shimp?

Because scripting deserves more than just syntax highlighting.

Shimp aims to solve real-world frustrations:

* Tired of manually tracking sourced files?
* Want a smarter view of your modular script structure?
* Need contextual help based on your actual shell?
* Looking for rapid iteration without leaving your workspace?

Yeah, us too.

---

## 🛠️ Core Features (WIP)

* Syntax-aware script editor (Bash, sh, Zsh, etc.)
* Integrated terminal and output viewer (with ANSI color support)
* File explorer with inline previews
* One-click execution of scripts with environment isolation
* Contextual hints and documentation lookup
* Shell-aware highlighting and autocomplete
* Smart source resolution and inline code tracing
* Draft saving and recovery
* Intelligent script bundler (resolves `source` and `. "..."` across shells)
* (Coming soon) Plugin system for extending Shimp

---

## ⚡ Performance

Built with [Tauri](https://tauri.app) and [Vue 3](https://vuejs.org), Shimp runs as a lightweight native desktop app. It
leverages Rust under the hood for fast indexing, parsing, and future extensibility — but we’re not married to it.
Performance comes first; tooling may evolve.

---

## 🚧 Status

This project is at the earliest stage. No functional code exists yet — just a strong direction, deep motivation, and the
stubbornness to make scripting feel first-class again.

---

## 🐚 Focused on Shell — Not Just Bash

From `. "..."` in POSIX `sh` to `source` in Bash and advanced completion in `Zsh`, Shimp respects each shell’s nuances.
You can even define the target shell per script, enabling precise tooling and linting.

---

## 📎 Modular Script Design

Split your logic across clean files, and Shimp will:

* Resolve dependencies automatically
* Inline them intelligently on build/export
* Avoid duplicates
* Retain correct formatting and indentation

Think of it like a makefile for shell, without the pain.

---

## 🧩 Extensible by Design

Planned plugin support will allow adding:

* Custom linters
* New shell interpreters
* Formatters and snippets
* Live preview helpers (e.g., regex testing, output visualization)

---

## 🧪 Inspiration

We love what JetBrains has to offer [BashSupport Pro](https://www.bashsupport.com). But Shimp is independent, open,
native, and aims to go even further in script management.

---

## 👀 Stay Tuned

Follow development and updates right here. Early builds will be announced in this repository. Contributions, ideas, and
questions are welcome.

---

*Built by someone who got tired of grepping dozens of sourced files.*
