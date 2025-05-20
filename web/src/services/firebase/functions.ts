import { httpsCallable } from 'firebase/functions';
import { functions, FUNCTIONS } from '../../config/firebase';

export const FunctionsService = {
  // AI Chat Processing
  async processChat(userId: string, message: string) {
    const processChatFunction = httpsCallable(functions, FUNCTIONS.PROCESS_CHAT);
    try {
      const result = await processChatFunction({ userId, message });
      return result.data;
    } catch (error) {
      throw error;
    }
  },

  // Mood Analysis
  async analyzeMood(userId: string, journalEntry: string) {
    const analyzeMoodFunction = httpsCallable(functions, FUNCTIONS.ANALYZE_MOOD);
    try {
      const result = await analyzeMoodFunction({ userId, journalEntry });
      return result.data;
    } catch (error) {
      throw error;
    }
  },

  // Journal Prompt Generation
  async generateJournalPrompt(userId: string) {
    const generatePromptFunction = httpsCallable(functions, FUNCTIONS.GENERATE_JOURNAL_PROMPT);
    try {
      const result = await generatePromptFunction({ userId });
      return result.data;
    } catch (error) {
      throw error;
    }
  },

  // Send Notification
  async sendNotification(userId: string, notification: {
    title: string;
    content: string;
    type: 'reminder' | 'achievement' | 'system';
  }) {
    const sendNotificationFunction = httpsCallable(functions, FUNCTIONS.SEND_NOTIFICATION);
    try {
      const result = await sendNotificationFunction({ userId, notification });
      return result.data;
    } catch (error) {
      throw error;
    }
  }
}; 