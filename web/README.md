# MindMate Web Application

The React-based web dashboard for MindMate, your mental health companion.

## Features

- 📝 Journal System
- 📊 Mood Tracking
- 💬 AI Chat Companion
- 🔔 Smart Notifications
- 📱 Responsive Design

## Tech Stack

- React.js with TypeScript
- Firebase Services
  - Authentication
  - Firestore
  - Cloud Functions
  - Storage
- Material-UI Components
- React Query for Data Fetching

## Project Structure

```
src/
├── components/      # Reusable UI components
├── features/        # Feature-based modules
│   ├── auth/       # Authentication
│   ├── journal/    # Journal feature
│   ├── mood/       # Mood tracking
│   ├── chat/       # AI chat
│   └── settings/   # User settings
├── services/       # API and Firebase services
├── hooks/          # Custom React hooks
├── utils/          # Utility functions
├── types/          # TypeScript definitions
└── App.tsx         # Root component
```

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up environment variables:
   ```bash
   cp .env.example .env
   ```
   Fill in your Firebase configuration in `.env`

3. Start development server:
   ```bash
   npm start
   ```

## Development

- Use feature-based architecture
- Follow TypeScript best practices
- Implement proper error handling
- Write unit tests for critical functionality

## Building for Production

1. Build the application:
   ```bash
   npm run build
   ```

2. Test the production build:
   ```bash
   npm run serve
   ```

## Environment Variables

Required environment variables:
```
REACT_APP_FIREBASE_API_KEY=
REACT_APP_FIREBASE_AUTH_DOMAIN=
REACT_APP_FIREBASE_PROJECT_ID=
REACT_APP_FIREBASE_STORAGE_BUCKET=
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=
REACT_APP_FIREBASE_APP_ID=
REACT_APP_FIREBASE_MEASUREMENT_ID=
REACT_APP_OPENAI_API_KEY=
REACT_APP_AI_MODEL=
REACT_APP_ENV=
REACT_APP_API_URL=
```

## Testing

```bash
# Run unit tests
npm test

# Run e2e tests
npm run test:e2e
```

## Contributing

1. Follow the coding standards
2. Write tests for new features
3. Update documentation
4. Submit pull requests

## License

This project is licensed under the MIT License.
