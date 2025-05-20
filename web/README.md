# MindMate Web Dashboard

The React-based web dashboard for MindMate, providing a comprehensive view of your mental health journey.

## Features

- 📊 Analytics Dashboard
- 📝 Journal Management
- 📈 Mood Tracking
- 💬 AI Chat Interface
- ⚙️ User Settings

## Project Structure

```
src/
├── features/           # Feature-based modules
│   ├── dashboard/     # Analytics dashboard
│   ├── journal/       # Journal management
│   ├── mood/         # Mood tracking
│   ├── chat/         # AI chat interface
│   └── settings/     # User settings
├── components/        # Reusable components
├── services/         # API and service integrations
├── utils/           # Utility functions
└── App.tsx          # App entry point
```

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up Firebase:
   - Create a new Firebase project
   - Add your web app
   - Copy the configuration to `src/config/firebase.ts`

3. Start the development server:
   ```bash
   npm start
   ```

## Development

- Use TypeScript for type safety
- Follow React best practices
- Implement proper error handling
- Write unit tests for critical functionality

## Dependencies

- React
- Material-UI
- Firebase
- React Router
- State management (Redux/Context)

## Building for Production

1. Update version in `package.json`
2. Build the project:
   ```bash
   npm run build
   ```
3. Deploy to your hosting service of choice

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
REACT_APP_FIREBASE_MEASUREMENT_ID=your_measurement_id
```
