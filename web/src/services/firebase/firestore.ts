import { 
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  Timestamp
} from 'firebase/firestore';
import { db, COLLECTIONS } from '../../config/firebase';
import { JournalEntry, Mood, ChatMessage, Notification } from '../../shared/types';

export const FirestoreService = {
  // Journal Operations
  async createJournalEntry(userId: string, entry: Omit<JournalEntry, 'id'>) {
    const docRef = doc(collection(db, COLLECTIONS.JOURNALS, userId, 'entries'));
    await setDoc(docRef, {
      ...entry,
      id: docRef.id,
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now()
    });
    return docRef.id;
  },

  async getJournalEntries(userId: string) {
    const q = query(
      collection(db, COLLECTIONS.JOURNALS, userId, 'entries'),
      orderBy('createdAt', 'desc')
    );
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as JournalEntry));
  },

  // Mood Operations
  async createMoodEntry(userId: string, mood: Omit<Mood, 'id'>) {
    const docRef = doc(collection(db, COLLECTIONS.MOODS, userId, 'entries'));
    await setDoc(docRef, {
      ...mood,
      id: docRef.id,
      createdAt: Timestamp.now()
    });
    return docRef.id;
  },

  async getMoodHistory(userId: string) {
    const q = query(
      collection(db, COLLECTIONS.MOODS, userId, 'entries'),
      orderBy('createdAt', 'desc')
    );
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Mood));
  },

  // Chat Operations
  async createChatMessage(userId: string, message: Omit<ChatMessage, 'id'>) {
    const docRef = doc(collection(db, COLLECTIONS.CHATS, userId, 'messages'));
    await setDoc(docRef, {
      ...message,
      id: docRef.id,
      createdAt: Timestamp.now()
    });
    return docRef.id;
  },

  async getChatHistory(userId: string) {
    const q = query(
      collection(db, COLLECTIONS.CHATS, userId, 'messages'),
      orderBy('createdAt', 'asc')
    );
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as ChatMessage));
  },

  // Notification Operations
  async createNotification(userId: string, notification: Omit<Notification, 'id'>) {
    const docRef = doc(collection(db, COLLECTIONS.NOTIFICATIONS, userId, 'items'));
    await setDoc(docRef, {
      ...notification,
      id: docRef.id,
      createdAt: Timestamp.now()
    });
    return docRef.id;
  },

  async getNotifications(userId: string) {
    const q = query(
      collection(db, COLLECTIONS.NOTIFICATIONS, userId, 'items'),
      orderBy('createdAt', 'desc')
    );
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Notification));
  }
}; 