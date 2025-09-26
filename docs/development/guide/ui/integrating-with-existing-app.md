---
sidebar_label: Integrating UI with existing app
title: Integrating Camouflage UI with an existing app
---

import {KotlinOnly, DartOnly} from '@site/src/components/LangContent';

This guide shows how to add Camouflage UI to an existing application.

Scenarios
- Adopt a single component (e.g., Button) alongside your current UI toolkit
- Migrate a screen gradually
- Run Camouflage UI next to legacy code during transition

Install the UI package if you haven't yet

<KotlinOnly>

```kotlin
// build.gradle.kts (module)
dependencies {
    implementation("org.srctool:camouflage-ui:<latest>")
}
```

</KotlinOnly>

<DartOnly>

```bash
flutter pub add camouflage_ui
# or
dart pub add camouflage_ui
```

</DartOnly>

Add a single component

<KotlinOnly>

```kotlin
// Pseudo-code: render a component inside your existing view hierarchy
class LegacyScreen : SomeLegacyView() {
    override fun render() {
        // ... legacy UI ...
        CamoButton(text = "Do action", onClick = ::onAction)
    }
}
```

</KotlinOnly>

<DartOnly>

```dart
// Pseudo-code: use a Camouflage widget inside an existing widget tree
class LegacyScreen extends StatelessWidget {
  const LegacyScreen({super.key});
  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        // ... legacy UI ...
        CamoButton(text: 'Do action', onPressed: onAction),
      ],
    );
  }
}
```

</DartOnly>

Tips
- Start with leaf components (Buttons, Badges) before complex layouts
- Keep styles consistent by relying on the site’s primary color (which reflects your selected language)
- Add visual tests in Storybook while integrating (see Storybook pages)

Next steps
- See UI — Getting started for a clean-slate setup
- Explore component APIs under /components