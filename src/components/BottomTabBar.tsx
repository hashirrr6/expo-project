import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
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
  icon: React.ComponentType<any>;
  screen: ScreenName | null;
}

// Swapped to match the mockup: Home, Chat, History, Card, Profile
const TABS: TabConfig[] = [
  { key: 'Home', label: 'Home', icon: Home, screen: 'Home' },
  { key: 'Messages', label: 'Chat', icon: MessageCircle, screen: 'Messages' },
  { key: 'History', label: 'History', icon: Clock, screen: null },
  { key: 'Card', label: 'Card', icon: CreditCard, screen: null },
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
            {tab.key === 'Profile' ? (
              <View style={[
                styles.miniAvatarContainer,
                isActive && styles.miniAvatarActive
              ]}>
                <Image
                  source={require('../../assets/avatar.png')}
                  style={[
                    styles.miniAvatar,
                    isActive && styles.miniAvatarActiveImage
                  ]}
                  resizeMode="cover"
                />
              </View>
            ) : (
              <IconComponent
                size={22}
                color={isActive ? Colors.primary : Colors.textPlaceholder}
              />
            )}
            {/* Show label ONLY if active and not Profile */}
            {isActive && tab.key !== 'Profile' && (
              <Text
                style={[
                  styles.label,
                  styles.labelActive,
                  darkMode && styles.labelDarkActive,
                ]}
              >
                {tab.label}
              </Text>
            )}
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
    minWidth: 50,
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
  labelDarkActive: {
    color: Colors.primaryLighter,
  },
  miniAvatarContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  miniAvatarActive: {
    backgroundColor: Colors.primary,
    padding: 3,
  },
  miniAvatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
  },
  miniAvatarActiveImage: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: Colors.white,
  },
});
