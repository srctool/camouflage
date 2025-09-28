---
sidebar_label: Component Name
title: Component Name
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Component Name

Brief description of the component and its primary use case.

<Tabs>
<TabItem value="design" label="Design Guidelines" default>

## Design Guidelines

### Usage
Explain when and how to use this component.

### Principles
- List key design principles
- That guide the use of
- This component

### Variants
Describe different variants of the component and when to use each.

### Best Practices
- Do's and don'ts
- Accessibility considerations
- Layout guidelines
- Responsive behavior

### Examples
Visual examples of the component in different contexts.

</TabItem>
<TabItem value="specs" label="Component Specifications">

## Component Specifications

### Properties
| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `prop1` | `type` | Yes/No | `default` | Description |
| `prop2` | `type` | Yes/No | `default` | Description |

### States
Describe different states the component can be in (hover, active, disabled, etc.)

### Events
| Event | Description | Parameters |
|-------|-------------|------------|
| `onChange` | Description | `(value: type) => void` |
| `onFocus` | Description | `(event: Event) => void` |

### CSS Classes
```css
.component-root {}
.component-variant {}
.component-state {}
```

### Platform-Specific Notes
<Tabs>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Kotlin-specific implementation details
```

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Dart-specific implementation details
```

</TabItem>
</Tabs>

</TabItem>
<TabItem value="schema" label="Blueprint Schema">

## Blueprint Schema

### Base Schema
```json
{
  "type": "component",
  "name": "ComponentName",
  "properties": {
    // Component properties
  },
  "variants": {
    // Variant definitions
  }
}
```

### Example Usage
```json
{
  "type": "ComponentName",
  "props": {
    "prop1": "value1",
    "prop2": "value2"
  }
}
```

### Schema Extensions
Describe any available schema extensions or customizations.

### Composition Examples
Show how to compose this component with others using Blueprint.

</TabItem>
<TabItem value="playground" label="Playground">

## Interactive Playground

:::note
This playground allows you to experiment with the component properties and see the results in real-time.
:::

### Basic Usage
Interactive example with common properties.

### Advanced Configuration
Interactive example with all available properties.

### Custom Styling
Interactive example focusing on styling options.

</TabItem>
</Tabs>

## Related Components
- Link to related component 1
- Link to related component 2
- Link to related component 3

## Additional Resources
- Link to relevant design system guidelines
- Link to external documentation
- Link to example implementations