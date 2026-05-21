import React, { useState } from 'react';
import { View, SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import OnboardingScreen from './screens/OnboardingScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import MessagesScreen from './screens/MessagesScreen';
import ProfileScreen from './screens/ProfileScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<'Onboarding' | 'Login' | 'Home' | 'Messages' | 'Profile'>('Onboarding');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'Onboarding':
        return <OnboardingScreen onNext={() => setCurrentScreen('Login')} />;
      case 'Login':
        return <LoginScreen onLogin={() => setCurrentScreen('Home')} />;
      case 'Home':
        return <HomeScreen onNavigate={(screen: any) => setCurrentScreen(screen)} />;
      case 'Messages':
        return <MessagesScreen onBack={() => setCurrentScreen('Home')} onNavigate={(screen: any) => setCurrentScreen(screen)} />;
      case 'Profile':
        return <ProfileScreen onBack={() => setCurrentScreen('Home')} onNavigate={(screen: any) => setCurrentScreen(screen)} />;
      default:
        return <OnboardingScreen onNext={() => setCurrentScreen('Login')} />;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.content}>{renderScreen()}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBF2FC',
  },
  content: {
    flex: 1,
  },
});
