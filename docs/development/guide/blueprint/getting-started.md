---
sidebar_label: Getting started (Blueprint)
title: Blueprint — Getting started
---

import {KotlinOnly, DartOnly} from '@site/src/components/LangContent';

Blueprints are opinionated templates to scaffold Camouflage-based apps quickly.

What you'll do
- Create a new project from a Camouflage blueprint
- Run and verify the template

Prerequisites
- Git 2.40+
- For Kotlin: JDK 17+
- For Dart/Flutter: Dart 3.x or Flutter 3.x SDK

Generate a project

<KotlinOnly>

```bash
# Example: using a template repo (replace with actual)
git clone https://github.com/srctool/camouflage-kotlin-blueprint my-app
cd my-app
./gradlew run
```

</KotlinOnly>

<DartOnly>

```bash
# Example: using a template repo (replace with actual)
git clone https://github.com/srctool/camouflage-dart-blueprint my_app
cd my_app
flutter run # or: dart run
```

</DartOnly>

Customize
- Update package names, app name, and theming
- Swap or add Camouflage components under /components

Next steps
- See Blueprint — Integrating with existing app for adopting pieces of a blueprint in an existing codebase
- Continue in Guide → UI for component-level details