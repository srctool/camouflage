---
sidebar_label: Introduction
slug: /
---

# Introduction

Welcome to the Camouflage documentation. These docs cover concepts, components, APIs, and architecture for the Kotlin and Dart implementations.

## What is Camouflage?

Camouflage is a comprehensive UI development ecosystem that unifies UI development across Kotlin and Dart platforms through three powerful, interconnected packages:

### 1. Camouflage UI (camouflage-ui)

At its core, Camouflage UI is a modern design system implementation that provides:

- **Cross-Platform Components**: A unified set of UI components that maintain consistency across Kotlin (KMP/CMP) and Flutter platforms
- **Schema-Based Theme Mapping**: A unique approach to component theming:
  - Components reference theme keys defined in a schema
  - Schema acts as a flexible mapping layer between design system and components
  - Define your design system properties and connect them via schema keys
  - No rigid theme interfaces or predefined structures
  - Complete freedom to map any design token to any component property
  - Example: Map 'button.primary.background' to your design system's actual color token
- **Platform-Specific Optimizations**: Native performance and behavior while maintaining a consistent API
- **Accessibility First**: Built-in support for screen readers, keyboard navigation, and WCAG guidelines
- **Dynamic Theming**: Runtime theme updates with built-in support for:
  - Dark/light mode switching
  - Multiple brand themes
  - Custom theme variations
  - Design system versioning

### 2. Camouflage Blueprint (camouflage-blueprint)

Blueprint is our innovative UI generation engine that enables dynamic component composition and state management:

- **Component Reference System**: 
  - Locate and use components via key-based referencing
  - Access both built-in and custom components
  - Type-safe component resolution

- **State Management**:
  - Built-in `stateOf` function for component state manipulation
  - Declarative state updates through properties
  - Reactive state management integrated with platform UI (Composable/Widget)

- **Event Handling**:
  - Add event listeners through component properties
  - Direct integration with component state
  - Platform-native event support

Key features:
- Dynamic component composition
- Integrated state management
- Type-safe component referencing
- Hot-reload compatible development
- Platform-specific optimizations

### 3. Camouflage Storybook (camouflage-storybook)

A native implementation of Storybook for Kotlin and Dart that provides:

- **Component Development Environment**: Isolated environment for building and testing UI components
- **Interactive Documentation**: Live component examples with editable props
- **Visual Testing Tools**: Built-in support for visual regression testing
- **Cross-Platform Preview**: Test components across different platforms and states
- **Addon System**: Extensible architecture supporting custom addons

Unique capabilities:
- Native performance without JavaScript runtime
- Platform-specific testing tools
- Integration with camouflage-ui and blueprint
- Support for both Camouflage and custom components
- Hot-reload support for rapid development

## Why Camouflage?

Camouflage solves several critical challenges in cross-platform UI development:

1. **Design System Adaptability**
   - Schema-driven theme mapping system
   - Direct mapping to your design tokens
   - Complete theme customization through schema
   - Platform-specific overrides when needed
   - Dark mode support built-in

2. **Consistency at Scale**
   - Single source of truth for design system implementation
   - Unified component API across platforms
   - Consistent behavior and accessibility
   - Design-to-development workflow alignment

3. **Developer Experience**
   - Familiar patterns for both Kotlin and Flutter developers
   - Rich development tools and documentation
   - Rapid prototyping with Blueprint
   - Comprehensive testing environment

3. **Performance**
   - Native implementation for each platform
   - Optimized rendering and updates
   - No runtime overhead
   - Efficient state management

4. **Maintenance**
   - Shared component logic
   - Centralized design system updates
   - Automated testing and documentation
   - Version-controlled UI definitions

## Prerequisites

### Development Environment
- Git 2.40+
- IDE options:
  <KotlinOnly>
  - IntelliJ IDEA or Android Studio
  </KotlinOnly>
  <DartOnly>
  - VS Code, IntelliJ IDEA, or Android Studio
  </DartOnly>

### For Components (camouflage-ui)
<KotlinOnly>
- Kotlin development:
  - JDK 17+
  - Kotlin toolchain
  - Gradle (./gradlew provided)
</KotlinOnly>
<DartOnly>
- Dart development:
  - Dart 3.x or Flutter 3.x SDK
  - Dart/Flutter development tools
</DartOnly>

### For Blueprint and Storybook Integration
<KotlinOnly>
- Kotlin Multiplatform (KMP/CMP) setup
- Understanding of:
  - Kotlin serialization
  - KMP component architecture
  - Platform-specific UI considerations
  - Schema-based development patterns
</KotlinOnly>
<DartOnly>
- Flutter development environment
- Understanding of:
  - Flutter widget system
  - Build context and state management
  - Platform-specific UI considerations
  - Schema-based development patterns
</DartOnly>

### Common requirements
- Understanding of:
  - JSON Schema and data modeling
  - Component composition patterns
  - UI state management
  - Atomic design principles

## Documentation Structure

Our documentation is organized into three main sections:

### Guide
High-level walkthroughs and getting started tutorials covering:
- Introduction to Camouflage ecosystem
- Setting up your development environment
- Basic usage and integration patterns

### Components
Comprehensive component documentation including:
- Design guidelines and principles
- Component specifications and APIs
- Usage examples and best practices
- Implementation considerations

### API Reference
Technical details and implementation specifics for:
- Blueprint schema development
- Storybook configuration
- Integration patterns
- Platform-specific considerations

Use the Language switcher at the top of the docs sidebar to toggle between Kotlin and Dart-specific content.