import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { ArrowRight, Shield, TrendingUp, BarChart3 } from 'lucide-react-native';
import Svg, { Circle, Path, G, Defs, LinearGradient, Stop } from 'react-native-svg';
import { Colors, Shadows } from '../constants/theme';

const { width } = Dimensions.get('window');

interface OnboardingScreenProps {
  onNext: () => void;
}

/** Custom SVG illustration matching the Figma onboarding design */
function OnboardingIllustration() {
  return (
    <Svg width={width * 0.75} height={width * 0.75} viewBox="0 0 300 300">
      <Defs>
        <LinearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <Stop offset="0%" stopColor="#EBF2FC" />
          <Stop offset="100%" stopColor="#DBEAFE" />
        </LinearGradient>
        <LinearGradient id="personGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <Stop offset="0%" stopColor="#2563EB" />
          <Stop offset="100%" stopColor="#1D4ED8" />
        </LinearGradient>
        <LinearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <Stop offset="0%" stopColor="#3B82F6" />
          <Stop offset="100%" stopColor="#93C5FD" />
        </LinearGradient>
      </Defs>

      {/* Background circle */}
      <Circle cx="150" cy="150" r="130" fill="url(#bgGrad)" />

      {/* Decorative elements */}
      <Circle cx="80" cy="80" r="8" fill="#93C5FD" opacity={0.5} />
      <Circle cx="230" cy="100" r="5" fill="#3B82F6" opacity={0.4} />
      <Circle cx="60" cy="200" r="6" fill="#BFDBFE" opacity={0.6} />
      <Circle cx="245" cy="210" r="4" fill="#2563EB" opacity={0.3} />

      {/* Person sitting - simplified geometric figure */}
      {/* Chair/seat */}
      <Path d="M 120 230 L 200 230 L 210 260 L 110 260 Z" fill="#1E293B" opacity={0.15} />
      
      {/* Legs */}
      <Path d="M 140 230 L 125 270 L 135 270 L 148 235 Z" fill="#1E293B" />
      <Path d="M 170 230 L 185 270 L 175 270 L 163 235 Z" fill="#1E293B" />

      {/* Body/torso */}
      <Path d="M 135 170 C 135 165, 140 155, 155 155 C 170 155, 178 165, 178 170 L 178 230 L 135 230 Z" fill="url(#personGrad)" />

      {/* Head */}
      <Circle cx="157" cy="138" r="22" fill="#FCD9B6" />
      
      {/* Hair */}
      <Path d="M 135 130 C 135 110, 145 105, 157 105 C 169 105, 180 110, 180 130 L 178 125 C 175 115, 168 112, 157 112 C 146 112, 139 115, 137 125 Z" fill="#1E293B" />

      {/* Arms */}
      <Path d="M 135 180 L 105 195 L 100 210 L 108 212 L 112 200 L 135 190 Z" fill="url(#personGrad)" />
      <Path d="M 178 175 L 210 165 L 225 155 L 222 148 L 208 158 L 178 168 Z" fill="url(#personGrad)" />

      {/* Laptop/device on lap */}
      <Path d="M 125 215 L 190 215 L 195 225 L 120 225 Z" fill="#334155" />
      <Path d="M 130 200 L 185 200 L 190 215 L 125 215 Z" fill="#475569" />
      {/* Screen glow */}
      <Path d="M 133 203 L 182 203 L 186 213 L 129 213 Z" fill="#93C5FD" opacity={0.6} />

      {/* Floating credit score card */}
      <G transform="translate(195, 110)">
        <Path d="M 0 5 C 0 2, 2 0, 5 0 L 65 0 C 68 0, 70 2, 70 5 L 70 45 C 70 48, 68 50, 65 50 L 5 50 C 2 50, 0 48, 0 45 Z" fill={Colors.white} opacity={0.95} />
        <Path d="M 10 12 L 60 12" stroke="#E2E8F0" strokeWidth="2" />
        <Path d="M 10 22 L 45 22" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round" />
        <Path d="M 10 32 L 35 32" stroke="#10B981" strokeWidth="2" strokeLinecap="round" />
        <Path d="M 10 40 L 50 40" stroke="#E2E8F0" strokeWidth="2" />
        <Circle cx="58" cy="38" r="6" fill="#EFF6FF" />
        <Path d="M 55 38 L 57 40 L 61 36" stroke="#3B82F6" strokeWidth="1.5" fill="none" />
      </G>

      {/* Floating chart element */}
      <G transform="translate(55, 95)">
        <Path d="M 0 5 C 0 2, 2 0, 5 0 L 55 0 C 58 0, 60 2, 60 5 L 60 40 C 60 43, 58 45, 55 45 L 5 45 C 2 45, 0 43, 0 40 Z" fill={Colors.white} opacity={0.9} />
        <Path d="M 8 35 L 18 25 L 28 30 L 38 15 L 52 20" stroke="#3B82F6" strokeWidth="2" fill="none" strokeLinecap="round" />
        <Circle cx="38" cy="15" r="3" fill="#2563EB" />
      </G>

      {/* Small floating dots/particles */}
      <Circle cx="100" cy="160" r="3" fill="#3B82F6" opacity={0.6} />
      <Circle cx="215" cy="185" r="2" fill="#93C5FD" opacity={0.8} />
      <Circle cx="130" cy="100" r="2.5" fill="#2563EB" opacity={0.4} />
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

      {/* Feature indicators */}
      <View style={styles.featureRow}>
        <View style={styles.featurePill}>
          <Shield size={14} color={Colors.primaryLight} />
          <Text style={styles.featurePillText}>Secure</Text>
        </View>
        <View style={styles.featurePill}>
          <TrendingUp size={14} color={Colors.success} />
          <Text style={styles.featurePillText}>Track</Text>
        </View>
        <View style={styles.featurePill}>
          <BarChart3 size={14} color={Colors.purple} />
          <Text style={styles.featurePillText}>Improve</Text>
        </View>
      </View>

      {/* Text Content */}
      <View style={styles.narrativeContainer}>
        <Text style={styles.title}>Your Credit Score</Text>
        <Text style={styles.description}>
          We provide you with the tools to monitor, understand, and improve your credit score.
        </Text>
      </View>

      {/* Pagination dots + CTA */}
      <View style={styles.footer}>
        <View style={styles.paginationDots}>
          <View style={[styles.dot, styles.dotActive]} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>
        <TouchableOpacity style={styles.nextButton} onPress={onNext} activeOpacity={0.8}>
          <ArrowRight color={Colors.white} size={24} />
        </TouchableOpacity>
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  featureRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12,
    marginBottom: 20,
  },
  featurePill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.background,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    gap: 6,
  },
  featurePillText: {
    fontSize: 12,
    fontWeight: '700',
    color: Colors.textTertiary,
  },
  narrativeContainer: {
    marginVertical: 12,
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  paginationDots: {
    flexDirection: 'row',
    gap: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.border,
  },
  dotActive: {
    width: 24,
    borderRadius: 4,
    backgroundColor: Colors.primaryLight,
  },
  nextButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: Colors.primaryLight,
    justifyContent: 'center',
    alignItems: 'center',
    ...Shadows.blueStrong,
  },
});
