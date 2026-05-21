/**
 * Shared type definitions for the KOJO Credit Analyzer app.
 */

/** All navigable screen names in the app */
export type ScreenName = 'Onboarding' | 'Login' | 'Home' | 'Messages' | 'Profile';

/** Bottom tab identifiers */
export type TabName = 'Home' | 'Card' | 'History' | 'Messages' | 'Profile';

/** Props for screens that can navigate forward */
export interface NavigationProps {
  onNavigate: (screen: ScreenName) => void;
}

/** Props for screens with back + forward navigation */
export interface BackNavigationProps extends NavigationProps {
  onBack: () => void;
}

/** Message thread data model */
export interface ThreadItem {
  id: string;
  senderName: string;
  lastMessage: string;
  timeAgo: string;
  statusColor: 'green' | 'orange' | 'grey';
  unread: boolean;
}

/** Quick action item on Home screen */
export interface QuickAction {
  id: string;
  label: string;
  iconColor: string;
  bgColor: string;
  screen?: ScreenName;
}
