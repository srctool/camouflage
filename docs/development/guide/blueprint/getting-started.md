---
sidebar_label: Getting started with Blueprint
title: Getting started with Camouflage Blueprint
---

import {KotlinOnly, DartOnly} from '@site/src/components/LangContent';

Learn how to use Camouflage Blueprint to create dynamic UIs with component references and state management.

What you'll do
- Set up Blueprint in your project
- Create your first component reference
- Manage component state with `stateOf`
- Handle component events

Prerequisites
- Git 2.40+
- For Kotlin: JDK 17+
- For Dart/Flutter: Dart 3.x or Flutter 3.x SDK

## Installation

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

## Using Components

Here's how to reference and use components with Blueprint:

<KotlinOnly>

```kotlin
@Composable
fun MyScreen() {
    // Reference a component by key
    Blueprint(componentKey = "components.card") {
        // Manage component state
        val state = stateOf {
            title = "Hello Blueprint"
            content = "This is a card component"
        }
        
        // Add event handlers
        onClick = {
            state.title = "Clicked!"
        }
    }
}
```

</KotlinOnly>

<DartOnly>

```dart
class MyScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // Reference a component by key
    return Blueprint(
      componentKey: 'components.card',
      builder: (context, component) {
        // Manage component state
        final state = stateOf(() => {
          'title': 'Hello Blueprint',
          'content': 'This is a card component',
        });
        
        // Add event handlers
        return component.copyWith(
          onClick: () {
            state.title = 'Clicked!';
          },
        );
      },
    );
  }
}
```

</DartOnly>

## State Management

Blueprint provides a powerful state management system through the `stateOf` function:

<KotlinOnly>

```kotlin
// Create and manage component state
val state = stateOf {
    // Define initial state
    title = "Initial Title"
    isExpanded = false
    
    // Optional: Define computed properties
    val displayTitle = derived { 
        if (isExpanded) title else "$title..."
    }
}

// Update state
state.isExpanded = true

// React to state changes
LaunchedEffect(state.isExpanded) {
    // Handle expanded state change
}
```

</KotlinOnly>

<DartOnly>

```dart
// Create and manage component state
final state = stateOf(() => {
  // Define initial state
  'title': 'Initial Title',
  'isExpanded': false,
  
  // Optional: Define computed properties
  'displayTitle': derived(() => 
    state.isExpanded ? state.title : '${state.title}...'
  ),
});

// Update state
state.isExpanded = true;

// React to state changes
useEffect(() {
  // Handle expanded state change
  return null;
}, [state.isExpanded]);
```

</DartOnly>

## Next Steps
- Learn about [Advanced State Management](../advanced/state-management)
- Explore [Component Composition](../advanced/composition)
- See [Blueprint — Integrating with existing app](./integrating-with-existing-app) for adopting Blueprint in existing projects