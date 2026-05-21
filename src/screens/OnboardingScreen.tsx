import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { ArrowRight } from 'lucide-react-native';
import Svg, { Circle, Path, G, Defs, LinearGradient, Stop } from 'react-native-svg';
import { Colors, Shadows, BorderRadius } from '../constants/theme';

const { width } = Dimensions.get('window');

interface OnboardingScreenProps {
  onNext: () => void;
}

/** Custom SVG illustration matching the Figma onboarding design of a rocket and a girl flying on a paper plane */
function OnboardingIllustration() {
  return (
    <Svg width={width * 0.85} height={width * 0.85} viewBox="0 0 300 300">
      <Defs>
        <LinearGradient id="blueBlobGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <Stop offset="0%" stopColor="#EBF2FC" stopOpacity="0.6" />
          <Stop offset="100%" stopColor="#DBEAFE" stopOpacity="0.8" />
        </LinearGradient>
        <LinearGradient id="rocketGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <Stop offset="0%" stopColor="#FFFFFF" />
          <Stop offset="100%" stopColor="#F1F5F9" />
        </LinearGradient>
      </Defs>

      {/* Background circular blob */}
      <Circle cx="160" cy="145" r="95" fill="url(#blueBlobGrad)" />
      
      {/* Backdrop decorative dotted circle */}
      <Path 
        d="M 65 145 A 95 95 0 0 1 255 145" 
        fill="none" 
        stroke="#BFDBFE" 
        strokeWidth="1.5" 
        strokeDasharray="4 4" 
      />

      {/* Rocket Group (diagonally rotated taking off) */}
      <G transform="translate(65, 45) rotate(-35)">
        {/* Flame trail */}
        <Path d="M 25 90 C 25 110, 15 130, 25 150 C 35 130, 25 110, 25 90" fill="#93C5FD" opacity="0.6" />
        <Path d="M 25 90 L 15 115 L 25 105 L 35 115 Z" fill="#2563EB" opacity="0.4" />
        
        {/* Rocket fins */}
        <Path d="M 10 75 L 0 90 L 15 85 Z" fill="#1E293B" />
        <Path d="M 40 75 L 50 90 L 35 85 Z" fill="#1E293B" />
        <Path d="M 25 75 L 25 90" stroke="#1E293B" strokeWidth="2.5" />
        
        {/* Rocket body */}
        <Path 
          d="M 15 35 C 15 20, 20 5, 25 0 C 30 5, 35 20, 35 35 L 35 80 L 15 80 Z" 
          fill="url(#rocketGrad)" 
          stroke="#1E293B" 
          strokeWidth="2.5" 
        />
        
        {/* Rocket window */}
        <Circle cx="25" cy="45" r="5.5" fill="#3B82F6" stroke="#1E293B" strokeWidth="2" />
        
        {/* Highlight on rocket body */}
        <Path d="M 18 35 L 18 75" stroke="#FFFFFF" strokeWidth="1" opacity="0.7" />
      </G>

      {/* Large Paper Airplane carrying the girl */}
      <G transform="translate(70, 135) rotate(-3)">
        {/* Paper plane shadow / back fold */}
        <Path d="M 0 50 L 80 40 L 45 65 Z" fill="#CBD5E1" />
        {/* Paper plane main body */}
        <Path d="M 0 50 L 90 20 L 50 70 Z" fill="#F8FAFC" stroke="#1E293B" strokeWidth="2" />
        <Path d="M 50 70 L 90 20 L 45 65 Z" fill="#E2E8F0" stroke="#1E293B" strokeWidth="2" />
        
        {/* Girl sitting on the paper plane */}
        {/* Legs dangling */}
        <Path d="M 28 42 L 15 72 L 10 70 L 22 38 Z" fill="#2563EB" />
        <Path d="M 33 42 L 23 75 L 18 73 L 28 38 Z" fill="#1D4ED8" />
        
        {/* Torso / body */}
        <Path d="M 28 15 C 28 15, 32 38, 42 42 L 30 45 Z" fill="#93C5FD" stroke="#1E293B" strokeWidth="1.5" />
        
        {/* Waving Arm */}
        <Path d="M 36 20 L 55 5 L 58 8 L 38 23 Z" fill="#FCD9B6" stroke="#1E293B" strokeWidth="1.5" />
        
        {/* Head */}
        <Circle cx="32" cy="5" r="7.5" fill="#FCD9B6" stroke="#1E293B" strokeWidth="1.5" />
        
        {/* Hair */}
        <Path d="M 25 5 C 25 -2, 39 -2, 39 5 C 39 8, 37 10, 32 10 C 27 10, 25 8, 25 5" fill="#1E293B" />
      </G>

      {/* Small Black Paper Airplane at the bottom right */}
      <G transform="translate(195, 205) rotate(15)">
        <Path d="M 0 15 L 35 0 L 15 22 Z" fill="#1E293B" />
        <Path d="M 15 22 L 35 0 L 12 18 Z" fill="#334155" />
      </G>
    </Svg>
  );
}

export default function OnboardingScreen({ onNext }: OnboardingScreenProps) {
  return (
    <View style={styles.container}>
      {/* Main Illustration */}
      <View style={styles.illustrationContainer}>
        <OnboardingIllustration />
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
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    paddingBottom: 40,
    paddingTop: 20,
  },
  illustrationContainer: {
    flex: 1.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  narrativeContainer: {
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
