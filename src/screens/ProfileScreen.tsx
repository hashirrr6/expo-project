import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Switch, Dimensions, Image } from 'react-native';
import { ChevronLeft, ChevronRight, Mail, Smartphone, Calendar, Fingerprint, Moon, Bell, Smile } from 'lucide-react-native';
import { Colors, Shadows, BorderRadius } from '../constants/theme';
import { ScreenName } from '../types';
import BottomTabBar from '../components/BottomTabBar';

const { height } = Dimensions.get('window');

interface ProfileScreenProps {
  onBack: () => void;
  onNavigate: (screen: ScreenName) => void;
}

/** Avatar using the generated 3D image */
function AvatarImage() {
  return (
    <View style={styles.avatarRing}>
      <Image
        source={require('../../assets/avatar.png')}
        style={styles.avatarImage}
        resizeMode="cover"
      />
    </View>
  );
}

export default function ProfileScreen({ onBack, onNavigate }: ProfileScreenProps) {
  const [faceId, setFaceId] = useState(false);
  const [fingerprint, setFingerprint] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  
  // Notification states matching the mockup
  const [pushNotifications, setPushNotifications] = useState(false);
  const [paymentReminders, setPaymentReminders] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(false);
  const [smsNotifications, setSmsNotifications] = useState(false);

  const switchTrackColors = { false: Colors.border, true: Colors.primaryLight };

  return (
    <View style={[styles.container, darkMode && styles.containerDark]}>
      {/* Header */}
      <View style={[styles.header, darkMode && styles.headerDark]}>
        <TouchableOpacity style={styles.headerBtn} onPress={onBack} activeOpacity={0.7}>
          <ChevronLeft size={20} color={darkMode ? Colors.white : Colors.textSecondary} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, darkMode && styles.textWhite]}>Profile</Text>
        <TouchableOpacity style={styles.headerBtn} activeOpacity={0.7}>
          <ChevronRight size={20} color={darkMode ? Colors.white : Colors.textSecondary} />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <View style={[styles.profileCard, darkMode && styles.profileCardDark]}>
          {/* Avatar */}
          <View style={styles.avatarWrapper}>
            <AvatarImage />
            <Text style={[styles.userName, darkMode && styles.textWhite]}>Sarah Joe</Text>
          </View>

          {/* Info Rows */}
          <View style={styles.infoSection}>
            <View style={styles.infoRow}>
              <View style={styles.iconContainer}>
                <Mail size={18} color={Colors.primaryLight} />
              </View>
              <View style={styles.infoTextContainer}>
                <Text style={[styles.infoLabel, darkMode && styles.textWhite]}>Email</Text>
                <Text style={[styles.infoValue, darkMode && styles.textLightGray]}>
                  Sample@example.com
                </Text>
              </View>
            </View>

            <View style={styles.infoRow}>
              <View style={styles.iconContainer}>
                <Smartphone size={18} color={Colors.primaryLight} />
              </View>
              <View style={styles.infoTextContainer}>
                <Text style={[styles.infoLabel, darkMode && styles.textWhite]}>Phone</Text>
                <Text style={[styles.infoValue, darkMode && styles.textLightGray]}>
                  (988) 000- 8888
                </Text>
              </View>
            </View>

            <View style={styles.infoRow}>
              <View style={styles.iconContainer}>
                <Calendar size={18} color={Colors.primaryLight} />
              </View>
              <View style={styles.infoTextContainer}>
                <Text style={[styles.infoLabel, darkMode && styles.textWhite]}>DOB</Text>
                <Text style={[styles.infoValue, darkMode && styles.textLightGray]}>
                  Sample@example.com
                </Text>
              </View>
            </View>
          </View>

          {/* Face ID & Fingerprint Rows (No Security header as per mockup) */}

          <View style={styles.groupHeaderContainer}>
            <Text style={[styles.groupHeaderTitle, darkMode && styles.textWhite]}>Security</Text>
          </View>
          <View style={styles.settingsSection}>
            <View style={styles.settingRow}>
              <View style={styles.rowLeft}>
                <View style={styles.iconContainer}>
                  <Smile size={18} color={Colors.primaryLight} />
                </View>
                <View style={styles.settingTexts}>
                  <Text style={[styles.settingTitle, darkMode && styles.textWhite]}>Face ID</Text>
                  <Text style={styles.settingSubtitle}>Use Face ID to unlock the app</Text>
                </View>
              </View>
              <Switch
                value={faceId}
                onValueChange={setFaceId}
                trackColor={switchTrackColors}
                thumbColor={Colors.white}
              />
            </View>

            <View style={styles.settingRow}>
              <View style={styles.rowLeft}>
                <View style={styles.iconContainer}>
                  <Fingerprint size={18} color={Colors.primaryLight} />
                </View>
                <View style={styles.settingTexts}>
                  <Text style={[styles.settingTitle, darkMode && styles.textWhite]}>Fingerprint</Text>
                  <Text style={styles.settingSubtitle}>Use Fingerprint to unlock the app</Text>
                </View>
              </View>
              <Switch
                value={fingerprint}
                onValueChange={setFingerprint}
                trackColor={switchTrackColors}
                thumbColor={Colors.white}
              />
            </View>
          </View>

          {/* Appearance Section */}
          <View style={styles.groupHeaderContainer}>
            <Text style={[styles.groupHeaderTitle, darkMode && styles.textWhite]}>Appearance</Text>
          </View>

          <View style={styles.settingsSection}>
            <View style={styles.settingRow}>
              <View style={styles.rowLeft}>
                <View style={styles.iconContainer}>
                  <Moon size={18} color={Colors.primaryLight} />
                </View>
                <View style={styles.settingTexts}>
                  <Text style={[styles.settingTitle, darkMode && styles.textWhite]}>Dark Mode</Text>
                  <Text style={styles.settingSubtitle}>Toggle dark mode on and off</Text>
                </View>
              </View>
              <Switch
                value={darkMode}
                onValueChange={setDarkMode}
                trackColor={switchTrackColors}
                thumbColor={Colors.white}
              />
            </View>
          </View>

          {/* Notifications Section - 4 switches matching mockup */}
          <View style={styles.groupHeaderContainer}>
            <Text style={[styles.groupHeaderTitle, darkMode && styles.textWhite]}>Notifications</Text>
          </View>

          <View style={styles.settingsSection}>
            {/* 1. Push Notifications */}
            <View style={styles.settingRow}>
              <View style={styles.rowLeft}>
                <View style={styles.iconContainer}>
                  <Bell size={18} color={Colors.primaryLight} />
                </View>
                <View style={styles.settingTexts}>
                  <Text style={[styles.settingTitle, darkMode && styles.textWhite]}>Push Notifications</Text>
                  <Text style={styles.settingSubtitle}>Receive push notifications</Text>
                </View>
              </View>
              <Switch
                value={pushNotifications}
                onValueChange={setPushNotifications}
                trackColor={switchTrackColors}
                thumbColor={Colors.white}
              />
            </View>

            {/* 2. Payments Reminders */}
            <View style={styles.settingRow}>
              <View style={styles.rowLeft}>
                <View style={styles.iconContainer}>
                  <Bell size={18} color={Colors.primaryLight} />
                </View>
                <View style={styles.settingTexts}>
                  <Text style={[styles.settingTitle, darkMode && styles.textWhite]}>Payments Reminders</Text>
                  <Text style={styles.settingSubtitle}>Receive payment reminders</Text>
                </View>
              </View>
              <Switch
                value={paymentReminders}
                onValueChange={setPaymentReminders}
                trackColor={switchTrackColors}
                thumbColor={Colors.white}
              />
            </View>

            {/* 3. Email Notifications */}
            <View style={styles.settingRow}>
              <View style={styles.rowLeft}>
                <View style={styles.iconContainer}>
                  <Bell size={18} color={Colors.primaryLight} />
                </View>
                <View style={styles.settingTexts}>
                  <Text style={[styles.settingTitle, darkMode && styles.textWhite]}>Email Notifications</Text>
                  <Text style={styles.settingSubtitle}>Get Important updates via email</Text>
                </View>
              </View>
              <Switch
                value={emailNotifications}
                onValueChange={setEmailNotifications}
                trackColor={switchTrackColors}
                thumbColor={Colors.white}
              />
            </View>

            {/* 4. SMS Notifications */}
            <View style={styles.settingRow}>
              <View style={styles.rowLeft}>
                <View style={styles.iconContainer}>
                  <Bell size={18} color={Colors.primaryLight} />
                </View>
                <View style={styles.settingTexts}>
                  <Text style={[styles.settingTitle, darkMode && styles.textWhite]}>SMS Notifications</Text>
                  <Text style={styles.settingSubtitle}>Receive text messages alerts</Text>
                </View>
              </View>
              <Switch
                value={smsNotifications}
                onValueChange={setSmsNotifications}
                trackColor={switchTrackColors}
                thumbColor={Colors.white}
              />
            </View>
          </View>

          {/* Danger Zone Section */}
          <View style={styles.groupHeaderContainer}>
            <Text style={[styles.groupHeaderTitle, styles.groupHeaderTitleRed]}>Danger Zone</Text>
          </View>

          {/* Logout Button */}
          <TouchableOpacity style={styles.logoutBtn} activeOpacity={0.8} onPress={onBack}>
            <Text style={styles.logoutBtnText}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Bottom Tab Bar */}
      <BottomTabBar activeTab="Profile" onNavigate={onNavigate} darkMode={darkMode} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingTop: 10,
  },
  containerDark: {
    backgroundColor: Colors.darkBg,
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
    backgroundColor: Colors.darkBg,
  },
  headerBtn: {
    width: 38,
    height: 38,
    borderRadius: BorderRadius.md,
    backgroundColor: Colors.surface,
    justifyContent: 'center',
    alignItems: 'center',
    ...Shadows.sm,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '900',
    color: Colors.textPrimary,
    letterSpacing: -0.2,
  },
  textWhite: {
    color: Colors.white,
  },
  textLightGray: {
    color: Colors.textPlaceholder,
  },
  scrollContainer: {
    paddingBottom: 90,
  },
  profileCard: {
    flex: 1,
    backgroundColor: Colors.surface,
    borderTopLeftRadius: BorderRadius['2xl'],
    borderTopRightRadius: BorderRadius['2xl'],
    paddingTop: 24,
    paddingHorizontal: 24,
    minHeight: height - 150,
  },
  profileCardDark: {
    backgroundColor: Colors.darkSurface,
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
    borderColor: Colors.primaryLight,
    padding: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.background,
    overflow: 'hidden',
  },
  avatarImage: {
    width: 108,
    height: 108,
    borderRadius: 54,
  },
  userName: {
    fontSize: 22,
    fontWeight: '800',
    color: Colors.textSecondary,
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
    borderBottomColor: Colors.borderLight,
  },
  iconContainer: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: Colors.primaryLightest,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  infoTextContainer: {
    flex: 1,
  },
  infoLabel: {
    fontSize: 14,
    fontWeight: '700',
    color: Colors.textSecondary,
  },
  infoValue: {
    fontSize: 12,
    fontWeight: '500',
    color: Colors.textPlaceholder,
    marginTop: 2,
  },
  groupHeaderContainer: {
    marginTop: 24,
    marginBottom: 10,
  },
  groupHeaderTitle: {
    fontSize: 16,
    fontWeight: '900',
    color: Colors.textSecondary,
  },
  groupHeaderTitleRed: {
    fontSize: 16,
    fontWeight: '900',
    color: '#FF4D4C',
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
    color: Colors.textSecondary,
  },
  settingSubtitle: {
    fontSize: 11,
    color: Colors.textPlaceholder,
    marginTop: 2,
  },
  logoutBtn: {
    width: '100%',
    backgroundColor: '#FF4D4C',
    height: 52,
    borderRadius: BorderRadius.lg,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 36,
    shadowColor: Colors.error,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 2,
  },
  logoutBtnText: {
    color: Colors.white,
    fontWeight: '900',
    fontSize: 14,
  },
});
