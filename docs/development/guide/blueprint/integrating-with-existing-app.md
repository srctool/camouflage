---
sidebar_label: Integrating Blueprint with an existing app
title: Integrating Camouflage Blueprint with an existing app
---

import {KotlinOnly, DartOnly} from '@site/src/components/LangContent';

Blueprints can be adopted incrementally. Use them as reference implementations and copy pieces into your existing app.

Approaches
- Use the blueprint as a playground to try components, then port code
- Copy specific modules (navigation, theming, component setup)
- Keep the blueprint in a separate folder and compare diffs over time

Copy key pieces

<KotlinOnly>

```bash
# Example: bringing over a module (adjust paths to your project)
cp -R blueprint/app/src/main/kotlin/com/example/ui src/main/kotlin/com/yourapp/ui
```

</KotlinOnly>

<DartOnly>

```bash
# Example: bringing over a feature (adjust paths to your project)
cp -R blueprint/lib/features/button lib/features/button
```

</DartOnly>

Wire up dependencies
- Ensure your Gradle/pubspec dependencies match the blueprint’s for the copied modules
- Align theming and routing so components behave consistently

Validation
- Add or reuse Storybook stories from the blueprint to validate in isolation
- Run your app and compare behavior with the blueprint demo

Next steps
- Explore UI — Integrating with existing app for component-level adoption
- Use Storybook to validate UI states during migration