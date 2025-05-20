// User related types
export interface User {
  id: string;
  email: string;
  displayName: string;
  createdAt: Date;
}

// Journal related types
export interface JournalEntry {
  id: string;
  userId: string;
  content: string;
  mood?: Mood;
  createdAt: Date;
  updatedAt: Date;
}

// Mood tracking types
export interface Mood {
  id: string;
  userId: string;
  value: number; // 1-5 scale
  note?: string;
  createdAt: Date;
}

// AI Chat types
export interface ChatMessage {
  id: string;
  userId: string;
  content: string;
  isAI: boolean;
  createdAt: Date;
}

// Notification types
export interface Notification {
  id: string;
  userId: string;
  title: string;
  content: string;
  type: 'reminder' | 'achievement' | 'system';
  read: boolean;
  createdAt: Date;
} 