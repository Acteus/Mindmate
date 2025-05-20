# MindMate Mobile App

The Flutter-based mobile application for MindMate, your mental health companion.

## Features

- 📝 Journal System
- 📊 Mood Tracking
- 💬 AI Chat Companion
- 🔔 Smart Notifications

## Project Structure

```
lib/
├── features/           # Feature-based modules
│   ├── journal/       # Journal feature
│   ├── mood/         # Mood tracking
│   ├── chat/         # AI chat
│   └── notifications/ # Notifications
├── shared/           # Shared components and utilities
├── services/         # API and service integrations
└── main.dart         # App entry point
```

## Getting Started

1. Install Flutter dependencies:
   ```bash
   flutter pub get
   ```

2. Set up Firebase:
   - Create a new Firebase project
   - Add your Android/iOS apps
   - Download and add the configuration files
   - Enable required Firebase services

3. Run the app:
   ```bash
   flutter run
   ```

## Development

- Use feature-based architecture
- Follow Flutter best practices
- Implement proper error handling
- Write unit tests for critical functionality

## Dependencies

- Firebase packages
- State management (Provider/Bloc)
- UI components
- Local storage

## Building for Production

1. Update version in `pubspec.yaml`
2. Run build command:
   ```bash
   flutter build apk  # for Android
   flutter build ios  # for iOS
   ```
