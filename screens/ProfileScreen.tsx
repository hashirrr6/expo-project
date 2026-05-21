import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Switch, Dimensions } from 'react-native';
import { ChevronLeft, ChevronRight, Mail, Smartphone, Smile, Fingerprint, Moon, Bell } from 'lucide-react-native';

const { width, height } = Dimensions.get('window');

interface ProfileScreenProps {
  onBack: () => void;
  onNavigate: (screen: 'Onboarding' | 'Login' | 'Home' | 'Messages' | 'Profile') => void;
}

export default function ProfileScreen({ onBack, onNavigate }: ProfileScreenProps) {
  const [faceId, setFaceId] = useState(false);
  const [fingerprint, setFingerprint] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  return (
    <View style={[styles.container, darkMode && styles.containerDark]}>
      {/* IOS-style Header exactly matching the design */}
      <View style={[styles.header, darkMode && styles.headerDark]}>
        <TouchableOpacity style={styles.headerBtn} onPress={onBack} activeOpacity={0.7}>
          <ChevronLeft size={20} color={darkMode ? '#FFFFFF' : '#1E293B'} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, darkMode && styles.textWhite]}>Profile</Text>
        <TouchableOpacity style={styles.headerBtn} onPress={() => {}} activeOpacity={0.7}>
          <ChevronRight size={20} color={darkMode ? '#FFFFFF' : '#1E293B'} />
        </TouchableOpacity>
      </View>

      <ScrollView 
        contentContainerStyle={styles.scrollContainer} 
        showsVerticalScrollIndicator={false}
      >
        {/* Main Body Container with White Card Layout & Curved Corners */}
        <View style={[styles.profileCard, darkMode && styles.profileCardDark]}>
          
          {/* Avatar Area with Blue Ring */}
          <View style={styles.avatarWrapper}>
            <View style={styles.avatarRing}>
              <Image
                source={{ uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300' }} 
                style={styles.avatarImage}
                defaultSource={{ uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300' }}
              />
            </View>
            <Text style={[styles.userName, darkMode && styles.textWhite]}>Sarah Joe</Text>
          </View>

          {/* Info Rows exactly styled like the screenshot */}
          <View style={styles.infoSection}>
            {/* Email Row */}
            <View style={styles.infoRow}>
              <View style={styles.iconContainer}>
                <Mail size={18} color="#3B82F6" />
              </View>
              <View style={styles.infoTextContainer}>
                <Text style={styles.infoLabel}>EMAIL</Text>
                <Text style={[styles.infoValue, darkMode && styles.textLightGray]}>Sample@example.com</Text>
              </View>
            </View>

            {/* Phone Row */}
            <View style={styles.infoRow}>
              <View style={styles.iconContainer}>
                <Smartphone size={18} color="#3B82F6" />
              </View>
              <View style={styles.infoTextContainer}>
                <Text style={styles.infoLabel}>PHONE</Text>
                <Text style={[styles.infoValue, darkMode && styles.textLightGray]}>(988) 000- 8888</Text>
              </View>
            </View>

            {/* DOB Row (Specifically uses Envelope/Mail icon as in design) */}
            <View style={styles.infoRow}>
              <View style={styles.iconContainer}>
                <Mail size={18} color="#3B82F6" />
              </View>
              <View style={styles.infoTextContainer}>
                <Text style={styles.infoLabel}>DOB</Text>
                <Text style={[styles.infoValue, darkMode && styles.textLightGray]}>Sample@example.com</Text>
              </View>
            </View>
          </View>

          {/* Security Group */}
          <View style={styles.groupHeaderContainer}>
            <Text style={[styles.groupHeaderTitle, darkMode && styles.textWhite]}>Security</Text>
          </View>

          <View style={styles.settingsSection}>
            {/* Face ID Switch Row */}
            <View style={styles.settingRow}>
              <View style={styles.rowLeft}>
                <View style={styles.iconContainer}>
                  <Smile size={18} color="#3B82F6" />
                </View>
                <View style={styles.settingTexts}>
                  <Text style={[styles.settingTitle, darkMode && styles.textWhite]}>Face ID</Text>
                  <Text style={styles.settingSubtitle}>Use Face ID to unlock the app</Text>
                </View>
              </View>
              <Switch
                value={faceId}
                onValueChange={setFaceId}
                trackColor={{ false: '#E2E8F0', true: '#3B82F6' }}
                thumbColor="#FFFFFF"
              />
            </View>

            {/* Fingerprint Switch Row */}
            <View style={styles.settingRow}>
              <View style={styles.rowLeft}>
                <View style={styles.iconContainer}>
                  <Fingerprint size={18} color="#3B82F6" />
                </View>
                <View style={styles.settingTexts}>
                  <Text style={[styles.settingTitle, darkMode && styles.textWhite]}>Fingerprint</Text>
                  <Text style={styles.settingSubtitle}>Use Fingerprint to unlock the app</Text>
                </View>
              </View>
              <Switch
                value={fingerprint}
                onValueChange={setFingerprint}
                trackColor={{ false: '#E2E8F0', true: '#3B82F6' }}
                thumbColor="#FFFFFF"
              />
            </View>
          </View>

          {/* Appearance Group */}
          <View style={styles.groupHeaderContainer}>
            <Text style={[styles.groupHeaderTitle, darkMode && styles.textWhite]}>Appearance</Text>
          </View>

          <View style={styles.settingsSection}>
            {/* Dark Mode Switch Row */}
            <View style={styles.settingRow}>
              <View style={styles.rowLeft}>
                <View style={styles.iconContainer}>
                  <Moon size={18} color="#3B82F6" />
                </View>
                <View style={styles.settingTexts}>
                  <Text style={[styles.settingTitle, darkMode && styles.textWhite]}>Dark Mode</Text>
                  <Text style={styles.settingSubtitle}>Toggle dark mode on and off</Text>
                </View>
              </View>
              <Switch
                value={darkMode}
                onValueChange={setDarkMode}
                trackColor={{ false: '#E2E8F0', true: '#3B82F6' }}
                thumbColor="#FFFFFF"
              />
            </View>
          </View>

          {/* Notifications Group */}
          <View style={styles.groupHeaderContainer}>
            <Text style={[styles.groupHeaderTitle, darkMode && styles.textWhite]}>Notifications</Text>
          </View>

          <View style={styles.settingsSection}>
            {/* Push Notifications Row */}
            <View style={styles.settingRow}>
              <View style={styles.rowLeft}>
                <View style={styles.iconContainer}>
                  <Bell size={18} color="#3B82F6" />
                </View>
                <View style={styles.settingTexts}>
                  <Text style={[styles.settingTitle, darkMode && styles.textWhite]}>Push Notifications</Text>
                  <Text style={styles.settingSubtitle}>Receive instant push updates</Text>
                </View>
              </View>
              <Switch
                value={notifications}
                onValueChange={setNotifications}
                trackColor={{ false: '#E2E8F0', true: '#3B82F6' }}
                thumbColor="#FFFFFF"
              />
            </View>
          </View>

          {/* Sign Out CTA Button */}
          <TouchableOpacity style={styles.logoutBtn} activeOpacity={0.8} onPress={onBack}>
            <Text style={styles.logoutBtnText}>Log Out</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>

      {/* Styled Bottom Tab Nav Panel matching exactly */}
      <View style={[styles.tabBar, darkMode && styles.tabBarDark]}>
        <TouchableOpacity style={styles.tabItem} onPress={() => onNavigate('Home')}>
          <Text style={styles.tabIconPlaceholder}>🏠</Text>
          <Text style={styles.tabLabel}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={() => onNavigate('Messages')}>
          <Text style={styles.tabIconPlaceholder}>💬</Text>
          <Text style={styles.tabLabel}>Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={() => {}}>
          <Text style={styles.tabIconPlaceholder}>🕒</Text>
          <Text style={styles.tabLabel}>History</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={() => onNavigate('Profile')}>
          <Text style={[styles.tabIconPlaceholder, styles.tabSelectedText]}>👤</Text>
          <Text style={[styles.tabLabel, styles.tabLabelSelected]}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBF2FC',
    paddingTop: 10,
  },
  containerDark: {
    backgroundColor: '#0f172a',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 14,
    backgroundColor: 'transparent',
  },
  headerDark: {
    backgroundColor: '#0f172a',
  },
  headerBtn: {
    width: 38,
    height: 38,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#101828',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '900',
    color: '#0F172A',
    letterSpacing: -0.2,
  },
  textWhite: {
    color: '#FFFFFF',
  },
  textLightGray: {
    color: '#94A3B8',
  },
  scrollContainer: {
    paddingBottom: 90,
  },
  profileCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 34,
    borderTopRightRadius: 34,
    paddingTop: 24,
    paddingHorizontal: 24,
    minHeight: height - 150,
  },
  profileCardDark: {
    backgroundColor: '#1e293b',
  },
  avatarWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 14,
  },
  avatarRing: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: '#3B82F6',
    padding: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EBF2FC',
  },
  avatarImage: {
    width: 108,
    height: 108,
    borderRadius: 54,
  },
  userName: {
    fontSize: 22,
    fontWeight: '800',
    color: '#1E293B',
    marginTop: 12,
    letterSpacing: -0.5,
  },
  infoSection: {
    marginVertical: 12,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },
  iconContainer: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#EFF6FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  infoTextContainer: {
    flex: 1,
  },
  infoLabel: {
    fontSize: 11,
    fontWeight: '800',
    color: '#94A3B8',
    letterSpacing: 0.5,
  },
  infoValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#475569',
    marginTop: 2,
  },
  groupHeaderContainer: {
    marginTop: 24,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
    paddingBottom: 6,
  },
  groupHeaderTitle: {
    fontSize: 16,
    fontWeight: '900',
    color: '#1E293B',
  },
  settingsSection: {
    marginBottom: 8,
  },
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  rowLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  settingTexts: {
    flex: 1,
  },
  settingTitle: {
    fontSize: 14,
    fontWeight: '800',
    color: '#1E293B',
  },
  settingSubtitle: {
    fontSize: 11,
    color: '#94A3B8',
    marginTop: 2,
  },
  logoutBtn: {
    width: '100%',
    backgroundColor: '#FF4D4C',
    height: 52,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 36,
    shadowColor: '#EF4444',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 2,
  },
  logoutBtnText: {
    color: '#FFFFFF',
    fontWeight: '950',
    fontSize: 14,
  },
  tabBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 72,
    borderTopWidth: 1,
    borderColor: '#E2E8F0',
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: 10,
  },
  tabBarDark: {
    backgroundColor: '#1E293B',
    borderColor: '#334155',
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabIconPlaceholder: {
    fontSize: 20,
    color: '#94A3B8',
  },
  tabSelectedText: {
    color: '#3B82F6',
  },
  tabLabel: {
    fontSize: 10,
    fontWeight: '800',
    color: '#94A3B8',
    marginTop: 2,
  },
  tabLabelSelected: {
    color: '#3B82F6',
  },
});
