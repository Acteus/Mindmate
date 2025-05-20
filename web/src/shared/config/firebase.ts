import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getFunctions } from 'firebase/functions';
import { getStorage } from 'firebase/storage';

// Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: "mindmate-63214", // Your project ID from firebase init
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const functions = getFunctions(app);
export const storage = getStorage(app);

// Firestore collections
export const COLLECTIONS = {
  USERS: 'users',
  JOURNALS: 'journals',
  MOODS: 'moods',
  CHATS: 'chats',
  NOTIFICATIONS: 'notifications',
} as const;

// Cloud Functions endpoints
export const FUNCTIONS = {
  ANALYZE_MOOD: 'analyzeMood',
  GENERATE_JOURNAL_PROMPT: 'generateJournalPrompt',
  PROCESS_CHAT: 'processChat',
  SEND_NOTIFICATION: 'sendNotification',
} as const;

// AI Configuration (placeholder)
export const aiConfig = {
  apiKey: "YOUR_AI_API_KEY",
  model: "gpt-4", // or your preferred model
  endpoint: "https://api.openai.com/v1/chat/completions" // or your preferred endpoint
}; 