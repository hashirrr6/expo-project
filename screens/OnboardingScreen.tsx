import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { ArrowRight } from 'lucide-react-native';

const { width } = Dimensions.get('window');

interface OnboardingScreenProps {
  onNext: () => void;
}

export default function OnboardingScreen({ onNext }: OnboardingScreenProps) {
  return (
    <View style={styles.container}>
      {/* Top Header Space */}
      <View style={styles.header}>
        <Text style={styles.timeLabel}>9:41</Text>
      </View>

      {/* Main Illustration Area */}
      <View style={styles.illustrationContainer}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?q=80&w=600' }}
          style={styles.illustration}
          resizeMode="contain"
        />
      </View>

      {/* Text Narrative */}
      <View style={styles.narrativeContainer}>
        <Text style={styles.title}>Your Credit Score</Text>
        <Text style={styles.description}>
          We provide you with the tools to monitor, understand, and improve your credit score.
        </Text>
      </View>

      {/* Circular Next Navigation CTA */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.nextButton} onPress={onNext} activeOpacity={0.8}>
          <ArrowRight color="#FFFFFF" size={24} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    paddingBottom: 40,
  },
  header: {
    paddingTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  timeLabel: {
    fontWeight: '600',
    fontSize: 15,
    color: 'transparent', // Native status bar overlay handles this beautifully
  },
  illustrationContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  illustration: {
    width: width * 0.82,
    height: width * 0.82,
  },
  narrativeContainer: {
    marginVertical: 12,
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: '#1E293B',
    marginBottom: 12,
    letterSpacing: -0.5,
  },
  description: {
    fontSize: 16,
    color: '#64748B',
    lineHeight: 24,
  },
  footer: {
    alignItems: 'flex-end',
    marginTop: 20,
  },
  nextButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#3B82F6',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#3B82F6',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
});
