---
sidebar_label: Introduction
slug: /
---


# Introduction

Welcome to the Camouflage documentation. These docs cover concepts, components, APIs, and architecture for the Kotlin and Dart implementations.

## How to use these docs

- Sections
  - Guide: high-level walkthroughs, tutorials, and patterns to get productive quickly.
  - Components: a catalog of UI components with props/parameters and usage examples.
  - API: low-level references for public APIs exposed by the libraries.
  - Architecture: design decisions, internal diagrams, and cross-platform considerations.
- Language preference
  - Use the Language switcher at the top of the docs sidebar to pick Kotlin or Dart.
  - Your choice is remembered across pages and sessions.
  - Page content adapts to your selection without showing language tabs. Tabs are reserved for other distinctions later (e.g., platform, runtime).
- Getting started
  - From the homepage, use the "Get Started with" split button to jump into the Guide.


## Prerequisites

- General
  - Git 2.40+
  - A modern editor/IDE (IntelliJ IDEA / Android Studio for Kotlin, VS Code/IntelliJ/Android Studio for Dart/Flutter)
- For reading/building the docs site (optional for library users)
  - Node.js 20+
  - In docs/: npm install then npm run start to run locally
- For Kotlin examples and development
  - JDK 17+
  - Kotlin toolchain and Gradle (./gradlew is provided)
  - Build/tests: ./gradlew build test
- For Dart examples and development
  - Dart 3.x or Flutter 3.x SDK on PATH
  - Format/lint/test: dart format . && dart analyze && dart test (or flutter test)

## Developer notes

- Language-aware theming
  - The site’s primary color, the sidebar switcher, and the homepage selector adapt to the chosen language (Kotlin purple or Dart blue).
- Writing examples
  - Use the language-aware wrappers to separate content without tabs: `import {KotlinOnly, DartOnly} from '@site/src/components/LangContent';` then wrap blocks with <KotlinOnly>…</KotlinOnly> or <DartOnly>…</DartOnly>.
  - Optionally prefix headings inside those blocks with the language for quick scanning (e.g., "Kotlin — Installing", "Dart — Installing").
  - Avoid angle-bracket placeholders like `<type>` in MDX; wrap such text in backticks to prevent MDX parse errors.
- Contributing
  - Documentation lives under docs/development/* and each section has a manual sidebars.ts.
  - See /contributing for how to report bugs, contribute code, open PRs, and testing guidelines.
- Useful links
  - Guide index: /guide
  - Components: /components
  - API: /api
  - Architecture: /architecture
