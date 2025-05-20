class Env {
  static const String firebaseApiKey = String.fromEnvironment(
    'FIREBASE_API_KEY',
  );
  static const String firebaseProjectId = String.fromEnvironment(
    'FIREBASE_PROJECT_ID',
  );
  static const String firebaseMessagingSenderId = String.fromEnvironment(
    'FIREBASE_MESSAGING_SENDER_ID',
  );
  static const String firebaseAppId = String.fromEnvironment('FIREBASE_APP_ID');
  static const String firebaseMeasurementId = String.fromEnvironment(
    'FIREBASE_MEASUREMENT_ID',
  );

  // AI Configuration
  static const String openAiApiKey = String.fromEnvironment('OPENAI_API_KEY');
  static const String aiModel = String.fromEnvironment(
    'AI_MODEL',
    defaultValue: 'gpt-4',
  );

  // Environment
  static const String environment = String.fromEnvironment(
    'ENV',
    defaultValue: 'development',
  );
  static const String apiUrl = String.fromEnvironment(
    'API_URL',
    defaultValue: 'http://localhost:5001/mindmate-63214/us-central1',
  );
}
