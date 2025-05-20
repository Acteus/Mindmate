# MindMate - Mental Health Companion

MindMate is a cross-platform mental health companion application that helps users track their mood, practice mindfulness, and connect with mental health resources.

## Project Structure

```
mindmate/
├── mobile/           # Flutter mobile app
├── web/             # React web application
├── functions/       # Firebase Cloud Functions
└── docs/           # Project documentation
    └── GUIDE.md    # Detailed development guide
```

## Documentation

- [Development Guide](./docs/GUIDE.md) - Comprehensive guide for setting up and developing the project
- [Mobile App README](./mobile/README.md) - Mobile app specific setup and development
- [Web App README](./web/README.md) - Web app specific setup and development

## Prerequisites

- Node.js (v16 or higher)
- Flutter SDK (latest stable version)
- Firebase CLI
- Git

## Quick Start

1. Clone the repository:
   ```bash
   git clone [repository-url]
   cd mindmate
   ```

2. Install dependencies:
   ```bash
   # Web app
   cd web
   npm install

   # Mobile app
   cd ../mobile
   flutter pub get

   # Cloud Functions
   cd ../functions
   npm install
   ```

3. Set up environment variables:
   - Copy `web/.env.example` to `web/.env` and fill in your Firebase config
   - Follow mobile app README for Flutter environment setup

4. Start development:
   ```bash
   # Web app
   cd web
   npm start

   # Mobile app
   cd mobile
   flutter run
   ```

## Features

- 📝 Journal System
- 📊 Mood Tracking
- 💬 AI Chat Companion
- 🔔 Smart Notifications
- 🔐 User Authentication
- 📱 Cross-platform Support

## Tech Stack

- **Mobile**: Flutter
- **Web**: React.js with TypeScript
- **Backend**: Firebase
  - Authentication
  - Firestore Database
  - Cloud Functions
  - Cloud Storage
- **AI Integration**: OpenAI API

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, please open an issue in the GitHub repository or contact the development team. 