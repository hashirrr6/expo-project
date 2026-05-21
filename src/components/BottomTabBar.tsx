import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Home, CreditCard, Clock, MessageCircle, User } from 'lucide-react-native';
import { Colors } from '../constants/theme';
import { ScreenName, TabName } from '../types';

interface BottomTabBarProps {
  activeTab: TabName;
  onNavigate: (screen: ScreenName) => void;
  darkMode?: boolean;
}

interface TabConfig {
  key: TabName;
  label: string;
  icon: React.ComponentType<{ size: number; color: string }>;
  screen: ScreenName | null;
}

const TABS: TabConfig[] = [
  { key: 'Home', label: 'Home', icon: Home, screen: 'Home' },
  { key: 'Card', label: 'Card', icon: CreditCard, screen: null },
  { key: 'History', label: 'History', icon: Clock, screen: null },
  { key: 'Messages', label: 'Chat', icon: MessageCircle, screen: 'Messages' },
  { key: 'Profile', label: 'Profile', icon: User, screen: 'Profile' },
];

export default function BottomTabBar({ activeTab, onNavigate, darkMode = false }: BottomTabBarProps) {
  return (
    <View style={[styles.container, darkMode && styles.containerDark]}>
      {TABS.map((tab) => {
        const isActive = tab.key === activeTab;
        const IconComponent = tab.icon;

        return (
          <TouchableOpacity
            key={tab.key}
            style={styles.tab}
            onPress={() => tab.screen && onNavigate(tab.screen)}
            activeOpacity={0.7}
          >
            <IconComponent
              size={22}
              color={isActive ? Colors.primary : Colors.textPlaceholder}
            />
            <Text
              style={[
                styles.label,
                isActive && styles.labelActive,
                darkMode && !isActive && styles.labelDark,
              ]}
            >
              {tab.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 72,
    borderTopWidth: 1,
    borderColor: Colors.border,
    backgroundColor: Colors.white,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: 10,
  },
  containerDark: {
    backgroundColor: Colors.darkSurface,
    borderColor: Colors.darkBorder,
  },
  tab: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 4,
  },
  label: {
    fontSize: 10,
    fontWeight: '700',
    color: Colors.textPlaceholder,
    marginTop: 4,
  },
  labelActive: {
    color: Colors.primary,
    fontWeight: '900',
  },
  labelDark: {
    color: Colors.textSubtle,
  },
});
