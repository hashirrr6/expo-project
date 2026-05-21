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

interface LoginScreenProps {
  onLogin: () => void;
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
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>KOJO</Text>
          <View style={styles.smileArc} />
          <Text style={styles.tagline}>Ally in Debt</Text>
        </View>

        {/* Input Form Fields */}
        <View style={styles.form}>
          <Text style={styles.inputLabel}>Phone Number <Text style={styles.required}>*</Text></Text>
          <View style={styles.phoneInputContainer}>
            <View style={styles.flagPicker}>
              <Text style={styles.flagText}>🇺🇸</Text>
              <Text style={styles.dropdownArrow}>▾</Text>
            </View>
            <TextInput
              style={styles.phoneInput}
              placeholder="Enter Your Phone Number"
              placeholderTextColor="#94A3B8"
              keyboardType="phone-pad"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
            />
          </View>

          <Text style={styles.inputLabel}>First Name <Text style={styles.required}>*</Text></Text>
          <View style={styles.inputFieldContainer}>
            <User size={18} color="#94A3B8" style={styles.iconPrefix} />
            <TextInput
              style={styles.inputField}
              placeholder="Enter First Name"
              placeholderTextColor="#94A3B8"
              value={firstName}
              onChangeText={setFirstName}
            />
          </View>

          <Text style={styles.inputLabel}>Last Name <Text style={styles.required}>*</Text></Text>
          <View style={styles.inputFieldContainer}>
            <User size={18} color="#94A3B8" style={styles.iconPrefix} />
            <TextInput
              style={styles.inputField}
              placeholder="Enter Last Name"
              placeholderTextColor="#94A3B8"
              value={lastName}
              onChangeText={setLastName}
            />
          </View>

          <Text style={styles.inputLabel}>Email Address <Text style={styles.required}>*</Text></Text>
          <View style={styles.inputFieldContainer}>
            <Mail size={18} color="#94A3B8" style={styles.iconPrefix} />
            <TextInput
              style={styles.inputField}
              placeholder="Enter Your Email"
              placeholderTextColor="#94A3B8"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          {/* Biometric Integration Link */}
          <TouchableOpacity style={styles.biometricLink} activeOpacity={0.7}>
            <ShieldCheck size={18} color="#3B82F6" />
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
              trackColor={{ false: '#E2E8F0', true: '#93C5FD' }}
              thumbColor={keepLoggedIn ? '#3B82F6' : '#F1F5F9'}
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
    backgroundColor: '#FFFFFF',
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
    color: '#2563EB',
    letterSpacing: 2,
  },
  smileArc: {
    width: 60,
    height: 12,
    borderBottomWidth: 3,
    borderBottomColor: '#2563EB',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    marginTop: -4,
    marginBottom: 6,
  },
  tagline: {
    fontSize: 14,
    fontWeight: '600',
    color: '#3B82F6',
    letterSpacing: 0.5,
  },
  form: {
    width: '100%',
    marginBottom: 24,
  },
  inputLabel: {
    fontSize: 13,
    fontWeight: '700',
    color: '#334155',
    marginBottom: 6,
    marginTop: 14,
  },
  required: {
    color: '#EF4444',
  },
  phoneInputContainer: {
    flexDirection: 'row',
    height: 50,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: '#E2E8F0',
    backgroundColor: '#FFFFFF',
  },
  flagPicker: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    borderRightWidth: 1.5,
    borderRightColor: '#E2E8F0',
    backgroundColor: '#F8FAFC',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  flagText: {
    fontSize: 18,
  },
  dropdownArrow: {
    fontSize: 10,
    color: '#64748B',
    marginLeft: 4,
  },
  phoneInput: {
    flex: 1,
    paddingHorizontal: 14,
    fontSize: 14,
    color: '#1E293B',
    fontWeight: '600',
  },
  inputFieldContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: '#E2E8F0',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 12,
  },
  iconPrefix: {
    marginRight: 8,
  },
  inputField: {
    flex: 1,
    fontSize: 14,
    color: '#1E293B',
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
    color: '#2563EB',
    marginLeft: 6,
  },
  footer: {
    width: '100%',
    alignItems: 'center',
  },
  loginButton: {
    width: '100%',
    height: 52,
    borderRadius: 12,
    backgroundColor: '#2563EB',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#2563EB',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 3,
  },
  loginButtonText: {
    color: '#FFFFFF',
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
    color: '#475569',
    fontWeight: '600',
  },
  signUpLink: {
    marginTop: 24,
  },
  signUpText: {
    fontSize: 14,
    color: '#475569',
    fontWeight: '600',
  },
  signUpHighlight: {
    color: '#2563EB',
    fontWeight: '800',
  },
});
