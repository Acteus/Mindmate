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

## Environment Setup

### Development

To run the app in development mode with environment variables, use the following command:

```bash
flutter run --dart-define=FIREBASE_API_KEY=your_api_key \
  --dart-define=FIREBASE_PROJECT_ID=mindmate-63214 \
  --dart-define=FIREBASE_MESSAGING_SENDER_ID=your_sender_id \
  --dart-define=FIREBASE_APP_ID=your_app_id \
  --dart-define=FIREBASE_MEASUREMENT_ID=your_measurement_id \
  --dart-define=OPENAI_API_KEY=your_openai_key \
  --dart-define=ENV=development
```

### Production

For production builds, use:

```bash
flutter build apk --dart-define=FIREBASE_API_KEY=your_api_key \
  --dart-define=FIREBASE_PROJECT_ID=mindmate-63214 \
  --dart-define=FIREBASE_MESSAGING_SENDER_ID=your_sender_id \
  --dart-define=FIREBASE_APP_ID=your_app_id \
  --dart-define=FIREBASE_MEASUREMENT_ID=your_measurement_id \
  --dart-define=OPENAI_API_KEY=your_openai_key \
  --dart-define=ENV=production
```

### Using Environment Variables

Access environment variables in your code:

```dart
import 'package:your_app/config/env.dart';

void main() {
  final apiKey = Env.firebaseApiKey;
  final environment = Env.environment;
  // ... use the variables
}
```

### CI/CD Setup

For CI/CD pipelines, you can create a script to set these variables:

```bash
#!/bin/bash
# set_env.sh

export FIREBASE_API_KEY="your_api_key"
export FIREBASE_PROJECT_ID="mindmate-63214"
export FIREBASE_MESSAGING_SENDER_ID="your_sender_id"
export FIREBASE_APP_ID="your_app_id"
export FIREBASE_MEASUREMENT_ID="your_measurement_id"
export OPENAI_API_KEY="your_openai_key"
export ENV="production"
```

Then use it in your build process:

```bash
source set_env.sh
flutter build apk --dart-define-from-file=env.json
```

### Security Notes

1. Never commit sensitive environment variables to version control
2. Use different API keys for development and production
3. Consider using a secrets management service for production
4. Keep your `set_env.sh` script secure and out of version control
