import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native';
import { ArrowRight } from 'lucide-react-native';
import { Colors, Shadows, BorderRadius } from '../constants/theme';

const { width } = Dimensions.get('window');

interface OnboardingScreenProps {
  onNext: () => void;
}

export default function OnboardingScreen({ onNext }: OnboardingScreenProps) {
  return (
    <View style={styles.container}>
      {/* Main Illustration */}
      <View style={styles.illustrationContainer}>
        <Image
          source={require('../../assets/homepageIllu.png')}
          style={styles.illustrationImage}
          resizeMode="contain"
        />
      </View>

      {/* Text Content */}
      <View style={styles.narrativeContainer}>
        <Text style={styles.title}>Your Credit Score</Text>
        <Text style={styles.description}>
          We provide you with the tools to monitor, understand, and improve your credit score.
        </Text>
      </View>

      {/* Next Button with Outer Ring */}
      <View style={styles.footer}>
        <View style={styles.nextButtonOuterRing}>
          <TouchableOpacity style={styles.nextButtonInner} onPress={onNext} activeOpacity={0.8}>
            <ArrowRight color={Colors.white} size={24} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.surface,
    justifyContent: 'space-between',
    paddingBottom: 40,
    paddingTop: 20,
  },
  illustrationContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  illustrationImage: {
    width: '100%',
    height: '100%',
  },
  narrativeContainer: {
    paddingHorizontal: 24,
    marginVertical: 20,
    paddingRight: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: Colors.textSecondary,
    marginBottom: 12,
    letterSpacing: -0.5,
  },
  description: {
    fontSize: 16,
    color: Colors.textSubtle,
    lineHeight: 24,
  },
  footer: {
    alignItems: 'flex-end',
    paddingHorizontal: 24,
    marginTop: 10,
  },
  nextButtonOuterRing: {
    width: 74,
    height: 74,
    borderRadius: 37,
    borderWidth: 1.5,
    borderColor: '#3B82F6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextButtonInner: {
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: '#3B82F6',
    justifyContent: 'center',
    alignItems: 'center',
    ...Shadows.blueStrong,
  },
});
