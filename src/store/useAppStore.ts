import { create } from 'zustand';

export interface UserProfile {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  keepLoggedIn: boolean;
  dob?: string;
}

interface AppState {
  // Authentication & Session
  isLoggedIn: boolean;
  user: UserProfile;
  
  // Security
  faceId: boolean;
  fingerprint: boolean;
  
  // Appearance
  darkMode: boolean;
  
  // Notifications
  pushNotifications: boolean;
  paymentReminders: boolean;
  emailNotifications: boolean;
  smsNotifications: boolean;

  // Actions
  login: (user: UserProfile) => void;
  logout: () => void;
  updateUser: (userUpdates: Partial<UserProfile>) => void;
  setFaceId: (enabled: boolean) => void;
  setFingerprint: (enabled: boolean) => void;
  setDarkMode: (enabled: boolean) => void;
  setPushNotifications: (enabled: boolean) => void;
  setPaymentReminders: (enabled: boolean) => void;
  setEmailNotifications: (enabled: boolean) => void;
  setSmsNotifications: (enabled: boolean) => void;
}

const DEFAULT_USER: UserProfile = {
  firstName: 'Sarah',
  lastName: 'Joe',
  email: 'Sample@example.com',
  phoneNumber: '(988) 000- 8888',
  keepLoggedIn: false,
  dob: '12 Oct 1995', // Placeholder matching mockup
};

export const useAppStore = create<AppState>((set) => ({
  // Initial State
  isLoggedIn: false,
  user: DEFAULT_USER,
  faceId: false,
  fingerprint: false,
  darkMode: false,
  pushNotifications: false,
  paymentReminders: false,
  emailNotifications: false,
  smsNotifications: false,

  // Actions
  login: (userData) =>
    set({
      isLoggedIn: true,
      user: { ...DEFAULT_USER, ...userData },
    }),
  logout: () =>
    set({
      isLoggedIn: false,
      user: DEFAULT_USER,
      faceId: false,
      fingerprint: false,
      darkMode: false,
    }),
  updateUser: (userUpdates) =>
    set((state) => ({
      user: { ...state.user, ...userUpdates },
    })),
  setFaceId: (enabled) => set({ faceId: enabled }),
  setFingerprint: (enabled) => set({ fingerprint: enabled }),
  setDarkMode: (enabled) => set({ darkMode: enabled }),
  setPushNotifications: (enabled) => set({ pushNotifications: enabled }),
  setPaymentReminders: (enabled) => set({ paymentReminders: enabled }),
  setEmailNotifications: (enabled) => set({ emailNotifications: enabled }),
  setSmsNotifications: (enabled) => set({ smsNotifications: enabled }),
}));
