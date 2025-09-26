---
sidebar_label: Getting started with UI
title: Getting started with Camouflage UI
---

import {KotlinOnly, DartOnly} from '@site/src/components/LangContent';

This page helps you get up and running with Camouflage UI components in a new project.

What you'll do
- Install the library
- Render your first Camouflage UI view
- Learn where to find components and examples

Prerequisites
- Pick your language: Kotlin or Dart (use the sidebar language switcher). The content below will adapt to your selection.
- For Kotlin: JDK 17+, Gradle
- For Dart: Dart 3.x or Flutter 3.x (for UI on mobile)

Install

<KotlinOnly>

```kotlin
// build.gradle.kts (module)
dependencies {
    // Replace with the actual group/artifact once published
    implementation("org.srctool:camouflage-ui:<latest>")
}
```

</KotlinOnly>

<DartOnly>

```bash
# In your package
dart pub add camouflage_ui
# or for Flutter
flutter pub add camouflage_ui
```

</DartOnly>

Your first view

<KotlinOnly>

```kotlin
// Pseudo-code example; replace with real API once available
fun App() {
    CamoButton(text = "Hello Camouflage", onClick = { /* TODO */ })
}
```

</KotlinOnly>

<DartOnly>

```dart
// Pseudo-code example; replace with real API once available
Widget build(BuildContext context) {
  return CamoButton(text: 'Hello Camouflage', onPressed: () {});
}
```

</DartOnly>

Next steps
- Browse Components: /components
- See integration guidance: UI — Integrating with existing app