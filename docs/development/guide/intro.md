---
sidebar_label: Introduction
slug: /
---

# Introduction

Welcome to the Camouflage documentation. These docs cover concepts, components, APIs, and architecture for the Kotlin and Dart implementations.

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



## What is Camouflage?

Camouflage is a comprehensive UI development ecosystem that consists of three main packages:

### 1. Camouflage UI (`camouflage-ui`)
- An adaptable UI component design system package
- Provides a comprehensive set of customizable, cross-platform UI components
- Implements consistent design patterns across Kotlin and Dart platforms

### 2. Camouflage Blueprint (`camouflage-blueprint`)
- A powerful UI generator that creates interfaces based on schema definitions
- Supports custom component schema creation for both Kotlin and Dart/Flutter
- Specializes in generating higher-level components
- Enables developers to define their own complex component schemas
- Utilizes camouflage-ui components as building blocks
- Provides flexibility to extend and customize the schema system

### 3. Camouflage Storybook (`camouflage-storybook`)
- A native implementation of Storybook.js capabilities for Kotlin and Dart
- Built using camouflage-ui and camouflage-blueprint
- Provides component documentation, testing, and visualization features
- Supports both Camouflage UI components and custom components
- Offers the same powerful features as Storybook.js but tailored for Kotlin and Dart environments

## What Camouflage can do?

Camouflage empowers developers with its three core packages:

1. **Design System Development (`camouflage-ui`)**
   - Create consistent UI components across Kotlin and Dart platforms
   - Implement adaptable design patterns
   - Build accessible and responsive components
   - Maintain unified styling and behavior
   - Support platform-specific optimizations

2. **Schema-Driven UI Generation (`camouflage-blueprint`)**
   - Create and maintain custom component schemas
   - Define complex organism-level components and above
   - Generate UI layouts from schema definitions
   - Build reusable component templates
   - Support platform-specific customizations for Kotlin and Dart/Flutter
   - Enable component composition through schema inheritance
   - Provide extensible schema validation system

3. **Component Development and Testing (`camouflage-storybook`)**
   - Document and showcase UI components
   - Test components in isolation
   - Preview different component states
   - Support for both Camouflage and custom components
   - Interactive development environment
   - Visual regression testing
   - Component state management
   - Matches Storybook.js features in Kotlin and Dart

## How to use these docs

- Sections
  - **Guide**: High-level walkthroughs and getting started tutorials
    - Introduction to Camouflage ecosystem
    - Setting up your development environment
    - Basic usage and integration patterns
  
  - **Components**: Comprehensive component documentation
    - Design guidelines and principles
    - Component specifications
      - Props and parameters
      - States and variants
      - Accessibility requirements
    - Component schemas and definitions
    - Usage examples and best practices
    - Implementation considerations
    
  - **API**: Technical reference and implementation details
    - Blueprint
      - Custom schema development guide
      - Schema composition and inheritance
      - Component schema API for Kotlin and Dart/Flutter
      - Higher-level component patterns (organisms+)
      - Integration with existing components
      - Schema validation and extension APIs
      - Best practices for custom schemas
    - Storybook
      - Configuration and setup
      - Story writing API
      - Testing utilities
      - Add-ons and extensions
    - Integration APIs
      - Cross-package integration
      - Platform-specific considerations
- Language preference
  - Use the Language switcher at the top of the docs sidebar to pick Kotlin or Dart.
  - Your choice is remembered across pages and sessions.
  - Page content adapts to your selection without showing language tabs. Tabs are reserved for other distinctions later (e.g., platform, runtime).
- Getting started
  - From the homepage, use the "Get Started with" split button to jump into the Guide.

### Documentation Development
- Node.js 20+
- Documentation setup:
  ```bash
  cd docs/
  npm install
  npm run start  # for local development
  ```

## Developer notes
### Language-aware theming
- The site's primary color adapts to your chosen language:
  - Kotlin: Purple theme
  - Dart: Blue theme
- Theme changes affect:
  - Sidebar navigation
  - Homepage selector
  - Code snippets
  - Interactive examples

### Documentation Standards
- All code examples should:
  - Be thoroughly tested and verified
  - Include proper error handling
  - Follow platform-specific conventions
  - Have clear comments explaining complex logic
  - Be accessibility-compliant

### Contributing
- Follow the language-specific style guides
- Ensure all examples are up to date with the latest API changes
- Test documentation changes locally before submitting
- Include relevant tags for better searchability
- Cross-reference related documentation when applicableflage documentation. These docs cover concepts, components, APIs, and architecture for the Kotlin and Dart implementations.