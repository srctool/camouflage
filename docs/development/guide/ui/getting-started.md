---
sidebar_label: Getting started with UI
title: Getting started with Camouflage UI
---

import {KotlinOnly, DartOnly} from '@site/src/components/LangContent';

This guide will help you get started with Camouflage UI, setting up your project with our schema-based theming system and component library.

What you'll do
- Install the library
- Set up your theme schema
- Create your first component with themed styles
- Learn how to use the theming system

Prerequisites
- Pick your language: Kotlin or Dart (use the sidebar language switcher). The content below will adapt to your selection.
- For Kotlin: JDK 17+, Gradle
- For Dart: Dart 3.x or Flutter 3.x (for UI on mobile)

## Installation

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

## Setting up your theme

Create a theme schema file that defines your design system:

<KotlinOnly>

```kotlin
// theme.kt
val themeSchema = ThemeSchema {
    colors {
        brand {
            primary("#007AFF")
            secondary("#5856D6")
        }
    }
    components {
        button {
            base {
                backgroundColor = ref("colors.brand.primary")
                padding = space(x = 16.dp, y = 8.dp)
            }
        }
    }
}

// Apply the theme
CamouflageTheme(schema = themeSchema) {
    // Your app content
}
```

</KotlinOnly>

<DartOnly>

```dart
// theme.dart
final themeSchema = ThemeSchema(
  colors: {
    'brand': {
      'primary': '#007AFF',
      'secondary': '#5856D6',
    },
  },
  components: {
    'button': {
      'base': {
        'backgroundColor': '@colors.brand.primary',
        'padding': {'x': 16.0, 'y': 8.0},
      },
    },
  },
);

// Apply the theme
class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return CamouflageTheme(
      schema: themeSchema,
      child: // Your app content,
    );
  }
}
```

</DartOnly>

## Your first component

Here's how to use a themed component:

<KotlinOnly>

```kotlin
@Composable
fun MyFirstView() {
    Button(
        onClick = { /* handle click */ },
        // Theme is automatically applied based on schema
    ) {
        Text("Hello Camouflage!")
    }
    
    // With custom theme override
    Button(
        onClick = { /* handle click */ },
        themeKey = "buttons.custom" // Reference custom button theme
    ) {
        Text("Custom Theme")
    }
}
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