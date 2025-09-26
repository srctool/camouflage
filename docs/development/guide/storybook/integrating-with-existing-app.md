---
sidebar_label: Integrating with existing app (Storybook)
title: Storybook — Integrating with an existing app
---

import {KotlinOnly, DartOnly} from '@site/src/components/LangContent';

You can add Storybook to an existing project to document and test Camouflage components as you integrate them.

Install Storybook in-place

```bash
npx storybook@latest init
```

Create stories for components you are migrating

<KotlinOnly>

```kotlin
// Pseudo-code: create a story per variant/state
@Story("Button/WithIcon")
fun WithIcon() {
    CamoButton(text = "With icon", onClick = {})
}
```

</KotlinOnly>

<DartOnly>

```dart
// Pseudo-code: create a story per variant/state
final stories = [
  Story(
    name: 'Button/WithIcon',
    builder: (_) => CamoButton(text: 'With icon', onPressed: () {}),
  ),
];
```

</DartOnly>

Tips during incremental adoption
- Mirror your app states in stories (disabled, loading, error)
- Use args/controls to enumerate props
- Keep Storybook close to your component source for easy maintenance

Next steps
- See Storybook — Getting started for more setup details
- Wire up visual regression testing in CI