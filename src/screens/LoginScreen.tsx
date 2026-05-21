import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Switch,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { ShieldCheck, Mail, User } from 'lucide-react-native';
import Svg, { Path } from 'react-native-svg';
import { Colors, Shadows, BorderRadius } from '../constants/theme';

interface LoginScreenProps {
  onLogin: () => void;
}

/** KOJO brand logo with smile arc */
function KojoLogo() {
  return (
    <View style={styles.logoContainer}>
      <Text style={styles.logoText}>KOJO</Text>
      <Svg width={60} height={20} viewBox="0 0 60 20">
        <Path
          d="M 8 4 Q 30 22 52 4"
          fill="none"
          stroke={Colors.primary}
          strokeWidth="3"
          strokeLinecap="round"
        />
      </Svg>
      <Text style={styles.tagline}>Ally in Debt</Text>
    </View>
  );
}

export default function LoginScreen({ onLogin }: LoginScreenProps) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [keepLoggedIn, setKeepLoggedIn] = useState(true);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.keyboardContainer}
    >
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        {/* Brand Identity */}
        <KojoLogo />

        {/* Input Form Fields */}
        <View style={styles.form}>
          <Text style={styles.inputLabel}>
            Phone Number <Text style={styles.required}>*</Text>
          </Text>
          <View style={styles.phoneInputContainer}>
            <View style={styles.flagPicker}>
              <Text style={styles.flagText}>🇺🇸</Text>
              <Text style={styles.dropdownArrow}>▾</Text>
            </View>
            <TextInput
              style={styles.phoneInput}
              placeholder="Enter Your Phone Number"
              placeholderTextColor={Colors.textPlaceholder}
              keyboardType="phone-pad"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
            />
          </View>

          <Text style={styles.inputLabel}>
            First Name <Text style={styles.required}>*</Text>
          </Text>
          <View style={styles.inputFieldContainer}>
            <User size={18} color={Colors.textPlaceholder} style={styles.iconPrefix} />
            <TextInput
              style={styles.inputField}
              placeholder="Enter First Name"
              placeholderTextColor={Colors.textPlaceholder}
              value={firstName}
              onChangeText={setFirstName}
            />
          </View>

          <Text style={styles.inputLabel}>
            Last Name <Text style={styles.required}>*</Text>
          </Text>
          <View style={styles.inputFieldContainer}>
            <User size={18} color={Colors.textPlaceholder} style={styles.iconPrefix} />
            <TextInput
              style={styles.inputField}
              placeholder="Enter Last Name"
              placeholderTextColor={Colors.textPlaceholder}
              value={lastName}
              onChangeText={setLastName}
            />
          </View>

          <Text style={styles.inputLabel}>
            Email Address <Text style={styles.required}>*</Text>
          </Text>
          <View style={styles.inputFieldContainer}>
            <Mail size={18} color={Colors.textPlaceholder} style={styles.iconPrefix} />
            <TextInput
              style={styles.inputField}
              placeholder="Enter Your Email"
              placeholderTextColor={Colors.textPlaceholder}
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          {/* Biometric Integration Link */}
          <TouchableOpacity style={styles.biometricLink} activeOpacity={0.7}>
            <ShieldCheck size={18} color={Colors.primaryLight} />
            <Text style={styles.biometricLinkText}>Use Biometric Login</Text>
          </TouchableOpacity>
        </View>

        {/* Action Controls */}
        <View style={styles.footer}>
          <TouchableOpacity style={styles.loginButton} onPress={onLogin} activeOpacity={0.8}>
            <Text style={styles.loginButtonText}>Log In</Text>
          </TouchableOpacity>

          <View style={styles.keepLoggedContainer}>
            <Text style={styles.keepLoggedText}>Keep me logged in</Text>
            <Switch
              value={keepLoggedIn}
              onValueChange={setKeepLoggedIn}
              trackColor={{ false: Colors.border, true: Colors.primaryLighter }}
              thumbColor={keepLoggedIn ? Colors.primaryLight : Colors.borderLight}
            />
          </View>

          <TouchableOpacity style={styles.signUpLink} activeOpacity={0.7}>
            <Text style={styles.signUpText}>
              Don't have an account ? <Text style={styles.signUpHighlight}>Sign Up</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  keyboardContainer: {
    flex: 1,
    backgroundColor: Colors.surface,
  },
  container: {
    paddingHorizontal: 24,
    paddingTop: 40,
    paddingBottom: 40,
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 32,
  },
  logoText: {
    fontSize: 34,
    fontWeight: '900',
    color: Colors.primary,
    letterSpacing: 2,
  },
  tagline: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.primaryLight,
    letterSpacing: 0.5,
    marginTop: 2,
  },
  form: {
    width: '100%',
    marginBottom: 24,
  },
  inputLabel: {
    fontSize: 13,
    fontWeight: '700',
    color: Colors.textTertiary,
    marginBottom: 6,
    marginTop: 14,
  },
  required: {
    color: Colors.error,
  },
  phoneInputContainer: {
    flexDirection: 'row',
    height: 50,
    borderRadius: BorderRadius.md,
    borderWidth: 1.5,
    borderColor: Colors.border,
    backgroundColor: Colors.surface,
  },
  flagPicker: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    borderRightWidth: 1.5,
    borderRightColor: Colors.border,
    backgroundColor: Colors.surfaceSecondary,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  flagText: {
    fontSize: 18,
  },
  dropdownArrow: {
    fontSize: 10,
    color: Colors.textSubtle,
    marginLeft: 4,
  },
  phoneInput: {
    flex: 1,
    paddingHorizontal: 14,
    fontSize: 14,
    color: Colors.textSecondary,
    fontWeight: '600',
  },
  inputFieldContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    borderRadius: BorderRadius.md,
    borderWidth: 1.5,
    borderColor: Colors.border,
    backgroundColor: Colors.surface,
    paddingHorizontal: 12,
  },
  iconPrefix: {
    marginRight: 8,
  },
  inputField: {
    flex: 1,
    fontSize: 14,
    color: Colors.textSecondary,
    fontWeight: '600',
  },
  biometricLink: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    alignSelf: 'flex-start',
  },
  biometricLinkText: {
    fontSize: 13,
    fontWeight: '700',
    color: Colors.primary,
    marginLeft: 6,
  },
  footer: {
    width: '100%',
    alignItems: 'center',
  },
  loginButton: {
    width: '100%',
    height: 52,
    borderRadius: BorderRadius.md,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    ...Shadows.blue,
  },
  loginButtonText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '800',
  },
  keepLoggedContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: 18,
    paddingVertical: 4,
  },
  keepLoggedText: {
    fontSize: 14,
    color: Colors.textMuted,
    fontWeight: '600',
  },
  signUpLink: {
    marginTop: 24,
  },
  signUpText: {
    fontSize: 14,
    color: Colors.textMuted,
    fontWeight: '600',
  },
  signUpHighlight: {
    color: Colors.primary,
    fontWeight: '800',
  },
});
