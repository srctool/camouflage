---
sidebar_label: Getting started (Storybook)
title: Storybook — Getting started
---

import {KotlinOnly, DartOnly} from '@site/src/components/LangContent';

Use Storybook to develop and visually test Camouflage UI components in isolation.

What you'll do
- Install and initialize Storybook
- Add your first Camouflage story
- Run Storybook locally

Prerequisites
- UI package installed (see UI — Getting started)
- Node.js 20+ for Storybook tooling

Install Storybook

```bash
# From your app or component workspace
npx storybook@latest init
```

Add a story that renders a Camouflage component

<KotlinOnly>

```kotlin
// Example: Button.stories.kt (pseudo-code)
@Story("Button/Primary")
fun Primary() {
    CamoButton(text = "Primary", onClick = {})
}
```

</KotlinOnly>

<DartOnly>

```dart
// Example: button.stories.dart (pseudo-code)
import 'package:storybook_flutter/storybook_flutter.dart';

final stories = [
  Story(
    name: 'Button/Primary',
    builder: (_) => CamoButton(text: 'Primary', onPressed: () {}),
  ),
];
```

</DartOnly>

Run Storybook

```bash
npm run storybook
```

Next steps
- Add controls/args to stories to cover different states
- Integrate with CI to capture visual regressions