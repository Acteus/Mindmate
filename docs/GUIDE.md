# MindMate Development Guide

## Project Overview

MindMate is a mental health companion application with both mobile (Flutter) and web (React) interfaces, powered by Firebase backend services.

## Tech Stack

- **Frontend**:
  - Mobile: Flutter
  - Web: React.js with TypeScript
- **Backend**: Firebase
  - Authentication
  - Firestore Database
  - Cloud Functions
  - Cloud Storage
  - Cloud Messaging
- **AI Integration**: OpenAI API (placeholder)

## Getting Started

### Prerequisites

1. **Development Environment**:
   - Node.js (v20 or higher)
   - Flutter SDK
   - Firebase CLI
   - Git

2. **Firebase Setup**:
   ```bash
   # Install Firebase CLI
   npm install -g firebase-tools

   # Login to Firebase
   firebase login

   # Initialize Firebase in the project
   firebase init
   ```

3. **Environment Variables**:
   Create `.env` files in both `web` and `mobile` directories with:
   ```
   # Web (.env)
   REACT_APP_FIREBASE_API_KEY=your_api_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
   REACT_APP_FIREBASE_PROJECT_ID=mindmate-63214
   REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   REACT_APP_FIREBASE_APP_ID=your_app_id
   REACT_APP_FIREBASE_MEASUREMENT_ID=your_measurement_id
   ```

### Project Structure

```
mindmate/
├── mobile/                 # Flutter mobile app
│   ├── lib/
│   │   ├── features/      # Feature-based modules
│   │   ├── services/      # Firebase services
│   │   └── main.dart      # App entry point
│   └── pubspec.yaml       # Flutter dependencies
│
├── web/                   # React web dashboard
│   ├── src/
│   │   ├── features/      # Feature-based modules
│   │   ├── services/      # Firebase services
│   │   └── App.tsx        # App entry point
│   └── package.json       # Node dependencies
│
├── functions/             # Firebase Cloud Functions
│   ├── src/
│   │   └── index.ts       # Cloud Functions
│   └── package.json       # Function dependencies
│
├── shared/               # Shared utilities and types
│   ├── config/          # Firebase configuration
│   └── types/           # TypeScript interfaces
│
└── docs/                # Documentation
```

### Firebase Services

1. **Authentication**:
   - Email/Password
   - Google Sign-in
   - Anonymous auth

2. **Firestore Collections**:
   ```
   /users/{userId}
   /journals/{userId}/entries/{entryId}
   /moods/{userId}/entries/{entryId}
   /chats/{userId}/messages/{messageId}
   /notifications/{userId}/items/{notificationId}
   ```

3. **Cloud Functions**:
   - `processChat`: AI chat processing
   - `analyzeMood`: Mood analysis
   - `generateJournalPrompt`: Journal prompts
   - `sendNotification`: Notification handling

4. **Storage**:
   - User profile pictures
   - Journal attachments
   - Mood tracking images

### Development Workflow

1. **Setup**:
   ```bash
   # Clone the repository
   git clone [repository-url]
   cd mindmate

   # Install web dependencies
   cd web
   npm install

   # Install mobile dependencies
   cd ../mobile
   flutter pub get

   # Install function dependencies
   cd ../functions
   npm install
   ```

2. **Running the Project**:
   ```bash
   # Web development
   cd web
   npm start

   # Mobile development
   cd mobile
   flutter run

   # Functions development
   cd functions
   npm run serve
   ```

3. **Deployment**:
   ```bash
   # Deploy all Firebase services
   firebase deploy

   # Deploy specific services
   firebase deploy --only functions
   firebase deploy --only hosting
   firebase deploy --only firestore:rules
   ```

### Security Rules

1. **Firestore Rules**:
   - All collections require authentication
   - Users can only access their own data
   - Nested collections follow parent access rules

2. **Storage Rules**:
   - Profile pictures: Public read, owner write
   - Journal attachments: Owner only
   - File size and type restrictions

### Best Practices

1. **Code Organization**:
   - Use feature-based architecture
   - Keep shared code in `shared` directory
   - Follow TypeScript best practices

2. **Security**:
   - Never commit `.env` files
   - Use environment variables
   - Follow Firebase security rules

3. **Testing**:
   - Write unit tests for critical functions
   - Test security rules
   - Test Cloud Functions locally

### Common Issues and Solutions

1. **TypeScript Errors**:
   - Install required type definitions
   - Check import paths
   - Update tsconfig.json

2. **Firebase Errors**:
   - Check Firebase console
   - Verify environment variables
   - Check security rules

3. **Deployment Issues**:
   - Check Firebase CLI version
   - Verify project configuration
   - Check function logs

### Contributing

1. Create a feature branch
2. Follow coding standards
3. Write tests
4. Submit pull request

### Resources

- [Firebase Documentation](https://firebase.google.com/docs)
- [Flutter Documentation](https://flutter.dev/docs)
- [React Documentation](https://reactjs.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs) 